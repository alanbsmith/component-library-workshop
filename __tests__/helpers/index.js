import React from "react";
import renderer from "react-test-renderer";
import theme from "../../config/theme";
import { ThemeProvider } from "styled-components";
import "jest-styled-components";

export function renderWithTheme(component) {
  return renderer.create(
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  );
}

export function generateSnapshots(Component, props = {}) {
  describe(`${Component.displayName}`, () => {
    it("renders correctly", () => {
      const tree = renderWithTheme(<Component {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    if (Component.modifiers) {
      const modifiers = Object.keys(Component.modifiers);
      modifiers.forEach(mod => {
        it(`should apply ${mod} modifier`, () => {
          const tree = renderWithTheme(<Component {...props} modifiers={[mod]} />).toJSON();
          expect(tree).toMatchSnapshot();
        })
      });
    }
  });
}
