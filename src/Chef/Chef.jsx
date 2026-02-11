import React, { createContext, useState } from "react";
import Header from "./Header";
import Chef_AddIngred from "./Chef_AddIngred";
import Chef_List from "./Chef_List";
import Chef_Recipe from "./Chef_Recipe";

export const Data = createContext();

const Chef = () => {
  const [ingredData, setIngredData] = useState([
    "Chicken",
    "Oregano",
    "Tomatoes",
  ]);
  const addIngred = (data) => {
    setIngredData((prevIngredData) => [...prevIngredData, data]);
  };

  return (
    <div>
      <Header />
      <Chef_AddIngred addIngred={addIngred} />
      <Data.Provider value={ingredData}>
        <Chef_List />
      </Data.Provider>
      <Chef_Recipe />
    </div>
  );
};

export default Chef;
