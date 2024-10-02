import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Link, graphql } from 'gatsby'

const recipePost = ({ data }) => {
    return (
    <Layout pageTitle="Recipes">
      {
        data.Drupal.nodeRecipes.nodes.map((node, index) => (
          <article key={index}>
            <h2>
              <Link to={`/recipe/${node.title}`}>
                {node.title}
              </Link>
            </h2>
            
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
        Drupal {
            nodeRecipes(first: 20) {
                nodes {
                    title
                    id
                    cookingTime
                    numberOfServings
                    
                }
            }
        }
    }
`

export const Head = () => <Seo title="Recipes" />

export default recipePost