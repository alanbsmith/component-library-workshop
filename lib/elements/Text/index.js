import styled from "styled-components";
import { applyStyleModifiers } from 'styled-components-modifiers';

import {
  bold,
  extraSmall,
  large,
  light,
  medium,
  normal,
  semiBold,
  small,
  statusColorDanger,
  statusColorDefault,
  statusColorInfo,
  statusColorSuccess,
  statusColorWarning,
  text,
  textLight,
} from "../../modifiers";

import { fontSizes } from "../../utils";

const modifiers = {
  bold,
  extraSmall,
  large,
  light,
  medium,
  normal,
  semiBold,
  small,
  statusColorDanger,
  statusColorDefault,
  statusColorInfo,
  statusColorSuccess,
  statusColorWarning,
  text,
  textLight,
};

const Text = styled.span`
  display: inline-block;
  font-size: ${fontSizes("medium")};
  line-height: 1.2em;
  ${applyStyleModifiers(modifiers)}
`;

Text.modifiers = modifiers;

/** @component */
export default Text;
