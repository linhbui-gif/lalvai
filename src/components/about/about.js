import React from "react"
import "./about.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
export default function About() {
  return (
    <div className="about">
    <div className="about__wrap container dflex">
      <div className="about__item col-lg-6 col-12">
        <h2 className="title wow" data-animate="fadeInUp">Make business easy with beautiful landing page Lalvai</h2>
        <ul>
          <li className="wow" data-animate="fadeInUp"><FontAwesomeIcon icon={faCheck} />There are many variations of passages</li>
          <li className="wow" data-animate="fadeInUp"><FontAwesomeIcon icon={faCheck} />If you are going to use a passage of Lorem Ipsum, you need to be sure</li>
          <li className="wow" data-animate="fadeInUp"><FontAwesomeIcon icon={faCheck} />All the Lorem Ipsum generators on the Internet tend</li>
          <li className="wow" data-animate="fadeInUp"><FontAwesomeIcon icon={faCheck} />If you use this site regularly and would like to help</li>
        </ul>
      </div>
      <div className="about__item col-lg-6 col-12 wow" data-animate="bounceInRight"><img src="http://cheaphostings.org/html/item-lalvai/lalvai/assets/img/icon.png" alt=""/></div>
    </div>
  </div>
  )
}
