import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default function resume() {
  return (
    <Layout>
      <SEO title="Projects" />
      <div>
        <h1>Project Showcase</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          consequuntur, unde quisquam fuga provident porro doloremque, in non
          rerum delectus optio cumque praesentium dolor illo totam odio ipsa
          excepturi repudiandae! Consequuntur laborum alias molestiae error,
          dolores officia odio ipsam velit?
        </p>
        <p>This is where the projects will be shown</p>
        <p className="note">
          Note - some of these projects are hosted separately on heroku, so
          expect a long delay while the process starts up.
        </p>
      </div>
    </Layout>
  )
}
