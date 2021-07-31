import React, { useState } from "react";

function Sevagir({ text, max = 55 }) {
  const [showLess, setShowLess] = useState(true);

//   if (text.length <= max) {
//       console.log("y");
//     return <span>{text}</span>;
//   }

  const handleText = () => {
    setShowLess(!showLess);
  };

  return (
    <div>
      {showLess ? `${text.substring(0, max)} ` : text}
      
      <p
        onClick={(e) => {
          handleText();
        }}
      >
        {showLess ? "More..." : "Less"}
      </p>
    </div>
  );
}

export default Sevagir;
