import { gql } from '@apollo/client';

export const teacher = gql`
  query teacher($name: String) {
    posts(where: { name: $name }) {
      nodes {
        id
        date
        title
        slug
        link
        teacherACF {
          about
          canArrive
          city
          email
          facebook
          fieldGroupName
          inIskconSince
          video
          teacherPhoto {
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
          email
          twitter
          facebook
          instagram
          telegram
          vkontakte
          odnoklassniki
          whatsapp
          canArrive
          slide1 {
            id
            sourceUrl
          }
          slide2 {
            id
            sourceUrl
          }
          slide3 {
            id
            sourceUrl
          }
          slide4 {
            id
            sourceUrl
          }
          slide5 {
            id
            sourceUrl
          }
        }
      }
    }
  }
`;
