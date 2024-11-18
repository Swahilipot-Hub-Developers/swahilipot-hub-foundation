import Image from 'next/image'

const BlogHero = () => {
  return (
    <div className="bg-primary-dark overflow-hidden">
      <div className="container position-relative content-space-1 content-space-md-2">
        <div className="w-md-65 w-lg-50 mx-md-auto">
          {/* Heading */}
          <div className="text-center mb-5">
            <h1 className="text-white">Swahilipot Hub Blog</h1>
            <p className="lead text-white">
              Check out the latest posts from the hub, by the community.
            </p>
          </div>
          {/* End Heading */}
        </div>
        {/* Background Shapes */}
        <div
          className="position-absolute"
          style={{ top: '-6rem', left: '-6rem' }}
        >
          <Image
            src="./assets/svg/components/shape-1-soft-light.svg"
            alt="SVG"
            width={500}
            style={{ width: '12rem' }}
          />
        </div>
        <div
          className="position-absolute"
          style={{ bottom: '-6rem', right: '-7rem' }}
        >
          <Image
            src="./assets/svg/components/shape-7-soft-light.svg"
            alt="SVG"
            width={250}
          />
        </div>
        {/* End Background Shapes */}
      </div>
    </div>
  )
}

export default BlogHero
