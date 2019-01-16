import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="About Me" />
    <h1>About Me</h1>
    <p>
      Im an undergraduate student, interested in programming, web development
      and data science
    </p>
    <div style={{ maxWidth: `600px`, marginBottom: `1.45rem` }}>
      <Image />
      <p>This is a picture of my dog (2017)</p>
    </div>
  </Layout>
)

export default SecondPage
