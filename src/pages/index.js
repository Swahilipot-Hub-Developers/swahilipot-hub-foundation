import Hero from '@/components/landing/Hero'
import HeroNew from '@/components/landing/HeroNew'
import FeatureActions from '@/components/landing/FeatureActions'
import SwahilipotPillar from '@/components/landing/SwahilipotPillar'
import WorkWithUs from '@/components/landing/WorkWithUs'
import Testimonials from '@/components/landing/Testimonials'
import Partners from '@/components/landing/Partners'
import PageCTA from '@/components/landing/PageCTA'
import CorePillars from '@/components/landing/CorePillars'
import Numbers from '@/components/landing/Numbers'
import CaseManagement from '@/components/landing/CaseManagement'
import FAQs from '@/components/landing/FAQS'
import SpacesCard from '@/components/sphSpaces/SpacesCard'
import Events from '@/components/landing/Events'
import Swahilipotfm from '@/components/landing/Swahilipotfm'
import Upcoming from '@/components/landing/Upcoming'

// import Attachment from '@/components/landing/Attachment'

const Landing = () => {
  return (
    <>
      {/* <Hero /> */}
      <HeroNew />
      {/* Link of Industrial Attachment form 

      <Attachment />
      */}
      <Swahilipotfm />
      <Upcoming />
      <CaseManagement />
      <CorePillars />
      <Events />
      <SpacesCard />
      <Partners />
      <Numbers />
      <FAQs />
      <PageCTA />
    </>
  )
}

export default Landing
