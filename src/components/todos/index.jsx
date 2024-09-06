import React from "react";
import ListView from "../listview";
import TableView from "../tableview";

class TodoList extends React.Component {
  state = {
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

  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5">Todo List</h1>
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
      </div>
    );
  }
}

export default TodoList;
