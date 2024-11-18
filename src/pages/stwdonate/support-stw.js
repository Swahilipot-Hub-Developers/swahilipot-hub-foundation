import React, { useState } from 'react'
import DonateForm from '@/components/stw/DonateForm'
import DonateHero from '@/components/stw/DonateHero'
import PadDonationsCard from '@/components/stw/PadDonationsCard'
import MentorshipDonation from '@/components/stw/MentorshipDonation'

const DonatePage = () => {
  return (
    <div>
      <DonateHero />
      {/* <DonateForm /> */}
      <PadDonationsCard />
      <MentorshipDonation />
    </div>
  )
}

export default DonatePage
