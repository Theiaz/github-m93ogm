import { shallowMount } from "@vue/test-utils";
import Page from "./Page.vue";

describe("Page", () => {
  let wrapper;

  const mockRoute = {
    name: "previous",
  };
  const mockRouter = {
    push: jest.fn(),
  };

  beforeEach(async () => {
    wrapper = shallowMount(Page, {
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
        stubs: ["router-link", "router-view"],
      },
    });
  });

  it("foo", () => {
    console.log("fo");
  });
});
