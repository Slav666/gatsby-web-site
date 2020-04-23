import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const indexPageQuery = graphql`
  query homePage {
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      frontmatter {
        title
        mainpitch {
          description
          title
          img
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <div>
      <Layout>
        <p>Hello world!</p>
        <div>{data.markdownRemark.frontmatter.title}</div>
        <div>
          {data.markdownRemark.frontmatter.mainpitch.map(item => {
            return (
              <li>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <img src={item.img} alt="" />
              </li>
            )
          })}
        </div>
        <p>
          If you need a bike? <Link to="/contact">Contact me</Link>
        </p>
      </Layout>
    </div>
  )
}
export default IndexPage
