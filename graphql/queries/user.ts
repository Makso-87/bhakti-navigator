import { gql } from '@apollo/client';

export const user = gql`
  query user {
    viewer {
      jwtAuthToken
      id
      email
      firstName
      lastName
      avatar {
        url
      }
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
                  id
                  title
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
