import React, { Component } from "react";

class TodoItems extends Component {
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(item => (
      <li key={item.key}>{item.text}</li>
    ));

    return <ul className="theList">{listItems}</ul>;
  }
}

export default TodoItems;
