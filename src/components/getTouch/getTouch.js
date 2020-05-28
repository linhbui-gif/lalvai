import React from "react"
import './getTouch.scss'
export default function GetTouch() {
  return (
    <div className="get">
      <div className="get__wrap container dflex flex-column" >
        <h1 className="title wow" data-animate="fadeInUp">Get In Touch</h1>
        <p className="title wow" data-animate="fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices. Duis dictum eget dolor vel blandit.</p>
        <form className="col-lg-10 col-12 dflex wow" action="#" >
          <div className="dflex col-12">
            <input className="col-lg-5 col-12" type="text" placeholder="Name"/>
            <input className="col-lg-6 col-12" type="text" placeholder="Email"/>
          </div>
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}