import React, { Component, createContext } from "react";
import PropTypes from "prop-types";

import InlineField from "../../blocks/InlineField";
import { Column, Row } from "../../blocks/Grid";

import Text from "../../elements/Text";

import StatusMessage from "../StatusMessage";

import Label from "./Label";
import TextField from "./TextField";

const { Consumer, Provider } = createContext();

class InlineEditable extends Component {
  static Consumer = Consumer;
  static Label = Label;
  static TextField = TextField;
  static StatusMessage = StatusMessage;

  state = {
    isEditing: false,
    isFocused: false,
    previousValue: "",
    value: this.props.value
  };

  handleBlur = e => {
    const { currentTarget } = e;
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        this.props.onBlur(this.state.value);
        this.setState({
          isEditing: false,
          isFocused: false,
          value: this.state.previousValue
        });
      }
    }, 0);
  };

  handleChange = e => {
    const { value } = e.target;
    this.props.onChange(e, value);
    this.setState({ value });
  };

  handleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing,
      previousValue: this.state.value
    });
  };

  handleSave = () => {
    this.setState({
      isEditing: false,
      isFocused: false,
      previousValue: this.state.value
    });
  };

  handleClear = () => {
    this.setState({
      isEditing: false,
      value: this.state.previousValue
    });
  };

  render() {
    const context = {
      id: this.props.id,
      isEditing: this.state.isEditing,
      isFocused: this.state.isFocused,
      handleChange: this.handleChange,
      handleClear: this.handleClear,
      handleEdit: this.handleEdit,
      handleSave: this.handleSave,
      value: this.state.value
    };

    return (
      <Provider value={context}>
        <InlineField
          tabIndex={0}
          data-testid={this.props.id}
          onMouseEnter={() => this.setState({ isFocused: true })}
          onMouseLeave={() => this.setState({ isFocused: false })}
          onFocus={() => this.setState({ isFocused: true })}
          onBlur={this.handleBlur}
        >
          {this.props.children}
        </InlineField>
      </Provider>
    );
  }
}

InlineEditable.defaultProps = {
  onBlur: () => {},
  onChange: () => {},
  value: ""
};

InlineEditable.propTypes = {
  id: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string
};

/** @component */
export default InlineEditable;
