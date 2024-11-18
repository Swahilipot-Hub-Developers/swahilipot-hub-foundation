/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

const PillarCard = ({ href, bgClass, imgSrc, title, description, badge }) => {
  return (
    <div className='col-sm-6 col-md-4 mb-3 mb-sm-5 mb-md-7'>
      <a
        className={`card card-lg card-transition ${bgClass} shadow-none h-100`}
        href={href}
      >
        <div className='card-header'>
          <div className='d-flex align-items-center'>
            <h5 className='card-title text-inherit mb-0'>{title}</h5>
            {badge && (
              <span className='badge bg-soft-secondary text-secondary rounded-pill ms-1'>
                {badge}
              </span>
            )}
          </div>
          <p className='card-text text-body'>{description}</p>
        </div>
        <div className='card-body'>
          <img className='card-img' src={imgSrc} alt={`${title} Image`} />
        </div>
      </a>
    </div>
  )
}

const pillarCards = [
  {
    href: '#',
    bgClass: 'bg-soft-primary-light',
    imgSrc: '../assets/svg/illustrations/frame-layouts.svg',
    title: 'Technology',
    description:
      'Swahilipot Hub empowers young individuals in technology through programs like Data and Research, Digital Literacy, Industrial Attachment, Campus Ambassador, and Pitching Thursday,',
  },
  {
    href: '#',
    bgClass: 'bg-soft-warning',
    imgSrc: '../assets/svg/illustrations/oc-money-profits.svg',
    title: 'Creatives & Arts',
    description:
      "The Creative Department brings imagination to life through initiatives like Sanaa Show and Sanaart Shop, nurturing talents in acting, voice arts, and diverse artistic expressions, empowering artists to make a difference in the community",
  },
  {
    href: '#',
    bgClass: 'bg-soft-success',
    imgSrc: '../assets/svg/illustrations/oc-maintenance.svg',
    title: 'Heritage',
    description:
      'Connecting the past and the future',
    badge: 'Future & Past',
  },
]

const CorePillars = () => {
  return (
    <div className='container content-space-1'>
      {/* Heading */}
      <div className='w-lg-65 text-center mx-lg-auto mb-7'>
        <h3>Swahilipot Core Pillars</h3>
        <p className='fs-6'>Tech | Arts | Heritage</p>
      </div>
      {/* End Heading */}
      <div className='row'>
        {pillarCards.map((card, index) => (
          <PillarCard
            key={index}
            href={card.href}
            bgClass={card.bgClass}
            imgSrc={card.imgSrc}
            title={card.title}
            description={card.description}
            badge={card.badge}
          />
        ))}
      </div>
      {/* End Row */}
      {/* Info */}
      <div className='text-center'>
        <p className='mb-0'>Have a question?</p>
        <a className='link' href='/contact'>
          Contact Us <i className='bi-chevron-right small ms-1' />
        </a>
      </div>
      {/* End Info */}
    </div>
  )
}

export default CorePillars
