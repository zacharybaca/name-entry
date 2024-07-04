/* eslint-disable react/prop-types */

import "./list.css";
export default function List(props) {
    return (
        <div id="list-container">
            <h1>List of Names</h1>
            <hr />
            <ul id="list">
                {props.names.length === 0 ? <h1>No Saved Names</h1> : props.names.map((name, index) => {
                    return (
                        <>
                            <li key={index}>{name}</li>
                            <hr id="name-seperator"/>
                        </>
                    )
                })}
            </ul>
        </div>
    )
}