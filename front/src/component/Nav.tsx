import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/">Wel</Link>
      <Link to="/signup">Sup</Link>
      <Link to="/signup-confirm">Sup-C</Link>
      <Link to="/balance">Bal</Link>
      <Link to="/settings">Set</Link>
      <Link to="/recive">Rec</Link>
      <Link to="/send">Send</Link>
      <Link to="/notifications">Not</Link>
      <Link to="/signin">Sin</Link>
      <Link to="/recovery">Rec</Link>
      <Link to="/recovery-confirm">Re-C</Link>
    </div>
  );
};

export default Nav;
