import React from "react";
import Container from "../Container";
import "jest-styled-components";

import { renderWithTheme } from "__tests__/helpers";

describe("Grid.Container Element", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Container />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("applies the correct style with the `fluid` modifier", () => {
    const tree = renderWithTheme(<Container modifiers={['fluid']} />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule("padding", "0");
  });
});
