import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <div style={{
      position: 'absolute',
      bottom: '5px',
      textAlign: 'center',
      width: '100%',
    }}>
    <SocialIcon network="instagram"/>
    <span style={{marginLeft: '5px',fontSize: '1.5rem'}}>rudraksha_poojaaggarwal</span>
    <span style={{fontSize: '2rem', margin: '5px'}}>|</span>
    <SocialIcon network="facebook"/>
    <span style={{marginLeft: '5px',fontSize: '1.5rem'}}>Rudraksha Studio</span>
    <span style={{fontSize: '2rem', margin: '5px'}}>|</span>
    <SocialIcon network="whatsapp"/>
    <span style={{marginLeft: '5px',fontSize: '1.5rem'}}>9868284574</span>
      
    </div>
  )
}

export default Footer
