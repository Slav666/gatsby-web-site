import React from "react"
import { graphql } from "gatsby"
import "./single-blog.modules.scss"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        img
      }
      html
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <div className="single-blog">
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <p>{props.data.markdownRemark.frontmatter.date}</p>
        <img
          className="image"
          alt=""
          src={props.data.markdownRemark.frontmatter.img}
        />
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </div>
    </Layout>
  )
}

export default Blog
