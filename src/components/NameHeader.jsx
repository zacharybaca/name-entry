/* eslint-disable react/prop-types */

import "./name-header.css";
export default function NameHeader(props) {
    return (
        <div id="name-header-container">
            <h1>{props.name}</h1>
        </div>
    )
}