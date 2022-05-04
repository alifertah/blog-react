import React from 'react'
import {FiGithub} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import {FaInstagram} from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer">
        <div className="copyright">
          2022 © Ali Fertah  
        </div>
        <div className="social-media">
            <a href="https://github.com/alifertah"><FiGithub /></a>
            <a href="#"><FiTwitter /></a>
            <a href=""><FaInstagram /></a>
        </div>
    </div>
  )
}

export default Footer