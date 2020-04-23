import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "../style/home-page.scss"

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
        <div className="heading">{data.markdownRemark.frontmatter.title}</div>
        <div>
          {data.markdownRemark.frontmatter.mainpitch.map(item => {
            return (
              <li>
                <h2 className="title">{item.title}</h2>
                <p className="description">{item.description}</p>
                <img className="image" src={item.img} alt="" />
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
