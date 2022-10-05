import { gql } from '@apollo/client';

export const projects = gql`
  query projects {
    posts(first: 100, where: { categoryName: "projects" }) {
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
      }
    }
  }
`;
