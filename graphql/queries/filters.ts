import { gql } from '@apollo/client';

export const filters = gql`
  query filters {
    posts(first: 1000, where: { categoryIn: [21, 17, 19, 20, 8, 23, 24] }) {
      nodes {
        id
        title
        slug
        categories {
          nodes {
            id
            slug
            name
          }
        }
        serviceACF {
          value
        }
        courseCategoryACF {
          value
        }
        courseFormatACF {
          value
        }
        materialsTypeACF {
          value
        }
      }
    }
  }
`;
