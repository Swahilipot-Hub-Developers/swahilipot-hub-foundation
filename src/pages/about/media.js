import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

const images = [
  '/assets/sphImages/Image 1.jpeg',
  '/assets/sphImages/Image 2.jpeg',
  '/assets/sphImages/Image 3.jpg',
  '/assets/sphImages/Image 4.jpeg',
  '/assets/sphImages/Image 5.jpeg',
  '/assets/sphImages/Image 6.jpeg',
  '/assets/sphImages/Image 7.jpeg',
  '/assets/sphImages/Image 8.jpeg',
  '/assets/sphImages/Image 9.jpeg',
  '/assets/sphImages/Image 10.jpeg',
  '/assets/sphImages/Image 11.jpeg',
  '/assets/sphImages/Image 12.jpeg',
  '/assets/sphImages/Image 13.jpg',
  '/assets/sphImages/Image 14.jpeg',
  '/assets/sphImages/Image 15.jpeg',
  '/assets/sphImages/Image 16.jpeg',
  '/assets/sphImages/Image 17.jpg',
  '/assets/sphImages/Image 18.jpeg',
  '/assets/sphImages/Image 19.jpeg',
  '/assets/sphImages/Image 20.jpeg',
  '/assets/sphImages/Image 21.JPG',
  '/assets/sphImages/Image 22.jpeg',
  '/assets/sphImages/Image 23.jpg',
  '/assets/sphImages/Image 24.jpeg',
  '/assets/sphImages/Image 25.jpeg',
  '/assets/sphImages/Image 26.jpeg',
  '/assets/sphImages/Image 27.jpg',
  '/assets/sphImages/Image 28.jpeg',
  '/assets/sphImages/Image 29.jpeg',
  '/assets/sphImages/Image 30.jpg',
  '/assets/sphImages/Image 31.jpg',
  '/assets/sphImages/Image 32.jpg',
  '/assets/sphImages/Image 33.jpg',
  '/assets/sphImages/Image 34.jpg',
  '/assets/sphImages/Image 35.jpg',
  '/assets/sphImages/Image 36.jpg',
  '/assets/sphImages/Image 37.jpg',
  '/assets/sphImages/Image 38.jpg',
  '/assets/sphImages/Image 39.jpg',
  '/assets/sphImages/Image 40.jpg',
  '/assets/sphImages/Image 41.jpg',
  '/assets/sphImages/Image 42.jpg',
  '/assets/sphImages/Image 43.jpg',
  '/assets/sphImages/Image 44.jpg',
  '/assets/sphImages/Image 45.jpg',
  '/assets/sphImages/Image 46.JPG',
  '/assets/sphImages/Image 47.jpg',
  '/assets/sphImages/Image 48.jpg',
  '/assets/sphImages/Image 49.jpg',
  '/assets/sphImages/Image 50.jpg',
  '/assets/sphImages/Image 51.jpg',
  '/assets/sphImages/Image 52.JPG',
  '/assets/sphImages/Image 53.jpeg',
  '/assets/sphImages/Image 54.jpg',
  '/assets/sphImages/Image 55.jpg',
  '/assets/sphImages/Image 56.jpg',
  '/assets/sphImages/Image 57.jpg',
  '/assets/sphImages/Image 58.jpg',
  '/assets/sphImages/Image 59.jpeg',
  '/assets/sphImages/Image 60.jpeg',
]

const imageStyle = {
  transition: 'transform 0.3s ease-in-out',
}

const Media = () => {
  return (
    <div>
      <section className='text-center container'>
        <h5 className='display-4 text-primary m-5 text-center'>Media</h5>
        <div className='row justify-content-sm-center'>
          <div className='text-center mb-7 col-md-8 col-lg-7'>
            <p className='text-muted'>
              Welcome to our Media page, where the visual stories of Swahilipot
              Hub come to life. Here, we capture the essence of creativity,
              collaboration, and innovation, as we celebrate the remarkable
              journeys and moments that define our hub.
            </p>
          </div>
        </div>
      </section>

      <div className='album py-5 bg-body-tertiary'>
        <div className='container'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
            {images.map((image, index) => (
              <div className='col' key={index}>
                <div className='card shadow-sm'>
                  <div>
                    <Image
                      className='bd-placeholder-img card-img-top'
                      src={image}
                      alt={`Image ${index + 1}`}
                      width={345}
                      height={240}
                      style={imageStyle}
                      onMouseOver={e => {
                        e.currentTarget.style.transform = 'scale(1.1)'
                      }}
                      onMouseOut={e => {
                        e.currentTarget.style.transform = 'scale(1)'
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Media
