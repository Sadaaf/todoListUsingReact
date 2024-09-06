import React from "react";
import ListView from "../listview";
import TableView from "../tableview";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import CreateTodoForm from "../create-todo-form";
import Controller from "../controller";
import shortid from "shortid";

class TodoList extends React.Component {
  state = {
    isOpenTodoForm: false,
    searchQuery: "",
    todos: [
      {
        id: "1234",
        time: new Date(),
        text: "Halaluya",
        description:
          "Mollit qui et irure ex ipsum mollit. Qui incididunt reprehenderit elit quis veniam quis. Nulla adipisicing minim id veniam commodo id consectetur occaecat id in laborum.",
        isComplete: false,
        isSelected: false,
      },
      {
        id: "12345",
        time: new Date(),
        text: "Jogonnath",
        description:
          "Mollit qui et irure ex ipsum mollit. Qui incididunt reprehenderit elit quis veniam quis. Nulla adipisicing minim id veniam commodo id consectetur occaecat id in laborum.",
        isComplete: false,
        isSelected: false,
      },
    ],
  };

  toggleSelect = (todoId) => {};
  toggleComplete = (todoId) => {};
  toggleForm = () => {
    this.setState({ isOpenTodoForm: !this.state.isOpenTodoForm });
  };
  handleSearch = () => {};
  createTodo = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelected = false;

    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.toggleForm();
  };

  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5">Todo List</h1>
        <Controller
          searchQuery={this.state.searchQuery}
          toggleForm={this.toggleForm}
          handleSearch={this.handleSearch}
        />
        <div>
          <ListView
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            toggleSelect={this.toggleSelect}
          />
          <TableView
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            toggleSelect={this.toggleSelect}
          />
        </div>
        <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
          <ModalHeader toggle={this.toggleForm}>
            Create New Todo Item
          </ModalHeader>
          <ModalBody>
            <CreateTodoForm createTodo={this.createTodo} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default TodoList;
