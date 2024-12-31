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
    lendings: [Lending!]
  }
  type Member{
    id: ID!
    name: String!
    email: String!
    verified: Boolean!
    lendings: [Lending!]
  }
  type Lending{
    id: ID!
    member_id: ID!
    book_id: ID!
    borrowed_at: String!
    returned_at: String
    book: Book
    member: Member
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    books: [Book!]!
    book(id: ID!): Book
    members: [Member!]!
    member(id: ID!): Member
    lendings: [Lending!]!
    lending(id: ID!): Lending
  }

  type Mutation {
    addUser(name: String!, email: String!): User
    updateUser(id: ID!, name: String!, email: String!): User
    deleteUser(id: ID!): String
  }
`;
