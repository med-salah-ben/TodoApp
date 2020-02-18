import React from "react";

function Header() {
  return (
    <div style={headerStyle}>
      <h1> TodoList</h1>
    </div>
  );
}
const headerStyle = {
  background: "orange",
  color: "red",
  textAlign: "center",
  padding: "10px"
};

export default Header;
