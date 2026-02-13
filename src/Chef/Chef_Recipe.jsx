import React, { useContext } from "react";
import styles from "./Chef_Recipe.module.css";
import { Data } from "./Chef";

const Chef_Recipe = ({ onGetRecipe, isLoading }) => {
  const ingredient = useContext(Data);

  return ingredient.length > 3 ? (
    <section className={styles.container}>
      <div>
        <h3>Ready for a recipe?</h3>
        <p>Generate a recipe from your list of ingredients.</p>
      </div>
      <button
        onClick={onGetRecipe}
        className={styles.chefRecipeButton}
        disabled={isLoading}
      >
        Ask AI for a suggestion
      </button>
    </section>
  ) : null;
};

export default Chef_Recipe;
