//import sponsors from '../sponsors/sponsorsData';
import Image from 'next/image'

const sponsors = [
  {
    id: 1,
    imageURL: '/assets/sponsorsLogos/museumslogo.png',
    name: 'National Museums of Kenya',
    width: 320.99,
    height: 235.99,
    link: 'https://museums.or.ke/',
  },

  {
    id: 2,
    imageURL: '/assets/sponsorsLogos/seacom.png',
    name: 'Seacom',
    width: 340.99,
    height: 235.99,
    link: 'https://seacom.co.ke/',
  },
]

const SponsorsPage = () => {
  return (
    <>
      <h5 className="display-4 text-primary m-5 text-center">Our Partners</h5>
      <div className="container py-4">
        <div className="row logos justify-content-center">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="logo-item col-6 col-md-12 col-lg-4">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Image
                  src={sponsor.imageURL}
                  alt={sponsor.name}
                  width={sponsor.width}
                  height={sponsor.height}
                  className="img-fluid"
                />
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={
                    sponsor.name === 'Seacom'
                      ? { fontSize: '20px', marginTop: '15px' }
                      : {}
                  }
                >
                  {sponsor.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SponsorsPage
