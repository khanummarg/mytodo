import React, { useState } from "react";

export default function Hooks() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        value={surname}
        onChange={(event) => {
          setSurname(event.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log("name", name);
          console.log("surname", surname);
        }}
      >
        Click
      </button>
    </div>
  );
}
