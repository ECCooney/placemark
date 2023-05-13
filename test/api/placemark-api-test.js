import { EventEmitter } from "events";
import { assert } from "chai";
import { placemarkService } from "./placemark-service.js";
import { assertSubset } from "../test-utils.js";
import { maggie, maggieCredentials, trim, testPlacemarks } from "../fixtures.js";

EventEmitter.setMaxListeners(25);

suite("Placemark API tests", () => {
  let user = null;

  setup(async () => {
    placemarkService.clearAuth();
    user = await placemarkService.createUser(maggie);
    await placemarkService.authenticate(maggieCredentials);
    await placemarkService.deleteAllPlacemarks();
    await placemarkService.deleteAllUsers();
    user = await placemarkService.createUser(maggie);
    await placemarkService.authenticate(maggieCredentials);
    trim.userid = user._id;
  });

  teardown(async () => {
    await placemarkService.deleteAllPlacemarks();
    await placemarkService.deleteAllUsers();
});

  test("create placemark", async () => {
    const returnedPlacemark = await placemarkService.createPlacemark(trim);
    assert.isNotNull(returnedPlacemark);
    assertSubset(trim, returnedPlacemark);
  });

  test("delete a placemark", async () => {
    const placemark = await placemarkService.createPlacemark(trim);
    const response = await placemarkService.deletePlacemark(placemark._id);
    assert.equal(response.status, 204);
    try {
      const returnedPlacemark = await placemarkService.getPlacemarkById(placemark.id);
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No Placemark with this id", "Incorrect Response Message");
    }
  });

  test("remove non-existant placemark", async () => {
    try {
      const response = await placemarkService.deletePlacemark("not an id");
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No Placemark with this id", "Incorrect Response Message");
    }
  });
});
