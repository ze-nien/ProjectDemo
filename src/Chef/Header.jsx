import React from "react";
import { LuChefHat } from "react-icons/lu";

const Header = () => {
  return (
    <div
      style={{
        marginBottom: "1rem",
        padding: "1rem 0rem",
        borderBottom: "1px solid brown",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <LuChefHat size="2.5rem" />
      <h1>Chef Claude</h1>
    </div>
  );
};

export default Header;
