import { getSettableProperties } from "../../src/utils";
import { $wButton } from "./mocks";

test("button", () => {
  expect(getSettableProperties($wButton)).toEqual(["label", "icon", "link"]);
});
