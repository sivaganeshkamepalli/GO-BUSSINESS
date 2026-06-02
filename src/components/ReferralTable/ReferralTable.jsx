import { useState, useEffect, useMemo } from 'react'
import './ReferralTable.css'

const API_URL =
  'https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/topin_beta/media/content_loading/uploads/d4457a9c-6134-46a5-b31c-60ad13a3e2f6_userData.json'

const ROWS_PER_PAGE = 10

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

function ReferralTable() {
  const [data, setData] = useState([])       // all rows from API
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')   // search by name
  const [page, setPage] = useState(1)        // current page (1-based)
  const [entries, setEntries] = useState(10) // entries per page selector

  useEffect(() => {
    setLoading(true)

    const NAME_POOL = [
      'Pranjal', 'paritosh', 'palav', 'Moumita', 'Mitesh',
      'Srinivas', 'hritik', 'abc', 'xyz', 'bcd',
      'Rohit', 'Anjali', 'Kiran', 'Deepak', 'Sneha',
      'Vikram', 'Pooja', 'Rahul', 'Neha', 'Arjun',
      'Divya', 'Suresh', 'Kavita', 'Arun', 'Meena',
      'Rajesh', 'Sunita', 'Manoj', 'Geeta', 'Vinod',
      'Preeti', 'Harish', 'Lakshmi', 'Naveen', 'Ritu',
      'Shyam', 'Anita', 'Prakash', 'Sarla', 'Dinesh',
      'Usha', 'Ramesh', 'Kamla', 'Sunil', 'Rekha',
      'Girish', 'Poonam', 'Ashok', 'Manjula', 'Sanjay',
      'Shobha', 'Anil', 'Sarita', 'Vijay', 'Pushpa',
      'Gopal', 'Savita', 'Naresh', 'Radha', 'Hemant',
    ]

    fetch(API_URL)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch data')
        return res.json()
      })
      .then(json => {
        const rows = Array.isArray(json) ? json : json.data || json.users || []
        if (rows.length > 0) {
          console.log('API field keys:', Object.keys(rows[0]))
        }

        const normalized = rows.map((row, idx) => {
          const apiName =
            row.name || row.Name ||
            row.fullName || row.full_name ||
            row.username || row.userName || row.user_name ||
            row.firstName || row.first_name ||
            row.displayName || row.display_name ||
            (row.email ? row.email.split('@')[0] : null) ||
            (row.Email ? row.Email.split('@')[0] : null)

          const displayName = apiName
            ? String(apiName)
            : NAME_POOL[idx % NAME_POOL.length]

          return { ...row, _displayName: displayName }
        })

        setData(normalized)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const filtered = useMemo(() => {
    if (!search.trim()) return data
    return data.filter(row =>
      (row._displayName || '')
        .toLowerCase()
        .includes(search.toLowerCase())
    )
  }, [data, search])

  useEffect(() => { setPage(1) }, [search])

  const totalPages = Math.max(1, Math.ceil(filtered.length / entries))
  const paginated = filtered.slice((page - 1) * entries, page * entries)

  const pageNumbers = () => {
    const nums = []
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= page - 1 && i <= page + 1)
      ) {
        nums.push(i)
      }
    }
    return nums
  }

  const get = (row, ...keys) => {
    for (const k of keys) {
      if (row[k] !== undefined) return row[k]
    }
    return '—'
  }

  return (
    <div className="referral-table-section">

      <div className="table-controls">
        <div className="entries-control">
          <span>Show</span>
          <select
            value={entries}
            onChange={e => { setEntries(Number(e.target.value)); setPage(1) }}
            className="entries-select"
          >
            {[10, 25, 50].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
          <span>Entries</span>
        </div>

        <div className="table-search">
          <label>Search:</label>
          <div className="table-search-input">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by name..."
            />
          </div>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="referral-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Profit</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan="4" className="table-msg">Loading data...</td>
              </tr>
            )}
            {!loading && error && (
              <tr>
                <td colSpan="4" className="table-msg error">Error: {error}</td>
              </tr>
            )}
            {!loading && !error && paginated.length === 0 && (
              <tr>
                <td colSpan="4" className="table-msg">No matching data</td>
              </tr>
            )}
            {!loading && !error && paginated.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'row-even' : 'row-odd'}>
                <td>{row._displayName}</td>
                <td>{get(row, 'serviceName', 'service_name', 'service', 'ServiceName')}</td>
                <td>{get(row, 'date', 'Date', 'createdAt')}</td>
                <td className="profit-cell">{get(row, 'profit', 'Profit', 'amount')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <span className="table-info">
          {loading
            ? 'Loading...'
            : `Showing ${filtered.length === 0 ? 0 : (page - 1) * entries + 1} to ${Math.min(page * entries, filtered.length)} of ${filtered.length} entries`
          }
        </span>

        <div className="pagination">
          <button
            className="page-btn"
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Previous
          </button>

          {pageNumbers().map((num, i, arr) => (
            <>
              {i > 0 && arr[i - 1] !== num - 1 && (
                <span key={`dots-${num}`} className="page-dots">…</span>
              )}
              <button
                key={num}
                className={`page-btn page-num ${page === num ? 'active' : ''}`}
                onClick={() => setPage(num)}
              >
                {num}
              </button>
            </>
          ))}

          <button
            className="page-btn"
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>

    </div>
  )
}

export default ReferralTable
