import React from "react";
import { Container, Row, Col } from "reactstrap";
import TodoList from "./components/todos";
const App = () => (
  <Container className="my-3">
    <Row>
      <Col>
        <TodoList />
      </Col>
    </Row>
  </Container>
);

export default App;
