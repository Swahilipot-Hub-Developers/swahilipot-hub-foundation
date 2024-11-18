import Form from './Form'

const PageContent = () => {
  return (
    <div className='container content-space-1 content-space-b-md-3'>
      <div className='w-lg-65 mb-7'>
        <h3>Online Registration</h3>
        <p>Join Our Community by filling the form online.</p>
      </div>
      <div className='row justify-content-md-between'>
        <Form />
      </div>
    </div>
  )
}

export default PageContent
