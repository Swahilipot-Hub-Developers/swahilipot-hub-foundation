/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

const CarouselItem = ({ src, alt, label, content, isActive, interval }) => {
  return (
    <div
      className={`carousel-item ${isActive ? 'active' : ''}`}
      data-bs-interval={interval}
    >
      <img
        src={src}
        alt={alt}
        layout="responsive"
        width={1920}
        height={1080}
        className="d-block w-100 carousel-image"
      />
      <div className="carousel-caption d-md-block">
        <h3>{label}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}

const carouselItems = [
  {
    src: '/images/hero/00.jpg',
    alt: 'Community',
    label: 'COMMUNITY',
    content:
      'We are a Safe Space to Create, Innovate and Collaborate. Open to all members of the community',
    interval: 10000,
  },
  {
    src: '/images/hero/01.jpg',
    alt: 'Second slide',
    label: 'CREATIVES AND ART',
    content:
      'We provide a platform for creatives to showcase their work, and upskill themselves.',
    interval: 2000,
  },
  {
    src: '/images/hero/02.jpg',
    alt: 'Third slide',
    label: 'TECHNOLOGY AND INNOVATION',
    content:
      'We provide a platform for techies to showcase their work, and upskill themselves.',
    interval: null,
  },
]

const HeroNew = () => {
  return (
    <div className="position-relative overflow-hidden">
      <div>
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {carouselItems.map((item, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0 ? 'true' : 'false'}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="carousel-inner">
            {carouselItems.map((item, index) => (
              <CarouselItem
                key={index}
                src={item.src}
                alt={item.alt}
                label={item.label}
                content={item.content}
                isActive={index === 0}
                interval={item.interval}
              />
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroNew
