import React from "react"
import './checkoutwork.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons'
export default function Checkoutwork() {
  return (
    <div className="checkout">
      <div className="checkout__wrap container dflex">
        <div className="checkout__item col-lg-6 col-12">
          <h2 className="wow" data-animate="fadeInUp">Check out how our company works</h2>
          <p className="des wow" data-animate="fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices. Duis dictum eget dolor vel blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim.</p><a className="btn" href="#">Read More</a>
        </div>
        <div className="checkout__item col-lg-6 col-12 video wow" data-animate="bounceInRight"><img src="http://cheaphostings.org/html/item-lalvai/lalvai/assets/img/feature.png" alt=""/>
          <div className="buttonVideo dflex"><FontAwesomeIcon icon={faPhotoVideo}/></div>
        </div>
      </div>
    </div>
  )
}