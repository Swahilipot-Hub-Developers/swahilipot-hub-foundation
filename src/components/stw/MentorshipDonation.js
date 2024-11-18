import React from 'react'

const MentorshipDonation = () => {
  return (
    <div>
      <div>
        {/* Pricing */}
        <div className='container'>
          {/* Heading */}
          <div className='w-lg-65 text-center mx-lg-auto mb-7'>
            <h3>Donate to Mentor a Women in Tech</h3>
          </div>
          {/* End Heading */}
          {/* Card Group */}
          <div className='w-lg-85 shadow-lg rounded mx-lg-auto mb-7'>
            <div className='row card-group-md-row card-group-md-3'>
              <div className='col-md mb-3 mb-md-0'>
                {/* Card */}
                <div className='card card-lg'>
                  <div className='card-header text-center'>
                    <div className='mb-2'>
                      <span className='fs-5 align-top text-dark fw-bold'>
                        KES
                      </span>
                      <span
                        id='pricingCount1'
                        className='fs-2 text-dark fw-bold'
                      >
                        10,000
                      </span>
                    </div>
                    <h5 className='card-title'>
                      Full Mentorship Support Package
                    </h5>
                    <p className='card-text'>A Packet of Pad</p>
                  </div>
                  <div className='card-body d-flex justify-content-center h-100 py-0'>
                    {/* List Checked */}
                    <p className='list-checked list-checked-primary'>
                      Your generous contribution will play a vital role in
                      empowering Swahili Tech Women's mission to mentor and
                      support women throughout the Pwani region. Your donation
                      will directly contribute to facilitating mentorship
                      programs and providing essential hygiene products and
                      sanitary pads to those in need. Thank you for your support
                      in advancing our efforts to foster growth and empowerment
                      among women in the tech industry.
                    </p>
                    {/* End List Checked */}
                  </div>
                  <div className='card-footer text-center'>
                    {/* cta button */}
                    <a
                      className='btn btn-primary'
                      href='https://flutterwave.com/pay/4nvphchgpofl'
                      target='_blank'
                    >
                      Donate Now
                    </a>
                    <small className='d-block text-muted'>
                      Not a recurring payment
                    </small>
                  </div>
                </div>
                {/* End Card */}
              </div>
              {/* End Col */}
              <div className='col-md mb-3 mb-md-0'>
                {/* Card */}
                <div className='card card-lg'>
                  <div className='card-header text-center'>
                    <div className='mb-2'>
                      <span className='fs-5 align-top text-dark fw-bold'>
                        KES
                      </span>
                      <span
                        id='pricingCount2'
                        className='fs-2 text-dark fw-bold'
                      >
                        5000
                      </span>
                    </div>
                    <h5 className='card-title'>
                      Half Mentorship Support Package
                    </h5>
                  </div>
                  <div className='card-body d-flex justify-content-center h-100 py-0'>
                    {/* List Checked */}
                    <p>
                      Your generous contribution will significantly contribute
                      to Swahili Tech Women's mission of mentoring and
                      supporting women in the Pwani region. With your donation,
                      we can partially fund mentorship programs and provide
                      essential hygiene products and sanitary pads to those in
                      need. Thank you for your support in our ongoing efforts to
                      empower women in the tech industry.
                    </p>
                    {/* End List Checked */}
                  </div>
                  <div className='card-footer text-center'>
                    {/* cta button */}
                    <a
                      className='btn btn-primary'
                      href='https://flutterwave.com/pay/wiqpywjiz2w5'
                      target='_blank'
                    >
                      Donate Now
                    </a>
                    <small className='d-block text-muted'>
                      Not a recurring payment
                    </small>
                  </div>
                </div>
                {/* End Card */}
              </div>
              <div className='col-12'>
                {/* Card */}
                <div className='card card-lg card-divider'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-sm mb-3 mb-sm-0'>
                        <h5 className='card-title'>Custom Donation?</h5>
                        <p className='card-text'>
                          Check our Donation Button Above for a Custom Amount
                          Donation Option
                        </p>
                      </div>
                      {/* End Col */}
                      <div className='col-sm-auto'>
                        <a
                          className='btn btn-white'
                          href='https://flutterwave.com/donate/moihmphwlo5o'
                          target='_blank'
                        >
                          Donate Now
                          <i className='bi-chevron-right small ms-2' />
                        </a>
                      </div>
                      {/* End Col */}
                    </div>
                    {/* End Row */}
                  </div>
                </div>
                {/* End Card */}
              </div>
              {/* End Col */}
            </div>
            {/* End Row */}
          </div>
          {/* End Card Group */}
        </div>
        {/* End Pricing */}
      </div>
    </div>
  )
}

export default MentorshipDonation
