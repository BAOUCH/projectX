import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">BAOUCH</h1>
        <ul className="footer__list">
          <li>
            <a href="#About" className="footer__link">About</a>
          </li>

          <li>
            <a href="#projects" className="footer__link">Projects</a>
          </li>

          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>

        </ul>

        <div className="footer__social">
          <a href="https://www.instagram.com/omar.baouch" className="footer__social-link" target="_blank">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://web.facebook.com/baouch.omar.0/" className="footer__social-link" target="_blank">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="htts://www.linkedin.com/in/omar-baouch" className="footer__social-link" target="_blank">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <span className='footer__copy'> &#169; Crypticalcoder. All rights reserved

        </span>
      </div>
    </footer>
  )
}

export default Footer