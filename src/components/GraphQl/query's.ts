import { gql } from "@apollo/client";

export const GET_REC_PRODUCTS = gql`
    query GetRecProducts {
        recProducts {
            _id
            name
            author
            category
            createdAt
            description
            image {
            alt
            medium
            }
        }
    }
    
`;

export const GET_REC_PRODUCTS_BY_ID = gql`
query GetRecProductById($id: ID!) {
  recProductById(id: $id) {
      _id
      name
      author
      category
      createdAt
      description
      discountPercentage
      productId
      quantity
      salePrice
      image {
        alt
        medium
      }
    }
  }
`;




export const GET_ALL_BANNERS = gql`
  query GetAllBanners {
    getAllBanners {
        _id
      author
      category
      createAt
      image {
        alt
        url
      }
      text
      title
      url
    }
  }
`