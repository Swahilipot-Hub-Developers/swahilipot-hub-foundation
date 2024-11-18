/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Logo from '@/components/shared/Logo'

const MombasaTourismInnovationLab = () => {
  return (
    <>
      {/* hero */}
      <div className='bg-soft-primary-light position-relative py-4 py-md-0'>
        <div className='container'>
          <div
            className='d-none d-md-block col-md-6 position-absolute top-0 end-0 bg-img-center h-100'
            style={{ backgroundImage: 'url(/images/pitching/9.jpg)' }}
          />
          
          <div className='row align-items-md-center content-space-md-3'>
            <div className='col-md-6'>
              <div className='pe-lg-3'>
                
                <h1 className='h2 mb-3 mb-md-5 text-capitalize'>
                  Mombasa Tourism Innovation Lab
                </h1>
              </div>
            </div>
            {/* End Col */}
            <div className='col-md-4 align-self-md-end position-relative z-1'>
              <div
                className='d-none d-md-block transform-0'
                style={{
                  marginBottom: '-12rem',
                  marginLeft: '-3rem',
                  marginRight: '10rem',
                }}
              >
               
              </div>
            </div>
          
          </div>
         
        </div>
      </div>

     
      <div className='container content-space-1 content-space-t-md-4 content-space-b-md-3'>
        <section>
          <h2 className='text-center'>About</h2>
          <p>
            The Mombasa innovation lab, hosted at Swahilipot Hub Foundation,
            seeks to inspire the interest of opportunity youth in Mombasa in
            culture and heritage tourism as a means of Job creation. The logic
            of change is underpinned by this quote from the Cabinet secretary
            Tourism and Wildlife.
          </p>

          <div className='card m-5 p-5'>
            <figure>
              <blockquote className='blockquote'>
                <p>
                  It is no longer possible for travel and tourism providers, or
                  destinations, to continue in a “business as usual” model or
                  mind-set. Innovation and change coupled with agility and
                  ability to respond are critical for success today and into the
                  future.
                </p>
              </blockquote>
              <figcaption className='blockquote-footer'>
                Hon. Najib Balala{' '}
                <cite title='Source Title'>EGH Cabinet Secretary</cite>
              </figcaption>
            </figure>
          </div>

          <div className='container m-4 p-4'>
            <p>
              The inexistence of a structured way to innovate and scale new
              tourism products that entice the modern youthful traveller, who is
              more interested in the experience and less on the physical
              possessions, has led to reduction of touristic numbers.
            </p>
            <p>
              With support from the European Union, Camoes IP, Jumuia ya county
              Za Pwani, and the Go-Blue project to incubate innovative ideas in
              cultural and heritage tourism in Mombasa county.
            </p>
            <h3>Objectives of the Mombasa Tourism Innovation Lab</h3>
            <ul>
              <li>
                Create jobs for young people by developing new tourism products
                that are yet to be developed.
              </li>
              <li>
                Become a vehicle to incubate grassroot tourism ideas in Mombasa
                county.
              </li>
              <li>
                Develop research and key data points for advancement of the
                Tourism Industry.
              </li>
              <li>Contribute in rejuvenating the coastal tourism product.</li>
            </ul>
          </div>
        </section>

        <section id='contacts'>
          <div className='card m-4 p-4'>
            <h4 className='text-center'>Talk to Us</h4>
            <form
              action='mailto:peter.kibe@globaldevincubator.org, hailey@swahilipothub.co.ke'
              method='post'
              encType='text/plain'
            >
              <div className='mb-3'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  className='form-control is-valid'
                  id='name'
                  name='name'
                  placeholder='Please enter your name'
                  required
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='organization'>Organization</label>
                <input
                  type='text'
                  className='form-control is-valid'
                  id='organization'
                  name='organization'
                  placeholder='Please enter your organization'
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='tell'>Phone Number</label>
                <input
                  type='tell'
                  className='form-control is-valid'
                  id='tell'
                  name='tel'
                  placeholder='Please enter your Phone Number'
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='message'>Messgae</label>
                <textarea
                  className='form-control is-invalid'
                  placeholder='Textarea field'
                  id='message'
                  rows={4}
                  defaultValue={''}
                />
              </div>

              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </form>
          </div>
        </section>
        <section id='apply'>
          <h2>Apply</h2>
          <p>
            We are receiving proposals from organizations and business in
            tourism, hospitality, and cultural heritage that can benefit from
            the pilot.
          </p>
          <p>
            Kindly click on this link to make your application:
            <a href='https://airtable.com/shru9sDInYXqHsL1g' target='_blank'>
              https://airtable.com/shru9sDInYXqHsL1g
            </a>
          </p>
        </section>
        <section id='partners'>
          <h2>Applicants</h2>
          <ul>
            <li>
              {' '}
              <a href='https://sphmombasa-my.sharepoint.com/personal/dev_swahilipothub_co_ke/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fdev%5Fswahilipothub%5Fco%5Fke%2FDocuments%2Finnovation%2FPreliminary%20short%20Listed%20Applications%2Epdf&parent=%2Fpersonal%2Fdev%5Fswahilipothub%5Fco%5Fke%2FDocuments%2Finnovation&ga=1'>
                Preliminary short Listed Applications
              </a>{' '}
            </li>
            <li>
              <a href='https://sphmombasa-my.sharepoint.com/:b:/g/personal/dev_swahilipothub_co_ke/EZoq3aunE-5MlqiXzOX5B_IBsiKHz22TxPSUOFEUTbkviA?e=4jiid5'>
                Applications dropped from the preliminary short List
              </a>
            </li>
          </ul>
        </section>
        <section id='partners'>
          <h2>Panel Shortlisting</h2>
          <ul>
            <li>
              {' '}
              <a href='https://sphmombasa-my.sharepoint.com/:b:/g/personal/dev_swahilipothub_co_ke/ESHMh_hKn_tIr-P0OgaJ3kMBlKRZTuHAbYVCbGMma6Hkpw?e=KN7uNh'>
                ORGANIZATIONS MADE TO THE PANEL SHORTLIST.
              </a>{' '}
            </li>
            <li>
              <a href='https://sphmombasa-my.sharepoint.com/:b:/g/personal/dev_swahilipothub_co_ke/ESCoDyvWVnNNsOoMMEC-ddkBQCh0qMRj40kdIJAzU8MwCA?e=ERer12'>
                ORGANIZATIONS DID NOT MAKE IT TO THE PANEL SHORTLIST
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default MombasaTourismInnovationLab
