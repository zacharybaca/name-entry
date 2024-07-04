/* eslint-disable react/prop-types */

import "./name-header.css";
export default function NameHeader(props) {
    return (
        <div id="name-header-container">
            {props.name ? <h1>{props.name}</h1> : <h1>No Name Entered</h1>}
        </div>
    )
}