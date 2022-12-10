import { gql } from '@apollo/client';

export const courses = gql`
  query courses {
    posts(first: 1000, where: { categoryName: "courses" }) {
      nodes {
        id
        title
        link
        courseACF {
          speaker {
            ... on Post {
              id
              title
              teacherACF {
                teacherPhoto {
                  sourceUrl
                }
              }
            }
          }
          location
          format {
            ... on Post {
              id
              title
              courseFormatACF {
                value
              }
            }
          }
          mainTheme {
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
          bhaktiLevel {
            ... on Post {
              id
              title
              bhaktiLevelACF {
                value
              }
            }
          }
          courseCategory {
            ... on Post {
              id
            }
          }
          serviceKind {
            ... on Post {
              id
            }
          }
        }
      }
    }
  }
`;
