import Joi from "joi";

export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");

export const UserCredentialsSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("homer@simpson.com").required(),
    password: Joi.string().example("secret").required(),
  })
  .label("UserCredentials");

export const UserSpec = UserCredentialsSpec.keys({
  firstName: Joi.string().example("Homer").required(),
  lastName: Joi.string().example("Simpson").required(),
}).label("UserDetails");

export const UserSpecPlus = UserSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("UserDetailsPlus");

export const UserArray = Joi.array().items(UserSpecPlus).label("UserArray");

export const PlacemarkSpec = Joi.object()
  .keys({
    name: Joi.string().example("Skellig Michael").required(),
    latitude: Joi.number().allow("").example(-1.1111).required(),
    longitude: Joi.number().allow("").example(-1.1111).required(),
    description: Joi.string().example("This was used in Star Wars").optional(),
    categoryid: IdSpec,
    userid: IdSpec,
  })
  .label("Placemark");

export const PlacemarkSpecPlus = PlacemarkSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("PlacemarkPlus");

export const PlacemarkArraySpec = Joi.array().items(PlacemarkSpecPlus).label("PlacemarkArray");

export const CategorySpec = Joi.object()
  .keys({
    name: Joi.string().required().example("Kerry"),
    userid: IdSpec,
    placemarks: PlacemarkArraySpec,
  })
  .label("Category");

export const CategorySpecPlus = CategorySpec.keys({
   _id: IdSpec,
  __v: Joi.number(),
  }).label("CategoryPlus");

export const CategoryArraySpec = Joi.array().items(CategorySpecPlus).label("CategoryArray");
