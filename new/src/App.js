import React from "react";

function App() {
    
  return (
    <div className="App" style={{padding:10;}}>
      <input
      value={email}
      onChange={handleChange}
      />
      <p>Email:{email}</p>
    </div>
  );
}

export default App;
