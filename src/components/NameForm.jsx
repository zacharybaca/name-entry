/* eslint-disable react/prop-types */

import "./name-form.css";
export default function NameForm(props) {
    return (
        <div id="form-container">
          <form id="name-form">
            <label htmlFor="name">Enter A Name: </label>
            <input 
              type="text" 
              name="name" 
              id="name-box" 
              placeholder="Please Enter A Name" 
              onChange={props.handleChange} 
              value={props.name}
            />
            <button id="name-button" onClick={props.addName}>Add Name To List</button>
          </form>
      </div>
    )
}