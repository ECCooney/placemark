import dotenv from "dotenv";
import { UserSpec, UserCredentialsSpec } from "../models/joi-schemas.js";
import { db } from "../models/db.js";

const result = dotenv.config();

export const accountsController = {
  index: {
    auth: false,
    handler: function (request, h) {
      return h.view("main", { title: "Welcome to Placemark" });
    },
  },
  showSignup: {
    auth: false,
    handler: function (request, h) {
      return h.view("signup-view", { title: "Sign up for Placemark" });
    },
  },
  signup: {
    auth: false,
    validate: {
      payload: UserSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("signup-view", { title: "Sign up error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const user = request.payload;
      await db.userStore.addUser(user);
      return h.redirect("/");
    },
  },

  showLogin: {
    auth: false,
    handler: function (request, h) {
      return h.view("login-view", { title: "Login to Placemark" });
    },
  },

  login: {
    auth: false,
    validate: {
      payload: UserCredentialsSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("login-view", { title: "Log in error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const { email, password } = request.payload;
      const user = await db.userStore.getUserByEmail(email);
      const adminEmail = process.env.admin_email
      const adminPassword = process.env.admin_password
      if (!user || user.password !== password) {
        return h.redirect("/");
      }
      if (user.email === adminEmail && user.password === adminPassword) {
        request.cookieAuth.set({ id: user._id });
        return h.redirect("/admin");
      }
      request.cookieAuth.set({ id: user._id });
      return h.redirect("/dashboard");
    },
  },
  logout: {
    handler: function (request, h) {
      request.cookieAuth.clear();
      return h.redirect("/");
    },
  },

  async validate(request, session) {
    const user = await db.userStore.getUserById(session.id);
    if (!user) {
      return { isValid: false };
    }
    return { isValid: true, credentials: user };
  },

  accountDetails: {
    handler: function (request, h) {
      const loggedInUser = request.auth.credentials;
      const viewData = {
        title: "Update User Details",
        user: loggedInUser,
      };
      return h.view("account-view", viewData);
    },
  },

  updateAccount: {
    validate: {
      payload: UserSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        const loggedInUser = request.auth.credentials;
        return h.view("account-view", { title: "Update user error", user: loggedInUser, errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const updatedUser = request.payload;
      const loggedInUser = request.auth.credentials;
      await db.userStore.updateUser(loggedInUser, updatedUser);
      return h.redirect("/account");
    },
  },

};
