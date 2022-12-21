import { gql } from '@apollo/client';

export const searchFaq = gql`
  query searchFaq($search: String!) {
    posts(first: 100, after: null, where: { search: $search, categoryName: "faq" }) {
      nodes {
        id
        title
        slug
        link
        faqACF {
          author {
            ... on Post {
              id
              title
            }
          }
          previewImage {
            sourceUrl
          }
          videoDuration
          videoUrl
        }
      }
    }
  }
`;
