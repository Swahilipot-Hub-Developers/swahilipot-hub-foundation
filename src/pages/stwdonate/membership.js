/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import axios from 'axios'
import MemberShipForm from '@/components/stw/MemberShipForm'
import MembershipHero from '@/components/stw/MembershipHero'



const Membership = () => {
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
      console.log(response.data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <MembershipHero />
      <MemberShipForm />
    </>
  )
}

export default Membership
