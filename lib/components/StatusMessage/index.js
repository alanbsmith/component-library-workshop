import React from "react";
import PropTypes from 'prop-types';

import StatusMessageBlock from "../../blocks/StatusMessage";

const ICON_MAP = {
  danger: "times-circle",
  info: "info-circle",
  success: "check-circle",
  warning: "exclamation-circle",
};

const MODIFIER_MAP = {
  danger: 'statusColorDanger',
  info: 'statusColorInfo',
  success: 'statusColorSuccess',
  warning: 'statusColorWarning',
};

function StatusMessage({ children, status, ...rest }) {
  const modifier = MODIFIER_MAP[status];
  const icon = ICON_MAP[status];

  return (
    <StatusMessageBlock modifiers={[modifier]} {...rest}>
      <StatusMessageBlock.Icon name={icon} />
      <StatusMessageBlock.Text>{children}</StatusMessageBlock.Text>
    </StatusMessageBlock>
  );
}

StatusMessage.propTypes = {
  status: PropTypes.oneOf([
    'danger',
    'info',
    'success',
    'warning',
  ]).isRequired,
};

export default StatusMessage;
