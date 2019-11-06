import React from "react";
import NavBarPages from "./NavBarPages";

const NavBar = props => {
  return (
    <div className="NavBarPages">
      <NavBarPages
        AddFav={props.AddFav}
        AddWatch={props.AddWatch}
        // topTv={this.props.topTv}
        onClickRm={props.onClickRm}
        faves={props.faves}
        watch={props.watch}
        clearList={props.clearList}
      />
    </div>
  );
};

export default NavBar;
