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
            <li onClick={toggleMenu}><Link to='/'>Home</Link></li>
            <li onClick={toggleMenu}><Link to='/jobs'>Jobs</Link></li>
            <li onClick={toggleMenu}><Link to='/internships'>Internships</Link></li>
            <li onClick={toggleMenu}><Link to='/courses'>Courses</Link></li>
            <li onClick={toggleMenu}><Link className="btn" to='/login'>Login</Link></li>
        </ul>
        <img src={menu} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default NavBar
