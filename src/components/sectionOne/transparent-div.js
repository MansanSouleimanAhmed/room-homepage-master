import React, { Fragment } from "react";

export default function TransparentDiv(props) {
  return (
    <Fragment>
      <div
        className={`transparent-div ${props.toggle ? `-open` : `-close`}`}
        onClick={(event) => {
          props.onClick();
        }}
      ></div>
    </Fragment>
  );
}
