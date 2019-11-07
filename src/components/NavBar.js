import React from "react";
import NavBarPages from "./NavBarPages";

const NavBar = props => {
  return (
    <div className="NavBarPages">
      <NavBarPages
        AddFav={props.AddFav}
        AddWatch={props.AddWatch}
        onClickRm={props.onClickRm}
        faves={props.faves}
        watch={props.watch}
        clearList={props.clearList}
        RemFav={props.RemFav}
        RemWatch={props.RemWatch}
      />
    </div>
  );
};

export default NavBar;
