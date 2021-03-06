import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via Linkedin:{" "}
        <a
          href="https://www.linkedin.com/in/farouk-benfraj/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here!
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
