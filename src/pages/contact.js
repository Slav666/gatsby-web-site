import React from "react"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <h1>Contact</h1>
        <p>
          The best way to contact me is via
          <a
            href="mailto:slawomirdyk@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            emeil
          </a>
        </p>
      </Layout>
    </div>
  )
}

export default ContactPage
