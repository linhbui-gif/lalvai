import React from "react"
import './meetout.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faFacebook ,faTwitter } from '@fortawesome/free-solid-svg-icons'
export default function Meetout() {
  return (
    <div className="person">
      <div className="person__wrap container">
        <h1 className="title">Meet Our Experts</h1>
        <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices. Duis dictum eget dolor vel blandit.</p>
        <div className="person__content dflex">
          <div className="person__item col-2-5 wow" data-animate="fadeInUp">
            <div className="person__image"><img src="http://cheaphostings.org/html/item-lalvai/lalvai/assets/img/team/img-1.jpg" alt=""/>
              <ul>
                <li className="icon dflex"><a href="#"><FontAwesomeIcon icon={faFacebook}/></a></li>
                <li className="icon dflex"><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li className="icon dflex"><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                <li className="icon dflex"><a href="#"><i className="fab fa-youtube"></i></a></li>
                <li className="icon dflex"><a href="#"><FontAwesomeIcon icon={faPlus}/></a></li>
              </ul>
              <div className="person__name">
                <h3 className="name">Syed Ekram</h3><span>SEO Specialist</span>
              </div>
            </div>
          </div>
          <div className="person__item col-2-5 wow" data-animate="fadeInUp">
            <div className="person__image"><img src="http://cheaphostings.org/html/item-lalvai/lalvai/assets/img/team/img-1.jpg" alt=""/>
              <ul>
                <li className="icon dflex"><a href="#"><FontAwesomeIcon icon={faFacebook}/></a></li>
                <li className="icon dflex"><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li className="icon dflex"><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                <li className="icon dflex"><a href="#"><i className="fab fa-youtube"></i></a></li>
                <li className="icon dflex"><a href="#"><FontAwesomeIcon icon={faPlus}/></a></li>
              </ul>
              <div className="person__name">
                <h3 className="name">Esrat Popy</h3><span>Support Specialist</span>
              </div>
            </div>
          </div>
          <div className="person__item col-2-5 wow" data-animate="fadeInUp">
            <div className="person__image"><img src="http://cheaphostings.org/html/item-lalvai/lalvai/assets/img/team/img-1.jpg" alt=""/>
              <ul>
                 <li className="icon dflex"><a href="#"><FontAwesomeIcon icon={faPlus}/></a></li>
                <li className="icon dflex"><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li className="icon dflex"><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                <li className="icon dflex"><a href="#"><i className="fab fa-youtube"></i></a></li>
                <li className="icon dflex"><a href="#"><FontAwesomeIcon icon={faPlus}/></a></li>
              </ul>
              <div className="person__name">
                <h3 className="name">Masum Billah</h3><span>Marketing Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}