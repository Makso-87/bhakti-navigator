import { gql } from '@apollo/client';

export const records = gql`
  query records {
    posts(first: 100, where: { categoryName: "records" }) {
      nodes {
        title
        link
        id
        recordACF {
          mainTheme {
            ... on Post {
              title
            }
          }
          bhaktiLevel {
            ... on Post {
              id
              title
              bhaktiLevelACF {
                value
              }
            }
          }
          materialType {
            ... on Post {
              id
              materialsTypeACF {
                value
              }
            }
          }
          author {
            ... on Post {
              id
              title
            }
          }
          themes {
            ... on Post {
              id
            }
          }
          courseCategory {
            ... on Post {
              id
            }
          }
        }
      }
    }
  }
`;
