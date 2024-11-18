// components/EventCard.js
import Link from 'next/link'

const EventCard = ({ event }) => {
  return (
    <Link
      className="card card-lg card-transition bg-primary-dark"
      href={event.link}
      style={{ minHeight: '22rem' }}
    >
      <div className="card-body">
        <h2 className="text-white text-center mb-5">{event.title}</h2>
        <p className="fs-6 text-white text-center mb-5">{event.description}</p>
        <p className="text-warning text-center">
          <span>{event.date}</span>
          <br />
          {event.time}
          <br />
          {event.venue}
        </p>
        <span className="card-link link-light text-center">
          past events <i className="bi-chevron-right small ms-1" />
        </span>
      </div>
    </Link>
  )
}

export default EventCard
