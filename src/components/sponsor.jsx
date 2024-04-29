import React from 'react'

export default function Sponsor() {
  return (
    <div className='sponsor_container'>
        <h3>Støt vores sponsorer</h3>
        <div className='line_black'></div>
        <div className='sponsors'>
            <img className='sponsor_image' src="../../assets/jyskebank_logo.png" alt="" />
            <img className='sponsor_image' src="../../assets/Buddinge_bilvask_logo.png" alt="" />
            <img className='sponsor_image' src="../../assets/meny_logo.png" alt="" />
        </div>
        <div className='sponsors'>
            <img className='sponsor_image' src="../../assets/NordeaFonden_logo.png" alt="" />
            <img className='sponsor_image' src="../../assets/BDO_logo.png" alt="" />
            <img className='sponsor_image' src="../../assets/Weibel_logo.png" alt="" />
        </div>
        <div className='line_black'></div>
    </div>
  )
}
