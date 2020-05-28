import React from "react"
import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons'
export default function Footer() {
  return (
      <>
    <div className="footer">
      <div className="footer__wrap container dflex">
        <div className="footer__item col-lg-3 col-md-6 col-12">
          <h4 className="heading">Services</h4>
          <ul>
            <li>Search Engine Optimization</li>
            <li>Social Media Mareting</li>
            <li>Off Page &amp; On Page SEO</li>
            <li>Website Audit And Analysis</li>
            <li>Website Security</li>
            <li>Bug Fixing And Solve</li>
          </ul>
        </div>
        <div className="footer__item col-lg-3 col-md-6 col-12">
          <h4 className="heading">Company</h4>
          <ul>
            <li>Terms &amp; Conditions</li>
            <li>Licenses</li>
            <li>Market API</li>
            <li>Become An Affiliate</li>
            <li>Careers And Job</li>
            <li>Need Any Help?</li>
          </ul>
        </div>
        <div className="footer__item col-lg-3 col-md-6 col-12">
          <h4 className="heading">Our Address</h4>
          <ul>
            <li>3481 Melrose Place, Beverly Hills CA 90210</li>
            <li>(+1) 517 397 7100</li>
            <li>Info@example.com</li>
          </ul>
        </div>
        <div className="footer__item col-lg-3 col-md-6 col-12">
          <h4 className="heading">Subscribe Today</h4>
          <form className="dflex" action="#">
            <input type="text" placeholder="Enter Email"/><FontAwesomeIcon icon={faPaperPlane}/>
          </form>
          <div className="footer__social dflex"><a href="#"><i className="fab fa-facebook-f"></i></a><a href="#"><i className="fab fa-twitter"></i></a><a href="#"><i className="fab fa-instagram"></i></a><a href="#"><i className="fab fa-linkedin-in"></i></a><a href="#"><i className="fab fa-youtube"></i></a></div>
        </div>
      </div>
    </div>
    <div className="footer__bottom dflex container">
      <p className="des">Copyright © 2019 Lalvai. Developed by <strong><a href="#">themes_master</a></strong></p>
    </div>
    </>
  )
}