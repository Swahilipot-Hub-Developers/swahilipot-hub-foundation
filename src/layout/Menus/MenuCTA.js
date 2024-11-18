import Link from 'next/link'

const MenuCTA = () => {
  return (
    <li className='nav-item'>
        <a
          className='js-animation-link d-none d-lg-inline-block btn btn-primary'
          href='https://medium.com/@swahilipotengineering'
        role='button'
        target='_blank'
        >
          <i className='bi-book me-1' /> Blogs and News
        </a>
    </li>
  )
}

export default MenuCTA
