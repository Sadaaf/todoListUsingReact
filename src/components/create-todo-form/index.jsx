import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import PropTypes from "prop-types";

class CreateTodoForm extends React.Component {
  state = {
    text: "",
    description: "",
  };
  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTodo(this.state);
    event.target.reset();
    this.setState({ text: "", description: "" });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>Enter Task</Label>
          <Input
            placeholder="Do some code"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <Label>Describe Task</Label>
          <Input
            type="textarea"
            placeholder="Describe the task"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button type="submit">Create Task</Button>
      </Form>
    );
  }
}

CreateTodoForm.propTypes = {
  createTodo: PropTypes.func.isRequired,
};

export default CreateTodoForm;
