import React from "react"
import './pricing.scss'
export default function Pricing() {
  return (
    <div className="pricing">
    <div className="pricing__wrap container">
      <h1 className="title wow" data-animate="fadeInUp">Pricing Plan</h1>
      <p className="des wow" data-animate="fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices. Duis dictum eget dolor vel blandit.</p>
      <div className="pricing__content dflex">
        <div className="pricing__item col-2-5 wow" data-animate="fadeInUp">
          <h2>Starter</h2>
          <div className="circle dflex"><span></span><span></span><span></span><span></span><span></span></div>
          <h1 className="price">$29</h1>
          <h5>MONTHLY</h5>
          <ul>
            <li>15 Website</li>
            <li>50 GB Disk Space</li>
            <li>50 Email Accounts</li>
          </ul><a className="btn" href="#">Get Start</a>
        </div>
        <div className="pricing__item col-2-5 wow" data-animate="fadeInUp">
          <h2>Popular</h2>
          <div className="circle dflex"><span></span><span></span><span></span><span></span><span></span></div>
          <h1 className="price">$49</h1>
          <h5>MONTHLY</h5>
          <ul>
            <li>15 Website</li>
            <li>50 GB Disk Space</li>
            <li>50 Email Accounts</li>
            <li>50GB Monthly Bandwidth</li>
            <li>10 Subdomains</li>
          </ul><a className="btn" href="#">Get Start</a>
        </div>
        <div className="pricing__item green col-2-5 wow" data-animate="fadeInUp">
          <h2>Advance</h2>
          <div className="circle dflex"><span></span><span></span><span></span><span></span><span></span></div>
          <h1 className="price">$69</h1>
          <h5>MONTHLY</h5>
          <ul>
            <li>15 Website</li>
            <li>50 GB Disk Space</li>
            <li>50 Email Accounts</li>
            <li>50GB Monthly Bandwidth</li>
            <li>10 Subdomains</li>
            <li>15 Domains</li>
            <li>Unlimited Support</li>
          </ul><a className="btn" href="#">Get Start</a>
        </div>
      </div>
    </div>
  </div>
  )
}