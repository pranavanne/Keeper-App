import React from "react";

function CreateArea(props) {
  const [inputTitle, setInputTitle] = React.useState("");
  const [inputContent, setInputContent] = React.useState("");

  function handleTitleChange(event) {
    const newTitle = event.target.value;
    setInputTitle(newTitle);
  }

  function handleContentChange(event) {
    const newContent = event.target.value;
    setInputContent(newContent);
  }

  return (
    <div>
      <form
        onSubmit={function (event) {
          event.preventDefault();
          props.handleSubmit([inputTitle, inputContent]);
        }}
      >
        <input
          name="title"
          placeholder="Title"
          onChange={handleTitleChange}
          value={inputTitle}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleContentChange}
          value={inputContent}
        />
        <button
          type="submit"
          onClick={function () {
            console.log(inputTitle, inputContent);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
