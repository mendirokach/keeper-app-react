import React, { useEffect } from "react";

function CreateArea(props) {
  const [inputText, setInputText] = React.useState({
    title: "",
    content: ""
  });

  function handleOnChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setInputText((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleOnClick(e) {
    props.addNote(inputText);
    const emptyInputText = { title: "", content: "" };
    setInputText(emptyInputText);
    e.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          value={inputText.title}
          onChange={handleOnChange}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={inputText.content}
          onChange={handleOnChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleOnClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
