import React from "react";

function ToDoItem(props) {
  return (
    <div
    >
      <li className="userid">
        <div>
        <h2>UserId:<span>{props.text.userId}</span><span><button className="delete_btn">Edit</button></span></h2>
        <h3>Title: 
        <span>{props.text.title}</span>
        </h3>
        <button className="edit_btn"       onClick={() => {
        props.onChecked(props.id);
      }}>
          delete
        </button>
        
        
        </div>
      </li>
    </div>
  );
}

export default ToDoItem;
