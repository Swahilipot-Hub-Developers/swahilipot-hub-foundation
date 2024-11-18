import Image from 'next/image'

const FeaturedArticle = () => {
  return (
    <div className='container content-space-1' style={{ marginTop: '-10rem' }}>
      {/* Card */}
      <div className='card card-sm'>
        <div className='card-body'>
          <div className='row align-items-md-center'>
            <div className='col-md-6 mb-3 mb-md-0'>
              <Image
                className='card-img'
                height={900}
                width={700}
                src='./assets/img/900x700/img8.jpg'
                alt='Image Description'
              />
            </div>
            {/* End Col */}
            <div className='col-md-6'>
              <div className='ps-md-5'>
                {/* List Separator */}
                <ul className='list-inline list-separator mb-3'>
                  <li className='list-inline-item'>
                    <a className='text-cap text-muted mb-0' href='#'>
                      Product resources
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <span className='text-cap text-muted mb-0'>7 min read</span>
                  </li>
                </ul>
                {/* End List Separator */}
                <h3 className='mb-3 mb-md-5'>
                  <a className='text-dark' href='./blog-article.html'>
                    Introduction to marketing and selling payments for SaaS
                    platforms
                  </a>
                </h3>
                <p>
                  SaaS platforms are often looking for ways to offer
                  complementary services that add extra value for their
                  customers.
                </p>
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
      </div>
      {/* End Card */}
    </div>
  )
}

export default FeaturedArticle
