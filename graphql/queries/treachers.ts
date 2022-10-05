import { gql } from '@apollo/client';

export const teachers = gql`
  query teachers {
    posts(first: 100, where: { categoryName: "teachers" }) {
      nodes {
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
  }
`;
