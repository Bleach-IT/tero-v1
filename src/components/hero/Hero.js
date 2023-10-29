import React from 'react'
import './HeroStyles.css'
import {Link} from 'react-scroll'

const hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            <div className="content">
                <h1>
                    TErO
                </h1>
                <div><button><Link activeClass="active" to="op" spy={true} smooth={true} duration={500}>Więcej o nas</Link></button></div>
            </div>
        </div>
    </div>
  )
}

export default hero