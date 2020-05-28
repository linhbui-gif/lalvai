import React from "react"
import './blog.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt,faUser } from '@fortawesome/free-solid-svg-icons'
export default function Blog() {
  return (
    <div className="blog">
      <div className="blog__wrap container">
        <h1 className="title">Our Lastest Blog</h1>
        <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices. Duis dictum eget dolor vel blandit.</p>
        <div className="blog__items dflex">
          <div className="blog__item col-2-5 wow" data-animate="fadeInLeft">
            <div className="blog__image"><img src="http://cheaphostings.org/html/item-lalvai/lalvai/assets/img/blog/1.jpg" alt=""/>
              <div className="blog__overlay">Marketinig</div>
            </div>
            <div className="blog__content"><a className="date" href="#"><FontAwesomeIcon icon={faUser}/>themes master</a><a className="date" href="#" >
                <FontAwesomeIcon icon={faCalendarAlt}/>02 Nov 2019</a><a className="heading" href="#">Team you want to work with mistake runners</a>
              <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim.</p><a className="read" href="#">Read More</a>
            </div>
          </div>
          <div className="blog__item col-2-5 wow" data-animate="fadeInUp">
            <div className="blog__image"><img src="http://cheaphostings.org/html/item-lalvai/lalvai/assets/img/blog/1.jpg" alt=""/>
              <div className="blog__overlay">Marketinig</div>
            </div>
            <div className="blog__content"><a className="date" href="#"><FontAwesomeIcon icon={faUser}/>themes master</a><a className="date" href="#" >
                <FontAwesomeIcon icon={faCalendarAlt}/>02 Nov 2019</a><a className="heading" href="#">Lights winged seasons fish abundantly evening</a>
              <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim.</p><a className="read" href="#">Read More</a>
            </div>
          </div>
          <div className="blog__item col-2-5 wow" data-animate="fadeInRight">
            <div className="blog__image"><img src="http://cheaphostings.org/html/item-lalvai/lalvai/assets/img/blog/1.jpg" alt=""/>
              <div className="blog__overlay">Marketinig</div>
            </div>
            <div className="blog__content"><a className="date" href="#"><FontAwesomeIcon icon={faUser}/>themes master</a><a className="date" href="#" >
                <FontAwesomeIcon icon={faCalendarAlt}/>02 Nov 2019</a><a className="heading" href="#">Winged moved stars, food creature seed night</a>
              <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim.</p><a className="read" href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}