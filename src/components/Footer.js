import React from 'react'

import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub, faInstagram, faKaggle, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
      <footer>
          <div className="footer-widget">
              <ul className='social-media'>
                  <li className='icons'>
                     <a href="https://www.linkedin.com" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="lg" color='white'/></a>
                  </li>
                  <li className='icons'>
                     <a href="https://github.com" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='lg' color='white'/> </a>
                  </li>
                  <li className='icons'>
                        <a href="https://www.kaggle.com" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faKaggle} size='lg' color='white'/> </a>
                  </li>
                  <li className='icons'>
                        <a href="https://www.instagram.com" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size='lg' color='white'/> </a>
                  </li>
              </ul>
        </div>
          <div className='footer'>
           <small>&#9400; 2023 by Shreyasi Mandal. All rights reserved.</small>
          </div>
      </footer>
  )
}

export default Footer
