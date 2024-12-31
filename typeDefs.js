export const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
  }
  type Book {
    id: ID!
    title: String!
    author: String!
    published_at: String!
    category: String!
    total: Int!
  }
  type Member{
    id: ID!
    name: String!
    email: String!
    verified: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    books: [Book!]!
    book(id: ID!): Book
    members: [Member!]!
    member(id: ID!): Member
  }

  type Mutation {
    addUser(name: String!, email: String!): User
    deleteUser(id: ID!): String
  }
`;
