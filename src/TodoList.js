import React from "react";
import TodoItems from "./TodoItems";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if (this.refs.myRefs.value !== "") {
      var newItem = {
        text: this.refs.myRefs.value,
        key: Date.now()
      };

      this.setState(prevStatedd => {
        return {
          items: prevStatedd.items.concat(newItem)
        };
      });

      this.refs.myRefs.value = "";
    }

    console.log(this.state.items);

    e.preventDefault();
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input placeholder="enter task" ref="myRefs" />
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} />
      </div>
    );
  }
}
export default TodoList;
