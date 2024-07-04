import React from "react";
import NameHeader from "./components/NameHeader";
import List from "./components/List";
import NameForm from "./components/NameForm";
import './App.css'

function App() {
  const [header, setHeader] = React.useState("");

  function handleChange(event) {
    setHeader(event.target.value)
  }

  return (
    <div id="app-container">
      <NameForm 
        name={header} 
        handleChange={handleChange}
      />
      {header ? <NameHeader name={header}/> : ""}
      <List />
    </div>
  )
}

export default App
