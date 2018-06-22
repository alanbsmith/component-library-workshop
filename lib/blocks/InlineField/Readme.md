```jsx
<InlineField>
  <Grid.Row>
    <Grid.Column flex="1">
      <InlineField.Label htmlFor="email">Email</InlineField.Label>
    </Grid.Column>
  </Grid.Row>
  <Grid.Row>
    <Grid.Column flex="1" position="relative">
      <InlineField.TextField
        id="email"
        type="text"
        placeholder="update your email address"
      />
    </Grid.Column>
    <Grid.Column>
      <InlineField.ActionButton modifiers={['hoverSuccess']}>
        <InlineField.ActionButton.Icon name="check" aria-label="example save input" />
      </InlineField.ActionButton>
    </Grid.Column>
    <Grid.Column>
      <InlineField.ActionButton modifiers={['hoverDanger']}>
        <InlineField.ActionButton.Icon name="times" />
      </InlineField.ActionButton>
    </Grid.Column>
  </Grid.Row>
  <InlineField.StatusMessage modifiers={['statusColorWarning']}>
    <InlineField.StatusMessage.Icon name="exclamation-circle" aria-label="example reset input" />
    <InlineField.StatusMessage.Text>
      Input is invalid
    </InlineField.StatusMessage.Text>
  </InlineField.StatusMessage>
</InlineField>
```
