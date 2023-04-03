import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ActiveLink from "../ActiveLink/ActiveLink";
const Header = () => {
  return (
    <div className="header mb-8">
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/posts">Posts</ActiveLink>
      <ActiveLink to="/photos">Photos</ActiveLink>
    </div>
  );
};

export default Header;
