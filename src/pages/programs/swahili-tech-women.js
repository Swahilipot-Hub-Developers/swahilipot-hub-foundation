// import Logo from '@/components/shared/Logo'
import Image from 'next/image'
import STWHero from '@/components/stw/STWHero'
import STWExplanation from '@/components/stw/STWExplanation'
import Activities from '@/components/stw/Activities'

const SwahiliTechWomen = () => {
  return (
    <>
      <STWHero />
      <STWExplanation />
      <Activities />
      <div style={{ backgroundColor: '#fff' }} className='p-6'>
        <div className='container '>
          <section>
            <section className='p-3'>
              <div className='card m-2 p-5'>
                <figure>
                  <p>
                    The Swahili Tech Women Initiative is dedicated to empowering
                    women in technology by addressing the challenges such as
                    underrepresentation,limited educational opportunities and
                    gender biases. It aims to increase women's representation in
                    tech,provide access to digital tools, opportunities and
                    equip them with essential skills.This will be achieved
                    through tailored training,mentoring and community building
                    efforts. The initiative fosters inclusivity and
                    empowerment,focusing on enhancing technical
                    skills,confidence,and establishing a supportive community
                    for women in tech.Mentorship and guidance programs connect
                    individuals with seasoned professionals to share knowledge
                    and offer support for growth and success in the tech
                    industry.
                  </p>
                </figure>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  )
}

export default SwahiliTechWomen
