const axios = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2, //arrow function
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "Brad" };
    user["lastName"] = "Traversy";
    return user;
  },
  fectUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((err) => "error"),
};

module.exports = functions;
