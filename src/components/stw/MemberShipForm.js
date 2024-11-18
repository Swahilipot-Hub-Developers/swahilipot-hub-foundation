import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const MemberShipForm = () => {
  const router = useRouter()
  // Define the initial state of the form
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    email: '',
    sub_county: '',
    level_of_education: '',
    interest: '',
    membership_type: '',
    terms_and_conditions: false,
  })

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await axios.post(

        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_MEMBERSHIPS}`,
      
        formData
      )
      // console.log(response.data)
      // Clear form data after successful submission
      setFormData({
        name: '',
        phone_number: '',
        email: '',
        sub_county: '',
        level_of_education: '',
        interest: '',
        membership_type: '',
        terms_and_conditions: false,
      })
      // Redirect to the success page
      router.push('/stwdonate/success')
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className='container mb-5'>
      <form onSubmit={handleSubmit}>
        {/* full name */}
        <div className='mb-3'>
          <label className='form-label' htmlFor='exampleFormControlInput1'>
            Name
          </label>
          <input
            type='text'
            id='full_name'
            className='form-control'
            placeholder='Your Full Name Here ...'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <span className='form-text'>Your official name</span>
        </div>
        {/* phone number */}
        <div className='mb-3'>
          <label className='form-label' htmlFor='exampleFormControlTitleInput'>
            Phone Number
          </label>
          <input
            type='tel'
            id='phone_number'
            className='form-control form-control-title'
            placeholder='+254 700 000 000'
            name='phone_number'
            value={formData.phone_number}
            onChange={handleChange}
          />
          <span className='form-text'>
            A phone Number that we can use to reach out to your
          </span>
        </div>
        {/* email */}
        <div className='mb-3'>
          <label className='form-label' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='form-control'
            placeholder='name@example.com'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <span className='form-text'>
            Email address that we can use to reach out to you
          </span>
        </div>
        {/* select sub county */}
        <div className='mb-3'>
          <label className='form-label' htmlFor='exampleFormControlSelect1'>
            Sub County
            <span className='form-label-secondary'>(Residential)</span>
          </label>
          <select
            id='exampleFormControlSelect1'
            className='form-control'
            name='sub_county'
            value={formData.sub_county}
            onChange={handleChange}
          >
            <option value=''>Select Sub County</option>
            <option value='MVITA'>Mvita</option>
            <option value='CHANGAMWE'>Changamwe</option>
            <option value='NYALI'>Nyali</option>
            <option value='KISAUNI'>Kisauni</option>
            <option value='LIKONI'>Likoni</option>
            <option value='JOMVU'>Jomvu</option>
            <option value='OUTSIDE MOMBASA'>Outside Mombasa</option>
          </select>
        </div>
        {/* select level of education */}
        <div className='mb-3'>
          <label className='form-label' htmlFor='exampleFormControlSelect2'>
            Level of Education
          </label>
          <select
            id='exampleFormControlSelect2'
            className='form-control'
            name='level_of_education'
            value={formData.level_of_education}
            onChange={handleChange}
          >
            <option value=''>Select Education Level</option>
            <option value='PRIMARY'>Primary</option>
            <option value='SECONDARY'>Secondary</option>
            <option value='COLLEGE'>College</option>
            <option value='UNIVERSITY'>University</option>
            <option value='NOT_APPLICABLE'>Not Applicable</option>
          </select>
        </div>
        {/* select interest */}
        <div className='mb-3'>
          <label className='form-label' htmlFor='exampleFormControlSelect3'>
            Interest
          </label>
          <select
            id='exampleFormControlSelect3'
            className='form-control'
            name='interest'
            value={formData.interest}
            onChange={handleChange}
          >
            <option value=''>Select Interest</option>
            <option value='DIGITAL_LITERACY'>Digital Literacy</option>
            <option value='SOFTWARE_ENGINEERING'>Software Engineering</option>
            <option value='DATA_SCIENCE'>Data Science</option>
            <option value='ARTIFICIAL_INTELLIGENCE'>
              Artificial Intelligence
            </option>
            <option value='CYBER_SECURITY'>Cyber Security</option>
            <option value='BLOCKCHAIN'>Blockchain</option>
            <option value='GENERAL_IT'>General IT</option>
          </select>
        </div>
        {/* select membership type */}
        <div className='mb-3'>
          <label className='form-label' htmlFor='exampleFormControlSelect4'>
            Membership Type
          </label>
          <select
            id='exampleFormControlSelect4'
            className='form-control'
            name='membership_type'
            value={formData.membership_type}
            onChange={handleChange}
          >
            <option value=''>Select Membership Type</option>
            <option value='BENEFITING'>Benefiting</option>
            <option value='VOLUNTEER'>Volunteer</option>
            <option value='CONTRIBUTING'>Contributing</option>
            <option value='MENTOR'>Mentor</option>
            <option value='PAYING'>Paying</option>
          </select>
        </div>
        {/* terms and conditions */}
        <div className='mb-3'>
          <label className='form-label' htmlFor='terms_and_conditions'>
            Terms and Conditions{' '}
          </label>
          <input
            type='checkbox'
            id='terms_and_conditions'
            className='form-check-input'
            name='terms_and_conditions'
            checked={formData.terms_and_conditions}
            onChange={handleChange}
            required
          />
          <br />
          <span className='form-text'>
            I agree to the terms and conditions of Swahilipot Hub Foundation &
            Swahili Tech Women
          </span>
        </div>
        {/* submit button */}
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default MemberShipForm
