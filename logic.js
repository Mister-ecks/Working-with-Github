const header = document.querySelector("h1");

const users = [];
const createUser = (username) => {
  users.push(username);
  return users;
};

const value = createUser("Emmanuel");
console.log(value);
