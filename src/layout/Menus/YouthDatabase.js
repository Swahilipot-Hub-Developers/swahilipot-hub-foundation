import Link from 'next/link'

const YouthDatabase = () => {
  return (
    <div className="nav-item">
      <Link href="/youth/JoinYouth" legacyBehavior>
        <a className="nav-link">Join Our Youth Database</a>
      </Link>
    </div>
  )
}

export default YouthDatabase
