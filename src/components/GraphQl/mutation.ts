import { gql } from "@apollo/client";

export const CREATE_REC_PRODUCT = gql`
  mutation CreateRecProduct($input: NewRecProductInput!) {
    createRecProduct(input: $input) {
      productId
      _id
      name
      salePrice
      quantity
      description
      category
      discountPercentage
      image {
        large
        medium
        small
        alt
      }
      createdAt
      author
    }
  }
`;

export const DELETE_REC_PRODUCT = gql`
  mutation DeleteRecProduct($id: ID!) {
    deleteRecProduct(id: $id) {
      productId
      _id
      name
      salePrice
      quantity
      description
      category
      discountPercentage
      image {
        large
        medium
        small
        alt
      }
      createdAt
      author
    }
  }
`;
