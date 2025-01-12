import React from "react";
import { Scrollbar } from "react-scrollbars-custom";

const ScrollBar = (props) => (
  <Scrollbar
    autoHide
    autoHideTimeout={1000}
    autoHideDuration={200}
    renderThumbVertical={({ style, ...props }) => (
      <div {...props} style={{ ...style, backgroundColor: "blue" }} />
    )}
  >
    {props.children}
  </Scrollbar>
);

export default ScrollBar;
