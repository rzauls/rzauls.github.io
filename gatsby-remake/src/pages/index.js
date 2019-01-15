import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `rzauls`, `react`, 'blog', 'resume']}
    />
    <h1>Home</h1>
    <p>
      Welcome is my personal website. It contains generally anything I feel like
      uploading, mostly some of my recent projects in programming and web
      develompent. Contact me through Linkedin or by email for any questions.
    </p>
  </Layout>
)

export default IndexPage
