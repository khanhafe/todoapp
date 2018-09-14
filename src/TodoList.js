import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {}

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input placeholder="enter task" />
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}
export default TodoList;
