import React from "react"
import footerStyle from "./footer.module.scss"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer>
      <p className={footerStyle}>
        Created by {data.site.siteMetadata.author}, © 2020
      </p>
    </footer>
  )
}

export default Footer
