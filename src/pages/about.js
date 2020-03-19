import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h2>About me</h2>
      <p>I like mtb bikes</p>
      <p>
        Do you need to talk about bike components?
        <Link to="/contact"> Contact me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
