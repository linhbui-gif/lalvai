import React from "react"
import './feature.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop,faBookOpen,faCartPlus ,faHeart,faChartBar} from '@fortawesome/free-solid-svg-icons'
export default function Feature() {
  return (
    <div className="features">
      <div className="features__wrap container">
        <h1 className="title wow" data-animate="fadeInUp">Amazing Features</h1>
        <p className="des wow" data-animate="fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices. Duis dictum eget dolor vel blandit.</p>
        <div className="features__content dflex">
          <div className="features__item dflex col-lg-4 col-md-6 col-12 wow" data-animate="fadeInUp">
            <div className="icon dflex"><FontAwesomeIcon icon={faDesktop}/></div>
            <div className="content">
              <h4 className="heading">Fully Reponsive</h4>
              <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
          <div className="features__item dflex col-lg-4 col-md-6 col-12 wow" data-animate="fadeInUp">
            <div className="icon dflex"><FontAwesomeIcon icon={faBookOpen}/></div>
            <div className="content">
              <h4 className="heading">Latest Bootstrap</h4>
              <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
          <div className="features__item dflex col-lg-4 col-md-6 col-12 wow" data-animate="fadeInUp">
            <div className="icon dflex"><FontAwesomeIcon icon={faCartPlus}/></div>
            <div className="content">
              <h4 className="heading">Dedicated Support</h4>
              <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
          <div className="features__item dflex col-lg-4 col-md-6 col-12 wow" data-animate="fadeInUp">
            <div className="icon dflex"><FontAwesomeIcon icon={faHeart}/></div>
            <div className="content">
              <h4 className="heading">Love Customer</h4>
              <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
          <div className="features__item dflex col-lg-4 col-md-6 col-12 wow" data-animate="fadeInUp">
            <div className="icon dflex"><FontAwesomeIcon icon={faChartBar}/></div>
            <div className="content">
              <h4 className="heading">Mordern Design</h4>
              <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
          <div className="features__item dflex col-lg-4 col-md-6 col-12 wow" data-animate="fadeInUp">
            <div className="icon dflex"><FontAwesomeIcon icon={faChartBar}/></div>
            <div className="content">
              <h4 className="heading">Html5/Css3</h4>
              <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}