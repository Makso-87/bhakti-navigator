import { gql } from '@apollo/client';

export const articles = gql`
  query articles {
    posts(first: 100, where: { categoryName: "articles" }) {
      nodes {
        id
        link
        title
        articleACF {
          articleMainImage {
            sourceUrl
          }
          articleLead
          readingTime
        }
      }
    }
  }
`;
