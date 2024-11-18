import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const SubscriberForm = () => {
  const router = useRouter()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_SUBSCRIBERS_FORM}`,
        formData
      )
    //   console.log(response.data)
      // Clear form data after successful submission
      setFormData({
        name: '',
        email: '',
      })
      // Redirect to the success page
      router.push('/success')
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-4'>
        <label className='form-label' htmlFor='registerName'>
          Your name
        </label>
        <input
          type='text'
          className='form-control form-control-lg'
          name='name'
          id='registerName'
          placeholder='Type your name'
          aria-label='Type your name'
          required
          data-msg='Please enter your name.'
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className='mb-4'>
        <label className='form-label' htmlFor='registerEmail'>
          Your email
        </label>
        <input
          type='email'
          className='form-control form-control-lg'
          name='email'
          id='registerEmail'
          placeholder='example@site.com'
          aria-label='example@site.com'
          required
          data-msg='Please enter a valid email address.'
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className='d-grid text-center'>
        <button type='submit' className='btn btn-primary btn-lg'>
          SUBMIT
        </button>
        <span className='form-text'>
          Need help?{' '}
          <a className='link' href='../contact'>
            Visit our Help Center <i className='bi-chevron-right small ms-1'></i>
          </a>
        </span>
      </div>
    </form>
  )
}

export default SubscriberForm
