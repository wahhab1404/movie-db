import React from "react";
import NavBarPages from "./NavBarPages";

const NavBar = props => {
  return (
    <div className="NavBarPages">
      <NavBarPages AddFav={props.AddFav} faves={props.faves} />
      {/* <NavBarPages RemFav={props.RemFav} /> */}
      {/* <Logo /> */}
    </div>
  );
};

export default NavBar;
