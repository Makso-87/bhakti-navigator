import { gql } from '@apollo/client';

export const course = gql`
  query course($name: String) {
    posts(where: { name: $name }) {
      nodes {
        id
        title
        link
        courseACF {
          info
          about
          price
          duration
          formatBriefing
          location
          format
          video
          forWhom
          organizerExternal
          organizerLink
          organizerProject {
            ... on Post {
              title
              teacherACF {
                email
                twitter
                facebook
                webSite
                instagram
                telegram
                vkontakte
                odnoklassniki
                whatsapp
              }
            }
          }
          courseProgram {
            ... on Post {
              id
              title
              courseProgramItemACF {
                blitzDescription
                description
                fieldGroupName
              }
            }
          }
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
          themes {
            ... on Post {
              title
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
          teachers {
            ... on Post {
              id
              title
              slug
              link
              teacherACF {
                city
                courses {
                  ... on Post {
                    title
                  }
                }
                teacherPhoto {
                  sourceUrl
                }
              }
            }
          }
          slide1 {
            sourceUrl
          }
          slide2 {
            sourceUrl
          }
          slide3 {
            sourceUrl
          }
          slide4 {
            sourceUrl
          }
          slide5 {
            sourceUrl
          }
        }
      }
    }
  }
`;
