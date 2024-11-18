import { TwitterTimelineEmbed } from 'react-twitter-embed'

const TwitterTimeline = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='text-center'>
            <TwitterTimelineEmbed
              sourceType='profile'
              screenName='swahilipothub'
              options={{
                height: '600px',
                width: '100%',
                theme: 'light',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TwitterTimeline
