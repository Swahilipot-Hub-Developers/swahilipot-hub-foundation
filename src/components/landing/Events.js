import Image from 'next/image'
import { useEffect, useState } from 'react'

const Events = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://www.platform.swahilipothub.org/api/programs/')
      .then((response) => response.json())
      .then((data) => {
        setEvents(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching events:', error)
        setLoading(false)
      })
  }, [])

  return (
    <section className="container my-4">
      <div>
        <h5 className="text-center display-6">Programs</h5>
        <p className="fs-6 text-center">
          Swahilipot Hub has been the venue for a lot of events and programs,
          all in focus on the main departments at the organization. Here are 3
          of the recent events that took place at the community space:
        </p>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {loading ? (
          <p>Loading events...</p>
        ) : events.length > 0 ? (
          events.map((event) => (
            <div
              key={event.id}
              className="card m-2 shadow"
              style={{ width: '18rem' }}
            >
              {event.banner_image && (
                <Image
                  src={event.banner_image}
                  className="card-img-top"
                  alt={event.title}
                />
              )}
              <div className="card-body">
                <h6 className="card-title">{event.title}</h6>
                <p className="card-text">{event.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Programs will pop up here soon. Visit later.</p>
        )}
      </div>
    </section>
  )
}

export default Events
