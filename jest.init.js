import { config } from "@vue/test-utils";

/*
 * Setup file to mock things globally for all tests, to avoid repetition
 */

config.global.mocks = {
  $t: (text) => "Title",
};
