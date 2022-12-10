import { gql } from '@apollo/client';

export const searchArticles = gql`
  query searchArticles($search: String!) {
    posts(first: 100, after: null, where: { search: $search, categoryName: "articles" }) {
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
