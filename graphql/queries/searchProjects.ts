import { gql } from '@apollo/client';

export const searchProjects = gql`
  query searchProjects($search: String!) {
    posts(first: 100, after: null, where: { search: $search, categoryName: "projects" }) {
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
  }
`;
