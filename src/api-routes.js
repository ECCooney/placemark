import { userApi } from "./api/user-api.js";
import { placemarkApi } from "./api/placemark-api.js";
import { categoryApi } from "./api/category-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },

 // { method: "POST", path: "/api/placemarks", config: placemarkApi.create },
  { method: "POST", path: "/api/categorys/{id}/placemarks", config: placemarkApi.addPlacemark },
  { method: "DELETE", path: "/api/placemarks", config: placemarkApi.deleteAll },
  { method: "GET", path: "/api/placemarks", config: placemarkApi.findAll },
  { method: "GET", path: "/api/categorys/{id}/placemarks", config: placemarkApi.findByCategory },
 // { method: "GET", path: "/api/placemarks/{id}", config: placemarkApi.findOne },
 // { method: "DELETE", path: "/api/placemarks/{id}", config: placemarkApi.deleteOne },

  { method: "POST", path: "/api/categorys", config: categoryApi.create },
//  { method: "DELETE", path: "/api/categorys", config: categoryApi.deleteAll },
  { method: "GET", path: "/api/categorys", config: categoryApi.findAll },
  { method: "GET", path: "/api/categorys/{id}", config: categoryApi.findOne },
//  { method: "DELETE", path: "/api/categorys/{id}", config: categoryApi.deleteOne }
];
