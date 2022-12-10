import { gql } from '@apollo/client';

const CourseFragment = gql`
  fragment CourseFragment on Post {
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
`;

export default CourseFragment;
