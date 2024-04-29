const { logIn, createAccount, googleAuth } = require("../index.js");
test("if username & password meets the requirements", () => {
  expect(logIn("username_1", "password")).toBeTruthy();
  // expect(logIn("", "")).toBeFalsy();
});
test("if username & password meets the requirements", () => {
  expect(logIn("", "")).toBeFalsy();
});

test("if username & password meets the requirements for creating account", () => {
  expect(createAccount("username.com", "password")).not.toBeFalsy();
  expect(createAccount("username.com", "pass")).toBe("error");
  expect(createAccount("", "")).toBeNull();
});
test("correct password and verification code", () => {
  expect(googleAuth("password", 333433)).toBeTruthy();
  expect(googleAuth("password", "3Abh23")).toBeFalsy();
  expect(googleAuth("passwords", '!$%')).toBeFalsy();
});
