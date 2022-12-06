import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState({
    userId:"",
    title:""
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const name=event.target.name;
    setInputText(preValue=>{
      if(name === 'user'){
        return {
          userId:newValue,
          title:preValue.title
        }
      }
      else if(name === 'title'){
        return {
          userId : preValue.userId,
          title : newValue
        }
      }
    })
    newValue=""
  }

  return (
    <div className="form">
      <form>
      <input 
      name='user'
      onChange={handleChange}
      placeholder='enter the user Id' 
      type="text" 
      value={inputText.userId}
      />
      <input 
      name='title'
      onChange={handleChange} 
      placeholder='enter the title'
      type="text" 
      value={inputText.title}/>
      <button className="add"
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
      </form>
    </div>
  );
}

export default InputArea;
