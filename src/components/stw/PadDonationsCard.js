import React from 'react'

const PadDonationsCard = () => {
  return (
    <div>
      {/* Pricing */}
      <div className='container'>
        {/* Heading */}
        <div className='w-lg-65 text-center mx-lg-auto mb-7'>
          <h3>Donate to Support a Girl's Hygiene</h3>
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
                    <span id='pricingCount1' className='fs-2 text-dark fw-bold'>
                      100
                    </span>
                  </div>
                  <h5 className='card-title'>A PAD</h5>
                  <p className='card-text'>A Packet of Pad</p>
                </div>
                <div className='card-body d-flex justify-content-center h-100 py-0'>
                  {/* List Checked */}
                  <ul className='list-checked list-checked-primary'>
                    <li className='list-checked-item'>1 Pad packet</li>
                  </ul>
                  {/* End List Checked */}
                </div>
                <div className='card-footer text-center'>
                  {/* cta button */}
                  <a
                    className='btn btn-primary'
                    href='https://flutterwave.com/pay/fsxxrsiu1hvk'
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
                    <span id='pricingCount2' className='fs-2 text-dark fw-bold'>
                      2000
                    </span>
                  </div>
                  <h5 className='card-title'>Box of Pads</h5>
                </div>
                <div className='card-body d-flex justify-content-center h-100 py-0'>
                  {/* List Checked */}
                  <ul className='list-checked list-checked-primary'>
                    <li className='list-checked-item'>1 Box of Pads</li>
                  </ul>
                  {/* End List Checked */}
                </div>
                <div className='card-footer text-center'>
                  {/* cta button */}
                  <a
                    className='btn btn-primary'
                    href='https://flutterwave.com/pay/qlpsgprb9zr3'
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
                    <span id='pricingCount3' className='fs-2 text-dark fw-bold'>
                      2499
                    </span>
                  </div>
                  <h5 className='card-title'>Hygiene Pack</h5>
                  <p className='card-text'>A Hygiene Pack Donation</p>
                </div>
                <div className='card-body d-flex justify-content-center h-100 py-0'>
                  {/* List Checked */}
                  <ul className='list-checked list-checked-primary'>
                    <li className='list-checked-item'>Pack of Pads</li>
                    <li className='list-checked-item'>Pair of Panties</li>
                    <li className='list-checked-item'>
                      Toothbrush and Toothpaste
                    </li>
                    <li className='list-checked-item'>
                      Tissue, Razor & Bar of Soap
                    </li>
                  </ul>
                  {/* End List Checked */}
                </div>
                <div className='card-footer text-center'>
                  {/* cta button */}
                  <a
                    className='btn btn-primary'
                    href='https://flutterwave.com/pay/zcmuut85e3bj'
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
  )
}

export default PadDonationsCard
