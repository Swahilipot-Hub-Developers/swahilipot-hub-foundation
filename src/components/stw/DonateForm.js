import React, { useState } from 'react'

const DonateForm = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('0')
  const [selectedAmount, setSelectedAmount] = useState('')

  const handleAmountChange = e => {
    setAmount(e.target.value)
    setSelectedAmount('')
  }

  const handleSelectChange = e => {
    setSelectedAmount(e.target.value)
    setAmount(e.target.value)
  }
  return (
    <div className='container mb-5'>
      <h3 className='mb-3 mb-md-5'>Be a Guardian Angel</h3>

      <form
        method='POST'
        action='https://checkout.flutterwave.com/v3/hosted/pay'
      >
        <div className='mb-3'>
          Your total donation Amount is KES.{amount || selectedAmount}
        </div>
        <input
          type='hidden'
          name='public_key'
          value={process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY}
        />
        <div className='mb-3'>
          <label className='form-label' htmlFor='exampleFormControlInput1'>
            Name
          </label>
          <input
            type='text'
            id='exampleFormControlInput1'
            className='form-control'
            placeholder='Your Name...'
            name='customer[name]'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label className='form-label' htmlFor='exampleFormControlInput3'>
            Email
          </label>
          <input
            type='email'
            id='exampleFormControlInput3'
            className='form-control'
            placeholder='name@example.com'
            name='customer[email]'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <input type='hidden' name='tx_ref' value='txref-81123' />

        <div className='mb-3'>
          <label className='form-label' htmlFor='exampleFormControlSelect1'>
            Select{' '}
            <span className='form-label-secondary'>
              (Custom Donation Package)
            </span>
          </label>
          <select
            id='exampleFormControlSelect1'
            className='form-control'
            onChange={handleSelectChange}
            value={selectedAmount}
          >
            <option value=''>Select Donation Package</option>
            <option value='10000'>DONATE TO MENTORSHIP ACTIVITIES - KES 10000</option>
            <option value='5000'>DONATE TO MENTORSHIP ACTIVITIES (HALF-PACKAGE) - KES 5000</option>
            <option value='2300'>DONATE A FULL HYGIENE PACKAGE - KES 2300</option>
            <option value='2000'>DONATE A BOX OF PADS - KES 2000</option>
            <option value='100'>DONATE A PAD - KES 100</option>
          </select>
        </div>

        <div className='mb-3'>
          <label className='form-label' htmlFor='exampleFormControlInput5'>
            Custom Amount
          </label>
          <input
            type='number'
            id='exampleFormControlInput5'
            className='form-control'
            placeholder='Custom Amount'
            name='amount'
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <input type='hidden' name='currency' value='KES' />
        <input type='hidden' name='meta[source]' value='docs-html-test' />
        <br />

        <button
          type='submit'
          id='start-payment-button'
          className='btn btn-success'
        >
          Pay Now
        </button>
      </form>
    </div>
  )
}

export default DonateForm
