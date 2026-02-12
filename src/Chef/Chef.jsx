import React, { createContext, useState } from "react";
import Header from "./Header";
import Chef_AddIngred from "./Chef_AddIngred";
import Chef_List from "./Chef_List";
import Chef_Recipe from "./Chef_Recipe";
import Chef_SuggestRecipe from "./Chef_SuggestRecipe";

// eslint-disable-next-line react-refresh/only-export-components
export const Data = createContext();
const Chef = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  async function handleGetRecipe() {
    setLoading(true);
    // await new Promise((r) => setTimeout(r, 2000));
    setRecipe("fasdfsdf");
    console.log("you click get recipe button");
    setLoading(false);
  }

  const [ingredData, setIngredData] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
  const addIngred = (data) => {
    setIngredData((prevIngredData) => [...prevIngredData, data]);
  };

  return (
    <div>
      <Header />
      <main style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <Chef_AddIngred addIngred={addIngred} ingredData={ingredData} />
        <Data.Provider value={ingredData}>
          <Chef_List />
          {ingredData?.length > 3 && (
            <Chef_Recipe onGetRecipe={handleGetRecipe} isLoading={loading} />
          )}
        </Data.Provider>
        {recipe && <Chef_SuggestRecipe recipe={recipe} />}
      </main>
    </div>
  );
};

export default Chef;
