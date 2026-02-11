import React from "react";
import styles from "./Chef_AddIngred.module.css";

const Chef_AddIngred = ({ addIngred }) => {
  // const [input, setInput] = useState("");
  // const sumbitHandler = (e) => {
  //   e.preventDefault();
  //   addIngred(input);
  //   setInput("");
  // };
  //<form onSubmit={sumbitHandler}
  //<input value={input} onChange={(e) => setInput(e.target.value)}

  function addIngredAction(formData) {
    addIngred(formData.get("ingredient"));
  }

  return (
    <form className={styles.chefAddingredContainer} action={addIngredAction}>
      <input
        aria-label="Add ingredient"
        className={styles.chefAddingredInput}
        type="text"
        placeholder="e.g. oregano"
        id="ingredient"
        name="ingredient"
      />
      <button className={styles.chefAddingredButton}>Add ingredient</button>
    </form>
  );
};

export default Chef_AddIngred;
