import { applyStyleModifiers } from 'styled-components-modifiers';

import { gridScale, statusColors, uiColors } from "../../utils";

// blocks
import { Container } from "../Grid";
import StatusMessage from "../StatusMessage";

// elements
import { Label, TextField } from "../../elements";

import ActionButton from "./ActionButton";

const modifiers = {
  warning: ({ theme }) => `
    border-color: ${statusColors('warning', theme)};

    &:hover {
      border-color: ${statusColors('warning', theme)};
    }
  `,
};

const InlineField = Container.extend`
  border: solid 1px ${uiColors("chrome100")};
  flex: 1;
  padding: ${gridScale(1.5)};
  transition: all 200ms ease;

  &:hover {
    border-color: ${uiColors("chrome300")};
  }

  ${applyStyleModifiers(modifiers)}
`;

InlineField.modifiers = modifiers;
InlineField.ActionButton = ActionButton;
InlineField.Label = Label;
InlineField.StatusMessage = StatusMessage;
InlineField.TextField = TextField;

/** @component */
export default InlineField;
