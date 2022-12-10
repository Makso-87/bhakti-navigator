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
          quote
          price
          duration
          formatBriefing
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
              id
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
