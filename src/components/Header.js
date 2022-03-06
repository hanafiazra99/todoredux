import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">HOME</Link> |{" "}
      <Link to="/about">About</Link>
    </>
  );
};

export default Header;
