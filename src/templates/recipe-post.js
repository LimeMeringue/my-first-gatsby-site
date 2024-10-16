import * as React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const MainTitle = styled.h1`
  color: #a666bd;
  text-transform: uppercase;

`
const BigTitle = styled.h1`
  color: #f09ed0;
  text-transform: uppercase;

`

const NormText = styled.div`
  font-family: 'Arial', sans-serif; 
  font-size: 1rem; 
  color: #6e666b; 
`;
const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const Box = styled.div`
  flex: 1;
  margin: 10px;
  padding: 20px;
  color: white;
  border-radius: 8px;
  text-align: center;
`;

const Box1 = styled(Box)`
  background-color: #eda4d1; 
`;

const Box2 = styled(Box)`
  background-color: #e394c5; 
`;

const Box3 = styled(Box)`
  background-color: #d180b2; 
`;

const Image = styled.img`
  max-width: 100%; 
  height: auto; 
  border-radius: 8px; 
  margin-bottom: 20px; 
`;


const IngredientsList = styled.ul`
  list-style-type: none; 
  padding: 0; 
  margin: 20px 0; 

  li {
    background-color: #eda4d1; 
    color: white; 
    margin: 8px 0; 
    padding: 5px; 
    font-family: 'Arial', sans-serif; 
    border-radius: 4px; 
  }
`;


const recipe = ({ pageContext }) => {
  const { recipe } = pageContext 
  console.log(recipe); 
  return (
    <Layout pageTitle="Recipes">
      <MainTitle>{recipe.title}</MainTitle>
      
      <BoxContainer>
        <Box1>Difficulty: {recipe.difficulty}</Box1>
        <Box2>Cooking Time: {recipe.cookingTime} Minutes</Box2>
        <Box3>Number of Servings: {recipe.numberOfServings}</Box3>
      </BoxContainer>
   
      
      <Image src={recipe.mediaImage.mediaImage.url} />

      <NormText
        dangerouslySetInnerHTML={{ __html: recipe.summary.processed }} 
      />

      <BigTitle>Ingredients</BigTitle>
      <IngredientsList>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li> 
        ))}
      </IngredientsList>

      <BigTitle>Instructions</BigTitle>
      <NormText
        dangerouslySetInnerHTML={{ __html: recipe.recipeInstruction.processed }} 
      />

    </Layout>
  )
}

export default recipe