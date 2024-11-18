/* eslint-disable @next/next/no-img-element */
import PageHero from '@/components/engineering/PageHero'
import PageAbout from '@/components/engineering/PageAbout'
import TeamImage from '@/components/engineering/TeamImage'
import Roles from '@/components/engineering/Roles'
import Stats from '@/components/engineering/Stats'
import Team from '@/components/engineering/Team'

const engineering = () => {
  return (
    <>
      <PageHero />
      <PageAbout />
      <TeamImage />
      <Roles />
      <Stats />
      <Team />
    </>
  )
}

export default engineering
