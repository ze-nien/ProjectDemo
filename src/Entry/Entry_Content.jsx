import React from "react";

const Entry_Content = ({ location, title, secTitle, content }) => {
  return (
    <div className="Entry-Content-container">
      <span>{location}</span>
      <a href="#">view on google maps</a>
      <h2>{title}</h2>
      <h3>{secTitle}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Entry_Content;
