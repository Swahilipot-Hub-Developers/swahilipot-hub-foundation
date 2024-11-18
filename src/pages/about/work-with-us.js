import Hero from '@/components/about/workwithus/Hero'
import InnerNav from '@/components/about/workwithus/InnerNav'
import RoleDescription from '@/components/about/workwithus/RoleDescription'

const WorkWithUs = () => {
  return (
    <>
      <Hero />
      {/* career navigation */}
      <InnerNav />
      {/* content */}
      <div className='container content-space-2'>
        <div className='w-lg-75 mx-lg-auto'>
          {/* Tab Content */}
          <div className='tab-content' id='careersTabContent'>
            <RoleDescription />
          </div>
          {/* End Tab Content */}
        </div>
      </div>
    </>
  )
}

export default WorkWithUs
