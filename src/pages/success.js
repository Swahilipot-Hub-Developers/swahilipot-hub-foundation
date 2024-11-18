/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const success = () => {
  return (
    <div>
      <div className='container text-center'>
        <img
          className='img-fluid mb-5'
          src='/assets/svg/illustrations/oc-error.svg'
          alt='Image Description'
          style={{ width: '30rem' }}
        />
        <p>You Have Successfully Joined Us</p>
        <Link className='btn btn-primary' href='/'>
          Go back home
        </Link>
      </div>
    </div>
  )
}

export default success
