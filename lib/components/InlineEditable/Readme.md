```jsx
<Grid.Container>
  <Grid.Row>
    <Grid.Column flex="2">
      <InlineEditable id="email" value="tracy.triceratops@gmail.com">
        <InlineEditable.Label>Email</InlineEditable.Label>
        <InlineEditable.TextField />
      </InlineEditable>
    </Grid.Column>
    <Grid.Column flex="1">
      <InlineEditable id="phone-number" isValid={false}>
        <InlineEditable.Label>Phone</InlineEditable.Label>
        <InlineEditable.TextField />
      </InlineEditable>
    </Grid.Column>
  </Grid.Row>
</Grid.Container>
```
