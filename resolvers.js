import { books } from "./_db.js";
import { members } from "./_db.js";
import { users } from "./_db.js";
import { lendings } from "./_db.js";

export const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find((user) => user.id === id),
    books: () => books,
    book: (_, { id }) => books.find((book) => book.id === id),
    members: () => members,
    member: (_, { id }) => members.find((member) => member.id === id),
    lendings: () => lendings,
    lending: (_, { id }) => lendings.find((lending) => lending.id === id),
  },
  Book: {
    total: () => books.length,
    lendings(parent) {
      return lendings.filter((lending) => lending.book_id === parent.id);
    },
  },
  Member: {
    lendings(parent) {
      return lendings.filter((lending) => lending.member_id === parent.id);
    },
  },
  Lending: {
    book(parent) {
      return books.find((book) => book.id === parent.book_id);
    },
    member(parent) {
      return members.find((member) => member.id === parent.member_id);
    },
  },
  Mutation: {
    addUser: (_, { name, email }) => {
      const newUser = { id: `${users.length + 1}`, name, email };
      users.push(newUser);
      return newUser;
    },
    updateUser: (_, { id, name, email }) => {
      const userIndex = users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        users[userIndex] = { id, name, email };
        return users[userIndex];
      }
      return `User not found.`;
    },
    deleteUser: (_, { id }) => {
      const userIndex = users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        users.splice(userIndex, 1);
        return `User with id ${id} deleted.`;
      }
      return `User not found.`;
    },
  },
};
