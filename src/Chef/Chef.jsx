import React, { createContext, useCallback, useState } from "react";
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
  const [ingredData, setIngredData] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
  const addIngred = (data) => {
    setIngredData((prevIngredData) => [...prevIngredData, data]);
  };

  const handleGetRecipe = useCallback(async () => {
    setLoading(true);
    // const str = `I have ${ingredData.join(", ")}. Please give me a general recipe you'd recommend I make. Just a list!`;
    const str = `I have: ${ingredData.join(", ")}. Output: Recipe suggestions + Ingredients + Steps only + Limit response to 250 tokens.`;
    try {
      const res = await fetch("http://localhost:3000/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: str,
        }),
      });
      const resJson = await res.json();
      setRecipe(resJson.result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    // await new Promise((r) => setTimeout(r, 2000));
  }, [ingredData]);

  return (
    <div>
      <Header />
      <main style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <Chef_AddIngred addIngred={addIngred} ingredData={ingredData} />
        <Data.Provider value={ingredData}>
          <Chef_List />
          {ingredData?.length > 3 && (
            <Chef_Recipe onGetRecipe={handleGetRecipe} isLoading={loading} />
          )}
        </Data.Provider>
        {recipe !== "" && <Chef_SuggestRecipe>{recipe}</Chef_SuggestRecipe>}
      </main>
    </div>
  );
};

export default Chef;
