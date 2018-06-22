```jsx
<Grid.Container>
  <Grid.Row>
    <Grid.Column>
      <IconButton modifiers={['hoverInfo']} aria-label="example aria label: search by city or zipcode">
        <Icon name="pencil-alt" />
      </IconButton>
    </Grid.Column>
    <Grid.Column>
      <IconButton modifiers={['hoverSuccess']} aria-label="example aria label: input saved">
        <Icon name="check" />
      </IconButton>
    </Grid.Column>
    <Grid.Column>
      <IconButton modifiers={['hoverWarning']} aria-label="example aria label: invalid input warning">
        <Icon name="exclamation-triangle " />
      </IconButton>
    </Grid.Column>
    <Grid.Column>
      <IconButton modifiers={['hoverDanger']} aria-label="example aria label: form error">
        <Icon name="times" />
      </IconButton>
    </Grid.Column>
  </Grid.Row>
</Grid.Container>
```
