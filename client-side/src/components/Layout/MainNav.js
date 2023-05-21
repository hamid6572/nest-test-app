import { Link } from 'react-router-dom'

const MainNav = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-between'>
      <Link className='navbar-brand mx-3' to='/'>
        Home
      </Link>

      <Link className='navbar-brand mx-3' to='/posts'>
        Posts
      </Link>
    </nav>
  )
}

export default MainNav
