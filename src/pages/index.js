// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your components
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome!</p>
      <p>To see a post about my favorite pet, check out the blog section of this site.</p>
      <StaticImage
        alt="a calming purple sky"
        //src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        src="../images/purple.jpg"
      />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage
