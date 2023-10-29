import React, {useState} from 'react'

import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'
import {Link} from 'react-scroll'


const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleNav = () => setNav(!nav)

  return (
    <div name="top" className='navbar'>
        <div className="container">
            <div className="logo">
                <img src="https://i.imgur.com/5ly2ttd.png" className='icon' alt=""/>

                <h1>
                    TErO
                </h1>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link activeClass="active" to="as" spy={true} smooth={true} duration={500}>O nas</Link></li>
                    <li><Link activeClass="active" to="op" spy={true} smooth={true} duration={500}>Nasz produkt</Link></li>
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />):(<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar