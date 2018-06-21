import styled from "styled-components";
import PropTypes from "prop-types";
import FA from "react-fontawesome";
import { applyStyleModifiers } from 'styled-components-modifiers';

import {
  statusColorDanger,
  statusColorDefault,
  statusColorInfo,
  statusColorSuccess,
  statusColorWarning,
} from "../../modifiers";

import { fontSizes, uiColors } from "../../utils";

const modifiers = {
  statusColorDanger,
  statusColorDefault,
  statusColorInfo,
  statusColorSuccess,
  statusColorWarning,
};

const Icon = styled(FA)`
  color: ${uiColors("textLight")};
  display: inline-block;
  font-size: ${fontSizes("medium")};
  ${applyStyleModifiers(modifiers)}
`;

Icon.modifiers = modifiers;

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

/** @component */
export default Icon;
