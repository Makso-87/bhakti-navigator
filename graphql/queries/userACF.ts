import { gql } from '@apollo/client';

export const userACF = gql`
  query user {
    viewer {
      userACF {
        city
        age
        inIskconSince
        spiritualName
        favoriteCourses {
          ... on Post {
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
    }
  }
`;
