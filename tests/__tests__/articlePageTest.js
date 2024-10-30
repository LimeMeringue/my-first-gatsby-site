// tests a data-driven component collection 
// aka the article page

import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, Link } from "react-router-dom"; 

const RecipePost = ({ data }) => {
    const recipes = data.Drupal.nodeRecipes.nodes;

    return (
        <div>
            {recipes.map(recipe => (
                <Link key={recipe.id} to={`/recipe/${recipe.title}`}>
                {recipe.title}
                </Link>
            ))}
        </div>
    );
};

test("Displays a list of recipes with links", () => {
    const mockData = {
        Drupal: {
            nodeRecipes: {
                nodes: [
                    { title: "SUUPRDEEP mediterranean quiche", id: "1" },
                    { title: "Vegan chocolate and nut brownies", id: "2" },
                    { title: "Super easy vegetarian pasta bake", id: "3" },
                ],
            },
        },
    };

    const { getAllByRole } = render(
        <MemoryRouter>
            <RecipePost data={mockData} />
        </MemoryRouter>
    );


    const recipeLinks = getAllByRole("link");

    // check if right number of links
    expect(recipeLinks.length).toBe(mockData.Drupal.nodeRecipes.nodes.length);

    //check link title and href
    mockData.Drupal.nodeRecipes.nodes.forEach((recipe, index) => {
        expect(recipeLinks[index]).toHaveTextContent(recipe.title);
        expect(recipeLinks[index].getAttribute("href")).toBe("/recipe/"+recipe.title)
    });

    

});
