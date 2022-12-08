import { screen } from "@testing-library/react";

test("render items in the document", () => {
  const itemElement = screen.findByTestId("item-container");
  expect(itemElement).toBeTruthy();
});
