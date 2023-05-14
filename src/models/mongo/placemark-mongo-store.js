import { Placemark } from "./placemark.js";
import { Category } from "./category.js";

export const placemarkMongoStore = {
  async getAllPlacemarks() {
    const placemarks = await Placemark.find().populate("contributor").populate("category").lean();
    return placemarks;
  },

  async getPlacemarkById(id) {
    if (id) {
      const placemark = await Placemark.findOne({ _id: id }).lean();
    return placemark;
    }
    return null;
  },

  async getPlacemarksByCategory(id) {
    const placemarks = await Placemark.find({ category: id });
    return placemarks;
  },

  async getPlacemarksByCategoryId(id) {
    const placemarks = await Placemark.find({ categoryid: id }).lean();
    return placemarks;
  },

  async addPlacemark(name, description, area, contributor, category, lat, lng) {
    const newPlacemark = new Placemark({
      name,
      description,
      area,
      contributor: contributor._id,
      category: category._id,
      lat,
      lng,
    });
    await newPlacemark.save();
    return newPlacemark;
  },

/*   async addPlacemark(categoryId, placemark) {
    placemark.categoryid = categoryId;
    const newPlacemark = new Placemark(placemark);
    const placemarkObj = await newPlacemark.save();
    return this.getPlacemarkById(placemarkObj._id);
  }, */

  async getUserPlacemarks(id) {
    const placemark = await Placemark.find({ userid: id }).lean();
    return placemark;
  },

  async deletePlacemarkById(id) {
    try {
      await Placemark.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllPlacemarks() {
    await Placemark.deleteMany({});
  },

  async updatePlacemark(updatedPlacemark) {
    const placemark = await Placemark.findOne({ _id: updatedPlacemark._id });
    placemark.name = updatedPlacemark.name;
    placemark.description = updatedPlacemark.description;
    placemark.lat = updatedPlacemark.lat;
    placemark.lng = updatedPlacemark.lng;
    placemark.img = updatedPlacemark.img;
    await placemark.save();
  },
};
