import styled from "styled-components";
import PropTypes from "prop-types";

import { fontSizes, fontWeights, uiColors } from "../../utils";

const Label = styled.label`
  color: ${uiColors("textLight")};
  display: inline-block;
  font-size: ${fontSizes("extraSmall")};
  font-weight: ${fontWeights("semiBold")};
  line-height: 1.2em;
  text-transform: capitalize;
`;

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired
};

/** @component */
export default Label;
