import { gql } from '@apollo/client';

export const courses = gql`
  query courses {
    posts(first: 100, where: { categoryName: "courses" }) {
      nodes {
        id
        title
        link
        courseACF {
          speaker {
            ... on Post {
              title
              teacherACF {
                teacherPhoto {
                  sourceUrl
                }
              }
            }
          }
          location
          format
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
        }
      }
    }
  }
`;
