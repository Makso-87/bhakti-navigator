import { gql } from '@apollo/client';

export const faqList = gql`
  query faqList {
    posts(first: 100, where: { categoryName: "faq" }) {
      nodes {
        id
        title
        slug
        link
        faqACF {
          author
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
