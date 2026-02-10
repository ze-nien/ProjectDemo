import React from "react";
import { useContext } from "react";
import { Data } from "./Chef";
import styles from "./Chef_List.module.css";

const Chef_List = () => {
  const ingredient = useContext(Data);
  return (
    <div className={styles.chefListContainer}>
      <h1>Ingredients on hand:</h1>
      <ul>{ingredient && ingredient.map((item) => <li>{item}</li>)}</ul>
    </div>
  );
};

export default Chef_List;
