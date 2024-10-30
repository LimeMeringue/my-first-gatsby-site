import * as React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const MainTitle = styled.h1`
  color: #a666bd;
  text-transform: uppercase;

`
const NormText = styled.div`
  font-family: 'Arial', sans-serif; 
  font-size: 1rem; 
  color: #6e666b; 
`;

const Image = styled.img`
  max-width: 100%; 
  height: auto; 
  border-radius: 8px; 
  margin-bottom: 20px; 
`;

const article = ({ pageContext }) => {
  const { article } = pageContext 
  console.log(article); 
  return (
    <Layout pageTitle="Articles">
        <MainTitle>{article.title}</MainTitle>
      
      
        <NormText>By {article.author.displayName}</NormText>
        <NormText>
            {new Date(article.author.created).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
        </NormText>

        <Image src={article.mediaImage.mediaImage.url} />
        <NormText>
            <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: article.body.processed }} // Render HTML content
            />
        </NormText>

    </Layout>
  )
}

export default article