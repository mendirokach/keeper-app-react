import React from "react";

function Note(props) {
  function handleOnCick() {
    props.removeItem(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleOnCick}>DELETE</button>
    </div>
  );
}

export default Note;
