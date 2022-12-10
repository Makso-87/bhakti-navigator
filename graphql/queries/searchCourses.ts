import { gql } from '@apollo/client';

export const searchCourses = gql`
  query searchCourses($search: String!) {
    posts(first: 100, after: null, where: { search: $search, categoryName: "courses" }) {
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
          format {
            ... on Post {
              courseFormatACF {
                value
              }
            }
          }
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
