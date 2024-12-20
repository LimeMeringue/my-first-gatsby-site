const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
    query {
      Drupal {
        nodeRecipes(first: 20) {
          edges {
            node {
              title
              cookingTime
              preparationTime
              difficulty
              ingredients
              numberOfServings
              recipeInstruction {
                processed
              }
              summary {
                processed
              }
              author {
                displayName
              }
              mediaImage {
                mediaImage {
                  url
                }
              }
            }
          }
        }
        nodeArticles(first: 10) {
          edges {
            node {
              title
              author {
                displayName
                created
              }
              body {
                value
                summary
                processed
                format
              }
              mediaImage {
                mediaImage {
                  url
                }
              }
            }
          }
        }

      }
    }
    `
  )

  // Create pages for each markdown file.
  const recipePostTemplate = path.resolve(`src/templates/recipe-post.js`)
  result.data.Drupal.nodeRecipes.edges.forEach(({node}) => {
    createPage({
      path: `/recipe/${node.title}`,
      component: recipePostTemplate,
      context: {
        recipe: node,
      },
    });
  }
  );

  const articlePostTemplate = path.resolve(`src/templates/article-post.js`)
  result.data.Drupal.nodeArticles.edges.forEach(({node}) => {
    createPage({
      path: `/article/${node.title}`,
      component: articlePostTemplate,
      context: {
        article: node,
      },
    });
  }
  );
}