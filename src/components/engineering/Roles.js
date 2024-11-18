import Image from "next/image"

const Roles = () => {
    return (
      <div className='container content-space-1'>
        {/* Heading */}
        <div className='w-lg-65 text-center mx-lg-auto mb-7'>
          <h3>The Team</h3>
        </div>
        {/* End Heading */}
        <div className='row mb-5 mb-md-0'>
          <div className='col-sm-6 col-lg-4 mb-3 mb-sm-5 mb-lg-7'>
            {/* Card */}
            <div className='card card-lg h-100'>
              <div className='card-header bg-soft-primary-light position-relative overflow-hidden'>
                <h5 className='card-title'>Role of the team</h5>
                <div className='position-absolute bottom-0 end-0'>
                  <Image
                    src='../assets/svg/components/shape-5.svg'
                    alt='Image Description'
                    style={{ width: '10rem' }}
                  />
                </div>
              </div>
              <div className='card-body'>
                <p className='card-text'>
                  The Engineering team is incharge of the following roles:
                </p>
                {/* List Checked */}
                <ul className='list-checked list-checked-primary mb-0'>
                  <li className='list-checked-item'>
                    The team is crucial to the organisation, leading software, web
                    and digital, product development and innovation.
                  </li>
                  <li className='list-checked-item'>
                    We design and create technologies that meet the organisation's
                    needs.
                  </li>
                  <li className='list-checked-item'>
                    Continuously optimizing solutions, they enhance product
                    performance, ensuring competitiveness.
                  </li>
                </ul>
                {/* End List Checked */}
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg-4 mb-3 mb-sm-5 mb-lg-7'>
            {/* Card */}
            <div className='card card-lg h-100'>
              <div className='card-header bg-soft-warning position-relative overflow-hidden'>
                <div className='d-flex align-items-center mb-2'>
                  <h5 className='card-title mb-0'>Team Goals</h5>
                </div>
                <div className='position-absolute top-0 end-0'>
                  <Image
                    src='../assets/svg/components/shape-3.svg'
                    alt='Image Description'
                    style={{ width: '10rem' }}
                  />
                </div>
              </div>
              <div className='card-body'>
                <p className='card-text'>
                  The following are some of the team goals:
                </p>
                {/* List Checked */}
                <ul className='list-checked list-checked-primary mb-0'>
                  <li className='list-checked-item'>
                    Developing sustainable solutions
                  </li>
                  <li className='list-checked-item'>
                    Innovation and sustainability
                  </li>
                  <li className='list-checked-item'>
                    Ethical and Inclusive Designs
                  </li>
                  <li className='list-checked-item'>
                    Network and System Configuration
                  </li>
                  <li className='list-checked-item'>Resource Efficiency</li>
                  <li className='list-checked-item'>
                    Documentation and Knowledge Sharing
                  </li>
                </ul>
                {/* End List Checked */}
              </div>
            </div>
            {/* End Card */}
          </div>
          {/* End Col */}
          <div className='col-sm-6 col-lg-4 mb-3 mb-sm-5 mb-lg-7'>
            {/* Card */}
            <div className='card card-lg h-100'>
              <div className='card-header bg-soft-success position-relative overflow-hidden'>
                <h5 className='card-title'>
                  Impact of the team in the organization
                </h5>
                <div className='position-absolute bottom-0 end-0'></div>
              </div>
              <div className='card-body'>
                <p className='card-text'>
                  The team has the following impacts to the Swahilipot
                  organization:
                </p>
                {/* List Checked */}
                <ul className='list-checked list-checked-primary mb-0'>
                  <li className='list-checked-item'>
                    The team intergrates and manages platforms for various
                    activities within the organization.
                  </li>
                  <li className='list-checked-item'>
                    Our efforts have streamlined processes and enhanced efficiency
                    across departments.
                  </li>
                  <li className='list-checked-item'>
                    The team has fostered strong collaboration with other
                    departments such as creatives and communications, synergizing
                    efforts to achieve common goals and objectives.
                  </li>
                  <li className='list-checked-item'>
                    Together, our contributions have significantly impacted the
                    hub's operations and success.
                  </li>
                </ul>
                {/* End List Checked */}
              </div>
            </div>
            {/* End Card */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
        {/* Info */}
        {/* End Info */}
      </div>
    )
}
  

export default Roles