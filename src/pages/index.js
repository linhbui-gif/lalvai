import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner/banner"
import Client from "../components/client/client"
import Work from "../components/work/work"
import About from "../components/about/about"
import Lastest from "../components/lastest/lastest"
import Team from "../components/team/team"
import Checkoutwork from "../components/checkoutwork/checkoutwork"
import Meetout from "../components/meetout/meetout"
import Pricing from "../components/pricing/pricing"
import Feature from "../components/features/feature"
import Blog from "../components/blog/blog"
import GetTouch from "../components/getTouch/getTouch"

export default function Home() {
  return (
    <Layout>
        <Banner/>
        <Client/>
        <Work/>
        <About/>
        <Lastest/>
        <Team/>
        <Checkoutwork/>
        <Meetout/>
        <Pricing/>
        <Feature/>
        <Blog/>
        <GetTouch/>
    </Layout>
  );
}