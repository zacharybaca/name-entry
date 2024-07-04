import React from "react";
import NameHeader from "./components/NameHeader";
import List from "./components/List";
import NameForm from "./components/NameForm";
import './App.css'

function App() {
  const [header, setHeader] = React.useState("");
  const [savedNames, setSavedNames] = React.useState([]);

  function handleChange(event) {
    setHeader(event.target.value)
  }

  function addName(event) {
    event.preventDefault();

    if (header) {
      setSavedNames((prevState) => [...prevState, header]);
    }

    setHeader("");
  }

  function clearList(event) {
    event.preventDefault();

    setSavedNames([]);
  }

  return (
    <div id="app-container">
      <h1 id="app-heading">Guest List Tracker</h1>
      <NameForm 
        name={header} 
        handleChange={handleChange}
        addName={addName}
        clear={clearList}
      />
      <NameHeader name={header}/>
      <List names={savedNames}/>
    </div>
  )
}

export default App
