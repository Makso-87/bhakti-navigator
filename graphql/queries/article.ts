import { gql } from '@apollo/client';

export const article = gql`
  query article($name: String) {
    posts(where: { name: $name }) {
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
          articleAuthor
          themes {
            ... on Post {
              title
            }
          }
          contentPart1
          contentPart2
          contentPart3
          contentPart4
          contentPart5
          quote1
          quote2
          note1
          note2
          articleSategory
        }
      }
    }
  }
`;
