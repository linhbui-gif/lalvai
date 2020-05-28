import React from "react"
import './lastest.scss'
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
export default function Lastest() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay:true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          autoplay:true,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay:true,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay:true,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="lastest">
      <div className="lastest__wrap container">
        <h1 className="title wow" data-animate="fadeInUp">Lastest Works</h1>
        <p className="des wow" data-animate="fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices. Duis dictum eget dolor vel blandit.</p>
        <ul className="lastest__content wow" id="wrap" data-animate="fadeInUp">
        <Slider {...settings}>
          <li className="lastest__item ">
            <div className="lastest__image"><img src="http://cheaphostings.org/html/item-lalvai/lalvai/assets/img/portfolio/1.jpg" alt=""/>
              <div className="image__overlay dflex"><FontAwesomeIcon icon={faPlus}/></div>
            </div>
            <div className="item__content"><a className="heading">Vendor Management</a>
              <p className="port-info">Company Project</p>
            </div>
          </li>
          <li className="lastest__item ">
            <div className="lastest__image"><img src="http://cheaphostings.org/html/item-lalvai/lalvai/assets/img/portfolio/1.jpg" alt=""/>
              <div className="image__overlay dflex"><FontAwesomeIcon icon={faPlus}/></div>
            </div>
            <div className="item__content"><a className="heading">Sales and Implementation</a>
              <p className="port-info">Client Project</p>
            </div>
          </li>
          <li className="lastest__item ">
            <div className="lastest__image"><img src="http://cheaphostings.org/html/item-lalvai/lalvai/assets/img/portfolio/1.jpg" alt=""/>
              <div className="image__overlay dflex"><FontAwesomeIcon icon={faPlus}/></div>
            </div>
            <div className="item__content"><a className="heading">Performance Improvement</a>
              <p className="port-info">Product Promotion</p>
            </div>
          </li>
          <li className="lastest__item ">
            <div className="lastest__image"><img src="http://cheaphostings.org/html/item-lalvai/lalvai/assets/img/portfolio/1.jpg" alt=""/>
              <div className="image__overlay dflex"><FontAwesomeIcon icon={faPlus}/></div>
            </div>
            <div className="item__content"><a className="heading">Sales and Implementation</a>
              <p className="port-info">Client Project</p>
            </div>
          </li>
          <li className="lastest__item ">
            <div className="lastest__image"><img src="http://cheaphostings.org/html/item-lalvai/lalvai/assets/img/portfolio/1.jpg" alt=""/>
              <div className="image__overlay dflex"><FontAwesomeIcon icon={faPlus}/></div>
            </div>
            <div className="item__content"><a className="heading">Performance Improvement</a>
              <p className="port-info">Product Promotion</p>
            </div>
          </li>
          <li className="lastest__item ">
            <div className="lastest__image"><img src="http://cheaphostings.org/html/item-lalvai/lalvai/assets/img/portfolio/1.jpg" alt=""/>
              <div className="image__overlay dflex"><FontAwesomeIcon icon={faPlus}/></div>
            </div>
            <div className="item__content"><a className="heading">Consulting Services</a>
              <p className="port-info">Video Making</p>
            </div>
          </li>
          </Slider>
        </ul>
      </div>
    </div>
  )
}