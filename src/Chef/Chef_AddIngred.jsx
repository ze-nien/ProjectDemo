import React, { useState } from "react";
import styles from "./Chef_AddIngred.module.css";

const Chef_AddIngred = ({ addIngred }) => {
  const [input, setInput] = useState("");

  const sumbitHandler = (e) => {
    e.preventDefault();
    addIngred(input);
  };

  return (
    <form className={styles.chefAddingredContainer} onSubmit={sumbitHandler}>
      <input
        aria-label="Add ingredient"
        className={styles.chefAddingredInput}
        type="text"
        placeholder="e.g. oregano"
        id="ingredient"
        name="ingredient"
        onChange={(e) => setInput(e.target.value)}
      />
      <button className={styles.chefAddingredButton}>Add ingredient</button>
    </form>
  );
};

export default Chef_AddIngred;
