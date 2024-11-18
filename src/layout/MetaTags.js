import Head from 'next/head'

const MetaTags = ({ name, mission, vision, description, image, url }) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{name}</title>
      <meta name='title' content={name} />
      <meta name='description' content={description} />
      <meta name='mission' content={mission} />
      <meta name='vision' content={vision} />
      <meta
        name='keywords'
        content='Community Space, Hub, Youth, Mombasa, Swahilipot'
      />
      {/* Open Graph / Facebook */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={name} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:title' content={name} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={image} />
    </Head>
  )
}

export default MetaTags

MetaTags.defaultProps = {
  name: 'Swahilipot Hub',
  description:
    'Swahilipot Hub Foundation is non-profit organization that meaningfully engages and empowers youth (18 to 35 years) to enable them to unleash their full potential. Based in the coastal city of Mombasa in Kenya, it is regulated by the NGO Coordination Board of Kenya.',
  image: '/images/comms-photo.jpg',
  url: 'https://www.swahilipothub.co.ke/',
  mission: 'Enable communities to develop themselves',
  vision: 'To inspire communities to thrive',
}
