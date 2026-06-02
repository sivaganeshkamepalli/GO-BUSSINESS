import { useState } from 'react'
import './ReferralSection.css'

const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
)

const REFERRAL_LINK = 'https://gobusiness.com/?refferal=ABCXYZ'
const REFERRAL_CODE = 'ABCXYZ'

function ReferralSection() {
  const [linkCopied, setLinkCopied] = useState(false)
  const [codeCopied, setCodeCopied] = useState(false)

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).catch(() => {
      // Fallback for older browsers
      const el = document.createElement('textarea')
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    })

    if (type === 'link') {
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 2000)
    } else {
      setCodeCopied(true)
      setTimeout(() => setCodeCopied(false), 2000)
    }
  }

  return (
    <div className="referral-section">

      <div className="service-row">
        <div className="service-col">
          <span className="service-col-label">Service</span>
          <span className="service-col-value purple">some service</span>
        </div>
        <div className="service-col">
          <span className="service-col-label">Your Referrals</span>
          <span className="service-col-value">0 + &nbsp; 0</span>
        </div>
        <div className="service-col">
          <span className="service-col-label">Active Referrals</span>
          <span className="service-col-value">0 + &nbsp; 0</span>
        </div>
        <div className="service-col">
          <span className="service-col-label">Total Ref. Earnings</span>
          <span className="service-col-value">$0.00</span>
        </div>
      </div>

      <div className="earn-banner">
        <span>Refer Friends And Earn More !!</span>
      </div>

      <div className="referral-inputs-row">

        <div className="referral-input-group">
          <label className="ref-label">Your Referral Link</label>
          <div className="ref-input-row">
            <input
              type="text"
              value={REFERRAL_LINK}
              readOnly
              className="ref-input"
            />
            <button
              className={`copy-btn ${linkCopied ? 'copied' : ''}`}
              onClick={() => handleCopy(REFERRAL_LINK, 'link')}
            >
              <CopyIcon />
              <span>{linkCopied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>

        <div className="referral-input-group">
          <label className="ref-label">Your Referral Code</label>
          <div className="ref-input-row">
            <input
              type="text"
              value={REFERRAL_CODE}
              readOnly
              className="ref-input code-input"
            />
            <button
              className={`copy-btn ${codeCopied ? 'copied' : ''}`}
              onClick={() => handleCopy(REFERRAL_CODE, 'code')}
            >
              <CopyIcon />
              <span>{codeCopied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ReferralSection
