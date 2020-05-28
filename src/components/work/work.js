import React from "react"
import "./work.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignal,faCrown,faBriefcase, } from '@fortawesome/free-solid-svg-icons'
export default function Work() {

  return (
    <div className="work">
      <div className="work__wrap container">
        <h1 className="title wow" data-animate="fadeInUp">
          How It Works
        </h1>
        <p className="des wow" data-animate="fadeInUp">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
          risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium
          ultrices. Duis dictum eget dolor vel blandit.
        </p>
        <div className="work__content dflex wow" data-animate="fadeInUp">
          <div className="work__item col-2-5">
          <FontAwesomeIcon icon={faSignal} />
            <h4>Planing</h4>
            <p className="des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vitae risus nec dui venenatis.
            </p>
          </div>
          <div className="work__item col-2-5 green">
          <FontAwesomeIcon icon={faCrown} />
            <h4>Reseraching</h4>
            <p className="title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vitae risus nec dui venenatis.
            </p>
          </div>
          <div className="work__item col-2-5">
          <FontAwesomeIcon icon={faBriefcase} />
            <h4>Visualizing</h4>
            <p className="des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vitae risus nec dui venenatis.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
