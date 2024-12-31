export const users = [
  { id: "1", name: "John Doe", email: "john@example.com" },
  { id: "2", name: "Jane Smith", email: "jane@example.com" },
];

export const books = [
  {
    id: "1",
    title: "The Awakening",
    author: "Kate Chopin",
    published_at: "2022-01-01",
    category: "Fiction",
  },
  {
    id: "2",
    title: "City of Glass",
    author: "Paul Auster",
    published_at: "2022-01-01",
    category: "Fiction",
  },
  {
    id: "3",
    title: "The Awakening",
    author: "Kate Chopin",
    published_at: "2022-01-01",
    category: "Fiction",
  },
];

export const members = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    verified: true,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    verified: false,
  },
];

export const lendings = [
  {
    id: "1",
    book_id: "1",
    member_id: "1",
    borrowed_at: "2022-01-01",
    returned_at: null,
  },
  {
    id: "2",
    book_id: "2",
    member_id: "2",
    borrowed_at: "2022-01-01",
    returned_at: null,
  },
  {
    id: "3",
    book_id: "3",
    member_id: "1",
    borrowed_at: "2022-01-01",
    returned_at: null,
  },
];
