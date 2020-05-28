import React from "react"
import "./team.scss"
import Slider from "react-slick";

export default function Team() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <div class="team">
      <div class="team__wrap container">
        <ul class="team__slider" id="wrap">
        <Slider {...settings}>
            <li class="slider__item wow" data-animate="fadeInUp">
              <div class="dflex">
                <div class="info col-lg-3 col-md-4 col-12">
                  <img
                    src="http://cheaphostings.org/html/item-lalvai/lalvai/assets/img/testimonial/img-1.jpg"
                    alt=""
                  />
                  <h3 class="name">Syed Ekram</h3>
                  <span>SEO Specialist</span>
                </div>
                <div class="quote col-lg-6 col-md-8 col-12">
                  <p class="title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam dolor tellus, efficitur ut tortor id, molestie
                    egestas nibh. In blandit ex at erat vehicula molestie.
                    Mauris vel volutpat nulla. Suspendisse lorem ex, congue at
                    elit id, tincidunt tempor orci. Nullam nec augue ac tellus
                    rhoncus tincidunt nec ut ligula. Praesent.
                  </p>
                </div>
              </div>
            </li>
            <li class="slider__item wow" data-animate="fadeInUp">
              <div class="dflex">
                <div class="info col-lg-3 col-md-4 col-12">
                  <img
                    src="http://cheaphostings.org/html/item-lalvai/lalvai/assets/img/testimonial/img-1.jpg"
                    alt=""
                  />
                  <h3 class="name">Masum Billah</h3>
                  <span>Marketing Specialist</span>
                </div>
                <div class="quote col-lg-6 col-md-8 col-12">
                  <p class="title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam dolor tellus, efficitur ut tortor id, molestie
                    egestas nibh. In blandit ex at erat vehicula molestie.
                    Mauris vel volutpat nulla. Suspendisse lorem ex, congue at
                    elit id, tincidunt tempor orci. Nullam nec augue ac tellus
                    rhoncus tincidunt nec ut ligula. Praesent.
                  </p>
                </div>
              </div>
            </li>
            <li class="slider__item wow" data-animate="fadeInUp">
              <div class="dflex">
                <div class="info col-lg-3 col-md-4 col-12">
                  <img
                    src="http://cheaphostings.org/html/item-lalvai/lalvai/assets/img/testimonial/img-1.jpg"
                    alt=""
                  />
                  <h3 class="name">Sefat Ullah</h3>
                  <span>Manager</span>
                </div>
                <div class="quote col-lg-6 col-md-8 col-12">
                  <p class="title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam dolor tellus, efficitur ut tortor id, molestie
                    egestas nibh. In blandit ex at erat vehicula molestie.
                    Mauris vel volutpat nulla. Suspendisse lorem ex, congue at
                    elit id, tincidunt tempor orci. Nullam nec augue ac tellus
                    rhoncus tincidunt nec ut ligula. Praesent.
                  </p>
                </div>
              </div>
            </li>
            <li class="slider__item">
              <div class="dflex">
                <div class="info col-lg-3 col-md-4 col-12">
                  <img
                    src="http://cheaphostings.org/html/item-lalvai/lalvai/assets/img/testimonial/img-1.jpg"
                    alt=""
                  />
                  <h3 class="name">Kazi Luna</h3>
                  <span>Support Specialist</span>
                </div>
                <div class="quote col-lg-6 col-md-8 col-12">
                  <p class="title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam dolor tellus, efficitur ut tortor id, molestie
                    egestas nibh. In blandit ex at erat vehicula molestie.
                    Mauris vel volutpat nulla. Suspendisse lorem ex, congue at
                    elit id, tincidunt tempor orci. Nullam nec augue ac tellus
                    rhoncus tincidunt nec ut ligula. Praesent.
                  </p>
                </div>
              </div>
            </li>
          </Slider>
        </ul>
      </div>
    </div>
  )
}
