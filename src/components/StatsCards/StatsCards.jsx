import './StatsCards.css'


const BalanceIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="1.5" />
    <text x="20" y="25" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">$</text>
  </svg>
)

const DiscountPercentIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="1.5" />
    <text x="20" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">%</text>
  </svg>
)

const ReferralIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="1.5" />
    <circle cx="14" cy="17" r="3" stroke="white" strokeWidth="1.5" />
    <circle cx="26" cy="17" r="3" stroke="white" strokeWidth="1.5" />
    <path d="M8 28 Q14 22 20 22 Q26 22 32 28" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
)

const DiscountAmountIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="1.5" />
    <path d="M13 27 L27 13M14 14h4v4M22 22h4v4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const CommissionIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="1.5" />
    <path d="M13 20 L18 25 L27 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
)

const EarningIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="1.5" />
    <rect x="12" y="18" width="6" height="8" rx="1" stroke="white" strokeWidth="1.5" />
    <rect x="22" y="14" width="6" height="12" rx="1" stroke="white" strokeWidth="1.5" />
  </svg>
)

const CommDiscountIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="1.5" />
    <path d="M20 13 L20 27 M14 17 L26 17 M14 23 L26 23" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const BankTransferIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="1.5" />
    <path d="M20 12 L28 17 L12 17 Z" stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    <rect x="13" y="17" width="4" height="8" stroke="white" strokeWidth="1.5" />
    <rect x="23" y="17" width="4" height="8" stroke="white" strokeWidth="1.5" />
    <line x1="12" y1="27" x2="28" y2="27" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const STATS = [
  { id: 1, label: 'Total Balance',       value: '$9,568.00', Icon: BalanceIcon,       gradient: 'card-grad-1' },
  { id: 2, label: 'Discount Percentage', value: '60%',       Icon: DiscountPercentIcon, gradient: 'card-grad-2' },
  { id: 3, label: 'Total Referral',      value: '300',       Icon: ReferralIcon,      gradient: 'card-grad-3' },
  { id: 4, label: 'Discount Amount',     value: '$300',      Icon: DiscountAmountIcon, gradient: 'card-grad-4' },
  { id: 5, label: 'Commission Amount',   value: '$465.00',   Icon: CommissionIcon,    gradient: 'card-grad-1' },
  { id: 6, label: 'Total Earning',       value: '$158.00',   Icon: EarningIcon,       gradient: 'card-grad-2' },
  { id: 7, label: 'Commission Discount', value: '40%',       Icon: CommDiscountIcon,  gradient: 'card-grad-3' },
  { id: 8, label: 'Total Bank Transfer', value: '$534.00',   Icon: BankTransferIcon,  gradient: 'card-grad-4' },
]

function StatCard({ label, value, Icon, gradient }) {
  return (
    <div className={`stat-card ${gradient}`}>
      <div className="stat-icon">
        <Icon />
      </div>
      <div className="stat-info">
        <span className="stat-value">{value}</span>
        <span className="stat-label">{label}</span>
      </div>
    </div>
  )
}

function StatsCards() {
  return (
    <div className="stats-grid">
      {STATS.map(stat => (
        <StatCard key={stat.id} {...stat} />
      ))}
    </div>
  )
}

export default StatsCards
