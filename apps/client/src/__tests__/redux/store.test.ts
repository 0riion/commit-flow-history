import { store } from "../../redux/store";

describe("store", () => {
  it("should have a commits reducer", () => {
    const state = store.getState();
    expect(state.commits).toBeDefined();
  });

  it("should have a dispatch function", () => {
    expect(store.dispatch).toBeDefined();
  });

  it("should have a thunk function", () => {
    expect(typeof store.dispatch).toEqual("function");
  });
});