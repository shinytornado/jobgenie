import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import menu from '../../assets/menu.svg'

const NavBar = () => {

  const [mobileMenu, setMobileMenu] = React.useState(false)
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className="navbar">
        <Link className="logo" to='/'>Job Genie</Link>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/jobs'>Jobs</Link></li>
            <li><Link to='/internships'>Internships</Link></li>
            <li><Link to='/courses'>Courses</Link></li>
            <li><Link className="btn" to='/login'>Login/Sign Up</Link></li>
        </ul>
        <img src={menu} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default NavBar
