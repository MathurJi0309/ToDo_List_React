import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li className="userid">{props.text.id}</li>
    </div>
  );
}

export default ToDoItem;
