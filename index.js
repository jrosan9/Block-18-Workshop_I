function logIn(username, password) {
  if (username.length === 0 || password.length === 0) {
    return false;
  } else if (username === "username_1" && password === "password") {
    return true;
  } else {
    return false;
  }
}

function createAccount(email, password) {
  if (email.length === 0 || password.length === 0) {
    return null;
  } else if (email[(-4, -1)] === ".com" || password.length >= 8) {
    return true;
  } else {
    return "error";
  }
}

function googleAuth(password, verificationCode) {
  if (typeof verificationCode == "number" && password === "password") {
    return true;
  } else {
    return false;
  }
}
module.exports = { createAccount, logIn, googleAuth };
