import React from 'react'
import './Content.css'
import Header from './common/Header'

function Content() {
  return (
    <div className='topcontent'>
      <Header/>
        <div className='topcontent__container'>
         <h1><span>SPA</span>CE<span> J</span>ET</h1>
         <p>You can pick your Flights, International Flights and Charter Flights</p>
        </div>
    </div>
  )
}

export default Content