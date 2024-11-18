import React from 'react'

const InnerNav = () => {
  return (
    <>
      <div className='border-bottom'>
        <div className='container py-3'>
          <div className='w-lg-75 mx-lg-auto'>
            {/* Nav */}
            <ul className='nav nav-pills' id='careersTab' role='tablist'>
              {/* Nav Item */}
              <li className='nav-item' role='presentation'>
                <a
                  className='nav-link active'
                  href='#one'
                  id='one-tab'
                  data-bs-toggle='tab'
                  data-bs-target='#one'
                  role='tab'
                  aria-controls='one'
                  aria-selected='true'
                >
                  <div className='d-flex align-items-center'>
                    <span className='svg-icon svg-icon-xs nav-icon text-primary mt-0'>
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          opacity='0.3'
                          d='M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z'
                          fill='#035A4B'
                        />
                        <path
                          d='M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z'
                          fill='#035A4B'
                        />
                      </svg>
                    </span>
                    Role Description
                  </div>
                </a>
              </li>
              {/* End Nav Item */}
              {/* Nav Item */}

              {/* End Nav Item */}
            </ul>
            {/* End Nav */}
          </div>
        </div>
      </div>
    </>
  )
}

export default InnerNav
