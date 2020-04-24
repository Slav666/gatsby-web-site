import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "../style/home-page.scss"

export const indexPageQuery = graphql`
  query homePage {
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      frontmatter {
        title1
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
        <div className="heading">{data.markdownRemark.frontmatter.title1}</div>
        <div>
          {data.markdownRemark.frontmatter.mainpitch.map(item => {
            return (
              <li key={item.title}>
                <h2 className="title">{item.title}</h2>
                <p className="description">{item.description}</p>
                <img className="image" src={item.img} alt="" />
              </li>
            )
          })}
        </div>
      </Layout>
    </div>
  )
}
export default IndexPage
