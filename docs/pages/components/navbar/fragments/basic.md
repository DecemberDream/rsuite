<!--start-code-->

```js
const instance = (
  <Navbar>
    <Navbar.Brand href="#">RSUITE</Navbar.Brand>
    <Nav>
      <Nav.Item icon={<Home />}>Home</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Menu title="About">
        <Nav.Item>Company</Nav.Item>
        <Nav.Item>Team</Nav.Item>
        <Nav.Menu title="Contact">
          <Nav.Item>Via email</Nav.Item>
          <Nav.Item>Via telephone</Nav.Item>
        </Nav.Menu>
      </Nav.Menu>
    </Nav>
    <Nav pullRight>
      <Nav.Item icon={<Cog />}>Settings</Nav.Item>
    </Nav>
  </Navbar>
);
ReactDOM.render(instance);
```

<!--end-code-->
