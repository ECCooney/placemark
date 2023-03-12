import { EventEmitter } from "events";
import { assert } from "chai";
import { placemarkService } from "./placemark-service.js";
import { assertSubset } from "../test-utils.js";
import { gameOf, maggie, testCategorys } from "../fixtures.js";

EventEmitter.setMaxListeners(25);

suite("Category API tests", () => {
  let user = null;

  setup(async () => {
    placemarkService.clearAuth();
    user = await placemarkService.createUser(maggie);
    await placemarkService.authenticate(maggie);
    await placemarkService.deleteAllCategorys();
    await placemarkService.deleteAllUsers();
    user = await placemarkService.createUser(maggie);
    await placemarkService.authenticate(maggie);
    gameOf.userid = user._id;
  });

  teardown(async () => {
      await placemarkService.deleteAllCategorys();
      await placemarkService.deleteAllUsers();
  });

  test("create category", async () => {
    const returnedCategory = await placemarkService.createCategory(gameOf);
    assert.isNotNull(returnedCategory);
    assertSubset(gameOf, returnedCategory);
  });

  test("delete a category", async () => {
    const category = await placemarkService.createCategory(gameOf);
    const response = await placemarkService.deleteCategory(category._id);
    assert.equal(response.status, 204);
    try {
      const returnedCategory = await placemarkService.getCategoryById(category.id);
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No Category with this id", "Incorrect Response Message");
    }
  });

  test("create multiple categorys", async () => {
    for (let i = 0; i < testCategorys.length; i += 1) {
      testCategorys[i].userid = user._id;
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createCategory(testCategorys[i]);
    }
    let returnedLists = await placemarkService.getAllCategorys();
    assert.equal(returnedLists.length, testCategorys.length);
    await placemarkService.deleteAllCategorys();
    returnedLists = await placemarkService.getAllCategorys();
    assert.equal(returnedLists.length, 0);
  });

  test("remove non-existant category", async () => {
    try {
      const response = await placemarkService.deleteCategory("not an id");
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No Category with this id", "Incorrect Response Message");
    }
  });
});