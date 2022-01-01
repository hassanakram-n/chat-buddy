import React, { useState } from "react";
import { BiX, BiMinus } from "react-icons/bi";
import { colors } from "../app.info";
function FullScreenModal(props) {
  const { setshow, show, children } = props;
  const hideModal = () => {
    setshow(false);
  };
  if (!show) return null;
  return (
    <div className="fullScreenModal_main_cont">
      <div className="fullScreenModal_header_main-navbar_icon_wrapper">
        {/* <span className="navbar_icon_wrapper"> */}
        <BiMinus
          onClick={() => setshow(false)}
          className="navbar__icons fullScreenModal_header_icon"
        />
        <BiX
          onClick={hideModal}
          className="navbar__icons fullScreenModal_header_icon"
          // style={{ backgroundColor: colors.error, color: colors.white }}
        />
        {/* </span> */}
      </div>
      {/* modal view */}
      <div className="fullScreenModal_body_main">
        <div className="fullScreenModal_card_main">{children}</div>
      </div>
    </div>
  );
}

export default FullScreenModal;
