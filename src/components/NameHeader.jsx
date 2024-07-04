/* eslint-disable react/prop-types */

import "./name-header.css";
export default function NameHeader(props) {
    return (
        <div id="name-header-container">
            {props.name ? <h1>Name To Be Added: <span id="name-entered">{props.name}</span></h1> : <h1>Enter A Guest Name In The Box Above</h1>}
        </div>
    )
}