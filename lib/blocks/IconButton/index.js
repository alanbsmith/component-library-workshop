import styled from "styled-components";
import PropTypes from 'prop-types';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { Icon } from "../../elements";
import { fontSizes, statusColors } from "../../utils";

const modifiers = {
  hoverDanger: ({ theme }) => `
    &:hover, &:focus {
      span {
        color: ${statusColors('danger', theme)};
      }
    }
  `,
  hoverInfo: ({ theme }) => `
    &:hover, &:focus {
      span {
        color: ${statusColors('info', theme)};
      }
    }
  `,
  hoverSuccess: ({ theme }) => `
    &:hover, &:focus {
      span {
        color: ${statusColors('success', theme)};
      }
    }
  `,
  hoverWarning: ({ theme }) => `
    &:hover, &:focus {
      span {
        color: ${statusColors('warning', theme)};
      }
    }
  `,
};

const IconButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  display: flex;
  height: ${fontSizes('large')};
  justify-content: center;
  outline: none;
  transition: all 200ms ease;
  width: ${fontSizes('large')};

  &:hover,
  &:focus {
    transform: scale(1.2);

    span {
      color: ${statusColors('default')};
    }
  }

  ${applyStyleModifiers(modifiers)}
`;

IconButton.propTypes = {
  'aria-label': PropTypes.string.isRequired,
};

IconButton.modifiers = modifiers;
IconButton.Icon = Icon;

/** @component */
export default IconButton;
