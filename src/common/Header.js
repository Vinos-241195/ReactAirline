import React from 'react'
import { Link} from 'react-router-dom'
import "./Header.css"

const Header=()=> {
  return (
    <div className='Header'>
        <div className='header__left'>
            <h1>
                Air<span>line</span> Tick<span>et</span> Manage<span>ment</span><br>
                </br>
                <span>SPA</span>CE <span>J</span>ET
            </h1>
        </div>
        <div className='header__right'>
            <Link to='/about' smooth={true} duration={500}>
                <h4>About us</h4>
            </Link>
            <Link to='/booking' smooth={true} duration={500}>
                <h4>Ticket booking</h4>
            </Link>
            <Link to='/details' smooth={true} duration={500}>
                <h4>Booking details</h4>
            </Link>
            <Link to='/contact' smooth={true} duration={500}>
                <h4>Contact</h4>
            </Link>
            <Link to='/' smooth={true} duration={500}>
                <h4>Home</h4>
            </Link>

        </div>
    </div>
  )
}

export default Header