import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
const IndexPage = () => {
  return (
    <div>
      <Layout>
        <p>Hello world!</p>
        <p>
          If you need a bike? <Link to="/contact">Contact me</Link>
        </p>
      </Layout>
    </div>
  )
}
export default IndexPage
