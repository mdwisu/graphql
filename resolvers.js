import { books } from "./_db.js";
import { members } from "./_db.js";
import { users } from "./_db.js";

export const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find((user) => user.id === id),
    books: () => books,
    book: (_, { id }) => books.find((book) => book.id === id),
    members: () => members,
    member: (_, { id }) => members.find((member) => member.id === id),
  },
  Mutation: {
    addUser: (_, { name, email }) => {
      const newUser = { id: `${users.length + 1}`, name, email };
      users.push(newUser);
      return newUser;
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
