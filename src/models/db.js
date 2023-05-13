import { userMongoStore } from "./mongo/user-mongo-store.js";
import { placemarkMongoStore } from "./mongo/placemark-mongo-store.js";
import { categoryMongoStore } from "./mongo/category-mongo-store.js";
import { connectMongo } from "./mongo/connect.js";


export const db = {
  userStore: null,
  placemarkStore: null,
  categoryStore: null,

  init(storeType) {
    this.userStore = userMongoStore;
    this.placemarkStore = placemarkMongoStore;
    this.categoryStore = categoryMongoStore;
    connectMongo();
  },
};
