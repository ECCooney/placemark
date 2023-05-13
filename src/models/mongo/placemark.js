import Mongoose from "mongoose";

const { Schema } = Mongoose;

const placemarkSchema = new Schema({
  name: String,  
  description: String,
  area: String,
 // img: String,
  lat: String,
  lng: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  contributor: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Placemark = Mongoose.model("Placemark", placemarkSchema);
