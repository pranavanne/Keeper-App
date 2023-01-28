import React from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [item, setItem] = React.useState([]);

  function handleSubmit(arr) {
    setItem(function (prev) {
      return [...prev, arr];
    });
    console.log(item);
  }

  function handleDelete(id) {
    setItem(function (prev) {
      return prev.filter(function (i, index) {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea handleSubmit={handleSubmit} />
      {item.map(function (i, index) {
        return (
          <Note
            id={index}
            title={i[0]}
            content={i[1]}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default App;
