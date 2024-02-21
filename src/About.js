import React from 'react'
import Header from './common/Header'
import './about.css'

function About() {
  return (
    <div className='about'>
    <div>
      <Header />
    </div>
    <div className='about-container'>
      <h3>History</h3>
            <p>Across the years, Space Jet continued to improve its business by establishing a worthwhile and enjoyable experience for their customers</p>
      <h3>Flight Attendant</h3>
            <p>Space Jet cabin crew wears a uniform in black, red, white, grey. For male flight attendants, they wear black shirt with black trousers. The uniform itself was beautifully laid out, making the crew look more dashing.</p>
      <h3>Call Center</h3>
            <p>If you have inquiry for the airline or are facing difficulties during your travel such as lost baggage or cancelled flights, you can contact the airline. To contact the airline is by sending an email to contactus@spacejet.in.</p>
    </div>
    </div>
  )
}

export default About