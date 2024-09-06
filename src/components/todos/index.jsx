import React from "react";
import ListView from "../listview";
import TableView from "../tableview";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import CreateTodoForm from "../create-todo-form";
import Controller from "../controller";
import shortid from "shortid";

class TodoList extends React.Component {
  state = {
    filter: "all",
    view: "list",
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

  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((todo) => todo.id === todoId);
    todo.isSelected = !todo.isSelected;
    this.setState({ todos });
  };
  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((todo) => todo.id === todoId);
    todo.isComplete = !todo.isComplete;
    this.setState({ todos });
  };
  toggleForm = () => {
    this.setState({ isOpenTodoForm: !this.state.isOpenTodoForm });
  };
  handleSearch = (value) => {
    this.setState({ searchQuery: value });
  };
  createTodo = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelected = false;

    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.toggleForm();
  };

  handleFilter = (value) => {
    this.setState({ filter: value });
  };

  changeView = (event) => {
    this.setState({ view: event.target.value });
  };
  clearSelected = () => {
    const todos = this.state.todos.filter((todo) => !todo.isSelected);
    this.setState({ todos });
  };
  clearCompleted = () => {
    const todos = this.state.todos.filter((todo) => !todo.isComplete);
    this.setState({ todos });
  };
  reset = () => {
    this.setState({
      filter: "all",
      searchQuery: "",
      view: "list",
      isOpenTodoForm: false,
    });
  };

  performSearch = () =>
    this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );

  performFilter = (todos) => {
    const { filter } = this.state;
    if (filter === "completed") {
      return todos.filter((todo) => todo.isComplete);
    } else if (filter === "running") {
      return todos.filter((todo) => !todo.isComplete);
    } else {
      return todos;
    }
  };

  getView = () => {
    let todos = this.performSearch();
    todos = this.performFilter(todos);
    return this.state.view === "list" ? (
      <ListView
        todos={todos}
        toggleComplete={this.toggleComplete}
        toggleSelect={this.toggleSelect}
      />
    ) : (
      <TableView
        todos={todos}
        toggleComplete={this.toggleComplete}
        toggleSelect={this.toggleSelect}
      />
    );
  };

  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5">Todo List</h1>
        <Controller
          searchQuery={this.state.searchQuery}
          toggleForm={this.toggleForm}
          handleSearch={this.handleSearch}
          view={this.state.view}
          changeView={this.changeView}
          handleFilter={this.handleFilter}
          clearCompleted={this.clearCompleted}
          clearSelected={this.clearSelected}
          reset={this.reset}
        />
        <div>{this.getView()}</div>
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
