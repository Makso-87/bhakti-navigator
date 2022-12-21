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
              courseFormatACF {
                value
              }
            }
          }
          courseCategory {
            ... on Post {
              id
            }
          }
          mainTheme {
            ... on Post {
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
          serviceKind {
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
        }
      }
    }
  }
`;
