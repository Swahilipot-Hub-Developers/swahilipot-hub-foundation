const Card = ({ title, badgeText, href, description }) => {
  return (
    <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
      <a
        className="card card-lg card-transition bg-primary-dark"
        href={href}
        style={{ minHeight: '22rem' }}
      >
        <div className="card-body">
          <div className="mb-3">
            <span className="badge bg-soft-light">{badgeText}</span>
          </div>
          <h4 className="text-center text-white mb-5">{title}</h4>
          <span className="card-link link-light">
            {description} <i className="bi-chevron-right small ms-1" />
          </span>
        </div>
      </a>
    </div>
  )
}

export default Card
