import React from "react";

import InlineField from "../../blocks/InlineField";
import { Row, Column } from "../../blocks/Grid";

import InlineEditable from "./index";

function Label({ children, ...rest }) {
  return (
    <InlineEditable.Consumer>
      {({ id }) => (
        <Row>
          <Column flex="1">
            <InlineField.Label htmlFor={id} {...rest}>
              {children}
            </InlineField.Label>
          </Column>
        </Row>
      )}
    </InlineEditable.Consumer>
  );
}

export default Label;
