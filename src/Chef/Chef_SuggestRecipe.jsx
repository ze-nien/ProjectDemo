import React from "react";
import ReactMarkDown from "react-markdown";

const Chef_SuggestRecipe = ({ children }) => {
  const copyHandler = () => {
    const cleanText = children
      .replace(/[#*`~]/g, "")
      .replace(/\[(.*?)\]\(.*?\)/g, "$1");
    navigator.clipboard.writeText(cleanText);
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
      {children && (
        <div style={{ position: "absolute", right: "10px" }}>
          <button
            style={{
              width: "3rem",
              height: "1.5rem",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
            onClick={copyHandler}
          >
            copy
          </button>
        </div>
      )}

      <div>
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
    </div>
  );
};

export default Chef_SuggestRecipe;
