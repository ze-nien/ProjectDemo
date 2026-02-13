import React from "react";
import ReactMarkDown from "react-markdown";

const Chef_SuggestRecipe = ({ children }) => {
  const copyHandler = (text) => {
    navigator.clipboard.writeText(text);
    alert("copied");
  };

  return (
    <div
      style={{
        position: "relative",
        margin: "0 auto",
        lineHeight: "1.3",
        fontSize: "1.2rem",
      }}
    >
      <button
        style={{ position: "absolute", bottom: "10px", right: "10px" }}
        onClick={() => copyHandler(children)}
      >
        copy
      </button>
      <ReactMarkDown
        components={{
          ul: ({ children }) => (
            <ul style={{ paddingLeft: "2rem", listStyleType: "disc" }}>
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol style={{ paddingLeft: "2rem", listStyleType: "decimal" }}>
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li style={{ marginBottom: "0.5rem" }}>{children}</li>
          ),
        }}
      >
        {children}
      </ReactMarkDown>
    </div>
  );
};

export default Chef_SuggestRecipe;
