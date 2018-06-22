import PropTypes from 'prop-types';

import IconButton from "../IconButton";

const ActionButton = IconButton.extend`
  display: flex;
  align-self: center;
`;

ActionButton.propTypes = {
  'aria-label': PropTypes.string.isRequired,
};

/** @component */
export default ActionButton;
