// test for recipe ingredients

import React from "react";
import { render } from "@testing-library/react";


const Recipe = ({ pageContext }) => {
  const { title, ingredients } = pageContext.recipe;

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

// Sample data 
const mockPageContext = {
  recipe: {
    title: "Watercress soup",
    ingredients: ["3 bunches watercress", "3 potatoes", "3 onions"],
    
  }
};

test("Displays list of ingredients", () => {
  // render Recipe component
  const { getByText } = render(<Recipe pageContext={mockPageContext} />); 

  // checks each recipe's value
  mockPageContext.recipe.ingredients.forEach(ingredient => {
    expect(getByText(ingredient)).toBeInTheDocument();
  });
});
