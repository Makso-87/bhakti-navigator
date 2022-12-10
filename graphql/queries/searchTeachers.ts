import { gql } from '@apollo/client';

export const searchTeachers = gql`
  query searchTeachers($search: String!) {
    posts(first: 100, after: null, where: { search: $search, categoryName: "teachers" }) {
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
