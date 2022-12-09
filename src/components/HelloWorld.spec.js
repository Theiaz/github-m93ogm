import { mount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld";

describe("HelloWorld", () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = mount(HelloWorld, {
      props: { msg: "Title" },
    });
  });

  it("has title", async () => {
    expect(wrapper.html()).toContain("Title");
  });
});
