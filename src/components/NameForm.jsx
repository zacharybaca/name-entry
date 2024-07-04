/* eslint-disable react/prop-types */

import "./name-form.css";
export default function NameForm(props) {
    return (
        <div id="input-container">
        <label htmlFor="name">Enter A Name: </label>
        <input 
          type="text" 
          name="name" 
          id="name-box" 
          placeholder="Please Enter A Name" 
          onChange={props.handleChange} 
          value={props.name}
        />
      </div>
    )
}