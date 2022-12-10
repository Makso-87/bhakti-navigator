import { gql } from '@apollo/client';

export const project = gql`
  query project($name: String) {
    posts(where: { name: $name }) {
      nodes {
        id
        title
        link
        projectACF {
          format
          city
          webSite
          logo {
            sourceUrl
          }
          courses {
            ... on Post {
              id
              title
              link
              courseACF {
                speaker {
                  ... on Post {
                    title
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
          teachers {
            ... on Post {
              id
              title
              link
              teacherACF {
                city
                teacherPhoto {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }
`;
