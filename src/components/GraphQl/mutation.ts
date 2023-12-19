import { gql } from "@apollo/client";

export const CREATE_REC_PRODUCT = gql`
  mutation CreateNewBanner($newRecBanner: ProductInput!) {
    createRecProduct(newRecBanner: $newRecBanner) {
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

export const DELETE_REC_BANNER = gql `
  mutation DeleteRecBanner($id: ID!) {
    deleteRecProduct(id: $id)
      _id
      name
  }
`
