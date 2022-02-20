import * as React from "react"
import Email from "../components/Email"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Tripss from "../components/Tripss"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Tripss heading="Our Favourite Destinations" />
    <Testimonials />
    <Stats />
    <Email />
    <Footer />
  </Layout>
)

export default IndexPage
