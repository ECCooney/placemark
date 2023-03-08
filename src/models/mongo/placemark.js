import Mongoose from "mongoose";

const { Schema } = Mongoose;

const placemarkSchema = new Schema({
  name: String,  
  description: String,
  category: String,
  latitude: String,
  longitude: String,
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Placemark = Mongoose.model("Placemark", placemarkSchema);
