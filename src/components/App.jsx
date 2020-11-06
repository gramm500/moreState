import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");
  function handleChange() {
    setName(event.target.value);
  }
  function saveChange() {
    setHeading(name);
  }

  return (
    <div className="container">
      <h1> Hello {heading} </h1>
      <input
        onChange={handleChange}
        type="text"
        value={name}
        placeholder="What's your name?"
      />
      <button onClick={saveChange}>Submit</button>
    </div>
  );
}

export default App;
