const functions = require("./functions");

// test - toBe
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// test - not.toBe
test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUnfined matches only undefind
// toBeTruthy matches anything than an if statement treats as true
//toBeFalsy matches anything that an if statement treats as false

// test - toBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// test - toBeFalsy
test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// test - toEqual
test("User should be Brad Traversy object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Brad",
    lastName: "Traversy",
  });
});

// test - Less than & Greater than

test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regex

test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

// Arrays

test("Admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// Working with async data

// Promise
// test("User fetched name should be Leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fectUser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

// Async Await

test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fectUser();
  expect(data.name).toEqual("Leanne Graham");
});
