import Mongoose from "mongoose";

const { Schema } = Mongoose;

const placemarkSchema = new Schema({
  name: String,  
  description: String,
  img: String,
  latitude: String,
  longitude: String,
  categoryid: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Placemark = Mongoose.model("Placemark", placemarkSchema);
