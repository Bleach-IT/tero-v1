import React from 'react'
import { SiDatabricks } from 'react-icons/si'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import './FooterStyles.css'
import { FiFacebook, FiMail } from 'react-icons/fi'

import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="top">
          <div className="logo-footer">
            <SiDatabricks className='icon' />
            <h2>TErO</h2>
          </div>
          <Link activeClass="active" to="top" spy={true} smooth={true} duration={500}>
            <BsFillArrowUpCircleFill className='icon'/>
          </Link> 
        </div>
        <div className="col-container">
          <div className="col">
            <h3>Nawigacja</h3>
            <p><Link activeClass="active" to="top" spy={true} smooth={true} duration={500}>Strona główna</Link></p>
            <p><Link activeClass="active" to="as" spy={true} smooth={true} duration={500}>O nas</Link></p>
            <p><Link activeClass="active" to="op" spy={true} smooth={true} duration={500}>Nasz produkt</Link></p>
          </div>
          <form>
            <h3>Skontaktuj sie z nami</h3>
            <input type="email" placeholder='Enter your email'/>
            <FiMail className='mail-icon' />
            <div className="social-group">
              <a href="https://www.facebook.com/profile.php?id=100066461245031&locale=pl_PL"><FiFacebook className='social-icon'/></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer