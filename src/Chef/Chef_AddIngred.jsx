import React from "react";
import styles from "./Chef_AddIngred.module.css";

const Chef_AddIngred = ({ addIngred, ingredData }) => {
  // const [input, setInput] = useState("");
  // const sumbitHandler = (e) => {
  //   e.preventDefault();
  //   addIngred(input);
  //   setInput("");
  // };
  //<form onSubmit={sumbitHandler}
  //<input value={input} onChange={(e) => setInput(e.target.value)}

  // checkbox多選 不能透過Objcet.fromEntries取得(僅get) 另外getAll且合併成物件
  // const data = Object.fromEntries(formData);
  // const testData = formData.getAll("test");
  // const allData = { ...data, testData };
  function addIngredAction(formData) {
    const newIngred = formData.get("ingredient").trim().toLowerCase();
    if (ingredData.some((item) => item.toLowerCase() === newIngred)) {
      alert("重複的食材");
      return;
    }
    addIngred(newIngred);
  }

  return (
    <form action={addIngredAction}>
      <div className={styles.chefAddingredContainer}>
        <input
          aria-label="Add ingredient"
          type="text"
          placeholder="e.g. oregano"
          id="ingredient"
          name="ingredient"
          required
        />
        <button>Add ingredient</button>
      </div>

      {/* fieldset 相關欄位區塊化
      <fieldset>
        <legend>Sex:</legend>
        <label htmlFor="male">
          <input
            type="radio"
            name="sex"
            id="male"
            value="male"
            defaultChecked={true}
          />
          Male
        </label>
        <label htmlFor="female">
          <input type="radio" name="sex" id="female" value="female" />
          Female
        </label>
      </fieldset>
      <fieldset>
        <legend>Test:</legend>
        <label htmlFor="test1">
          <input type="checkbox" name="test" id="test1" />
          test1
        </label>{" "}
        <label htmlFor="test2">
          <input type="checkbox" name="test" id="test2" />
          test2
        </label>{" "}
        <label htmlFor="test3">
          <input type="checkbox" name="test" id="test3" />
          test3
        </label>
      </fieldset> */}
      {/* <label htmlFor="favColor">Favorite Color:</label>
      <select id="favColor" name="favColor" defaultValue="" required>
        <option value="" disabled>
          --Choose a color--
        </option>
        <option value="black">Black</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
      </select> */}
    </form>
  );
};

export default Chef_AddIngred;
