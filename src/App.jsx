import NameHeader from "./components/NameHeader";
import List from "./components/List";
import './App.css'

function App() {
  

  return (
    <div id="app-container">
      <div id="input-container">
        <label htmlFor="name-box"></label>
        <input type="text" name="name-box" id="name-box" />
      </div>
      <NameHeader />
      <List />
    </div>
  )
}

export default App
