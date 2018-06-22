import styled from "styled-components";
import PropTypes from "prop-types";
import { applyStyleModifiers } from 'styled-components-modifiers';

import {
  fontSizes,
  gridScale,
  uiColors,
  statusColors
} from "../../utils";

const modifiers = {
  warning: ({ theme }) => `
    color: ${statusColors('warning', theme)};
    border-bottom-color: ${statusColors('warning', theme)};
    &:hover,
    &:focus {
      border-bottom-color: ${statusColors('warning', theme)};
    }
  `,
};

const TextField = styled.input`
  border: none;
  border-bottom: solid 2px ${uiColors("textLight")};
  color: ${uiColors("text")};
  flex: 1;
  font-size: ${fontSizes("medium")};
  outline: none;
  padding-bottom: ${gridScale(1)};
  transition: all 200ms ease;

  &::placeholder {
    color: ${uiColors("chrome500")};
  }

  &:hover,
  &:focus {
    border-bottom-color: ${uiColors("text")};
  }

  ${applyStyleModifiers(modifiers)}
`;

TextField.modifiers = modifiers;

TextField.propTypes = {
  id: PropTypes.string.isRequired
};

/** @component */
export default TextField;
