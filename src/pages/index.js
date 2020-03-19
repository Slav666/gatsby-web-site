import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h3>I am Slawomir and I live in Scotland</h3>

      <p>
        Need a bike mechanic? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}
export default IndexPage
