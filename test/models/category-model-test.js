import { assert } from "chai";
import { db } from "../../src/models/db.js";
import { testCategorys, gameOf } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";

suite("Category Model tests", () => {
    setup(async () => {
        db.init("mongo");
        await db.categoryStore.deleteAllCategorys();
        for (let i = 0; i < testCategorys.length; i += 1) {
          // eslint-disable-next-line no-await-in-loop
          testCategorys[i] = await db.categoryStore.addCategory(testCategorys[i]);
        }
      });
    
      test("create a category", async () => {
        const category = await db.categoryStore.addCategory(gameOf);
        assertSubset(gameOf, category);
        assert.isDefined(category._id);
      });
    
      test("get a category - success", async () => {
        const category = await db.categoryStore.addCategory(gameOf);
        const returnedCategory = await db.categoryStore.getCategoryById(category._id);
        assertSubset(gameOf, category);
      });
    
      test("delete One Category - success", async () => {
        const id = testCategorys[0]._id;
        await db.categoryStore.deleteCategoryById(id);
        const returnedCategorys = await db.categoryStore.getAllCategorys();
        assert.equal(returnedCategorys.length, testCategorys.length - 1);
        const deletedCategory = await db.categoryStore.getCategoryById(id);
        assert.isNull(deletedCategory);
      });
    
      test("get a category - bad params", async () => {
        assert.isNull(await db.categoryStore.getCategoryById(""));
        assert.isNull(await db.categoryStore.getCategoryById());
      });
    
      test("delete One Category - fail", async () => {
        await db.categoryStore.deleteCategoryById("bad-id");
        const allCategorys = await db.categoryStore.getAllCategorys();
        assert.equal(testCategorys.length, allCategorys.length);
      });
    });
    