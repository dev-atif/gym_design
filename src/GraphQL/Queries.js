const { gql } = require("@apollo/client");

export const Get_All_Posts = gql`
  query {
    posts {
      data {
        id
        title
        body
        user {
          name
          username
          email
          address {
            street
            suite
            city
            zipcode
          }
          phone
          website
          company {
            name
          }
        }
      }
    }
  }
`;
