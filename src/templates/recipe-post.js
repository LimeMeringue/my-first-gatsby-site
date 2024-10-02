import * as React from 'react'
import Layout from '../components/layout'

const recipe = ({ pageContext }) => {
  const { recipe } = pageContext // Access 'recipe' from context
  console.log(recipe); // Log the recipe object
  return (
    <Layout pageTitle="Recipes">
    <p>
    Recipe Name: {recipe.title} {/* NAME HERE */}
    </p>
    <p>
    Cooking Time: {recipe.cookingTime} Minutes 
    </p>
    <p>
    Number of Servings: {recipe.numberOfServings}  
    </p>
   
    </Layout>
  )
}

export default recipe