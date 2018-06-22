import { applyStyleModifiers } from 'styled-components-modifiers';

import { statusColors } from "../../utils";
import {
  statusColorDanger,
  statusColorInfo,
  statusColorSuccess,
  statusColorWarning,
} from '../../modifiers';

import { Row } from "../Grid";

import Icon from "./Icon";
import Text from "./Text";

const modifiers = {
  statusColorDanger,
  statusColorInfo,
  statusColorSuccess,
  statusColorWarning,
};

const StatusMessage = Row.extend`
  align-items: center;
  color: ${statusColors('default')};
  ${applyStyleModifiers(modifiers)}
`;

StatusMessage.modifiers = modifiers;

StatusMessage.Icon = Icon;
StatusMessage.Text = Text;

/** @component */
export default StatusMessage;
