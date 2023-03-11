import { PlacemarkSpec } from "../models/joi-schemas.js";
import { imageStore } from "../models/image-store.js";
import { db } from "../models/db.js";


export const categoryController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const category = await db.categoryStore.getCategoryById(request.params.id);
      const placemarks = await db.placemarkStore.getPlacemarksByCategoryId(request.params.id);
      const viewData = {
        name: "Category",
        user: loggedInUser,
        category: category,
        placemarks: placemarks,
      };
      return h.view("category-view", viewData);
    },
  },

  addPlacemark: {
    validate: {
      payload: PlacemarkSpec,
      options: { abortEarly: false },
      failAction: async function (request, h, error) {
        const category = await db.categoryStore.getCategoryById(request.params.id);
        return h.view("category-view", { name: "Add placemark error", category, errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const category = await db.categoryStore.getCategoryById(request.params.id);
      const newPlacemark = {
        userid: loggedInUser._id,
        name: request.payload.name,
        latitude: request.payload.latitude,
        longitude: request.payload.longitude,
        description: request.payload.description,
      };
      await db.placemarkStore.addPlacemark(newPlacemark);
      return h.redirect(`/category/${category._id}`);
    },
  },

  deletePlacemark: {
    handler: async function (request, h) {
      const category = await db.categoryStore.getCategoryById(request.params.id);
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
      await db.placemarkStore.deletePlacemarkById(placemark._id);
      return h.redirect(`/category/${category._id}`);
    },
  },

  uploadImage: {
    handler: async function(request, h) {
      try {
        const category = await db.categoryStore.getCategoryById(request.params.id);
        const file = request.payload.imagefile;
        if (Object.keys(file).length > 0) {
          const url = await imageStore.uploadImage(request.payload.imagefile);
          category.img = url;
          db.categoryStore.updateCategory(category);
        }
        return h.redirect(`/category/${category._id}`);
      } catch (err) {
        console.log(err);
        return h.redirect(`/category/${category._id}`);
      }
    },
    payload: {
      multipart: true,
      output: "data",
      maxBytes: 209715200,
      parse: true
    }
  }
};
