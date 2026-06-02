import { useState } from 'react'
import StatsCards from '../StatsCards/StatsCards'
import ReferralSection from '../ReferralSection/ReferralSection'
import ReferralTable from '../ReferralTable/ReferralTable'
import './Dashboard.css'

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="2">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
)

const AvatarIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="18" fill="#e8e4ff" />
    <circle cx="18" cy="14" r="6" fill="#6C5CE7" />
    <path d="M6 30 Q6 22 18 22 Q30 22 30 30" fill="#6C5CE7" />
  </svg>
)

const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Referral Dashboard</h1>

        <div className="dashboard-controls">
          <div className="search-bar">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search here..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <button className="search-btn">Search</button>
          </div>

          <div className="user-info">
            <div className="bell-wrap">
              <BellIcon />
              <span className="bell-dot" />
            </div>
            <AvatarIcon />
            <div className="user-meta">
              <span className="user-name">Name</span>
              <span className="user-role">Admin</span>
            </div>
            <ChevronIcon />
          </div>
        </div>
      </div>

      <StatsCards />

      <ReferralSection />

      <ReferralTable />
    </div>
  )
}

export default Dashboard
