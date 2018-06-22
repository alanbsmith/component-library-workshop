import React, { Component, Fragment } from "react";

import InlineField from "../../blocks/InlineField";
import Text from "../../elements/Text";
import { Row, Column } from "../../blocks/Grid";

import InlineEditable from "./index";

function TextField(props) {
  function renderInputField(handleChange, handleClear, handleSave, id, value) {
    return (
      <Row>
        <Column flex="1">
          <InlineField.TextField
            autoFocus
            id={id}
            onChange={handleChange}
            value={value}
            {...props}
          />
          <InlineField.ActionButton modifiers={["hoverSuccess"]} onClick={handleSave} aria-label={`save ${id} field`}>
            <InlineField.ActionButton.Icon name="check" />
          </InlineField.ActionButton>
        </Column>
        <Column>
          <InlineField.ActionButton modifiers={["hoverDanger"]} onClick={handleClear} aria-label={`reset ${id} field`}>
            <InlineField.ActionButton.Icon name="times" />
          </InlineField.ActionButton>
        </Column>
      </Row>
    );
  }

  function renderStaticField(handleEdit, id, isFocused, value) {
    return (
      <Row>
        <Column flex="1" onClick={handleEdit}>
          {
            value ?
            <Text>{value}</Text> :
            <Text modifiers={['textLight']}>---</Text>
          }
        </Column>
        <Column>
          {isFocused && (
            <InlineField.ActionButton modifiers={["hoverInfo"]} onClick={handleEdit} aria-label={`edit ${id} field`}>
              <InlineField.ActionButton.Icon name="pencil-alt" />
            </InlineField.ActionButton>
          )}
        </Column>
      </Row>
    );
  }

  return (
    <InlineEditable.Consumer>
      {({
        id,
        isEditing,
        isFocused,
        handleClear,
        handleEdit,
        handleChange,
        handleSave,
        value
      }) =>
        isEditing
          ? renderInputField(handleChange, handleClear, handleSave, id, value)
          : renderStaticField(handleEdit, id, isFocused, value)
      }
    </InlineEditable.Consumer>
  );
}

export default TextField;
