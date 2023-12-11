import { gql } from "@apollo/client";

export const GET_BANNERS = gql`
  query GetBanners {
    banners {
      _id
      url
      category
      image {
        url
        alt
      }
      title
      text
      createdAt
      author
    }
  }
`;

export const GET_BANNER_BY_ID = gql`
  query GetBannerById($bannerId: ID!) {
    banner(id: $bannerId) {
      _id
      imageUrl
      title
      categories {
        id
        name
      }
    }
  }
`;

export const GET_ALL_CATEGORIES = gql`
  query getAllCategories {
    _id
    name
    image
  }
`;
