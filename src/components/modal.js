import React, { Fragment, useState } from "react";
import ReactDom from "react-dom";
import Header from "./header/header";
const MODAL_STYLE = {
  position: "fixed",
  top: "0%",
  left: "0%",
  width: "100%",
  zIndex: 2,
  textAlign: "center",
  backgroundColor: "#000",
};
const OVERLAY_STYLE = {
  position: "fixed",
  top: "0%",
  left: "0%",
  right: 0,
  bottom: 0,
  backgroundColor: "#000",
  zIndex: 2,
  opacity: 0.5,
};

export default function Modal(props) {
  return ReactDom.createPortal(
    <>
      <div
        style={OVERLAY_STYLE}
        className={` ${!props.toggle ? `-close` : `-open`}`}
      />
      <div style={MODAL_STYLE}>
        <header className={`header ${!props.toggle ? `-close` : `-open`}`}>
          <nav>
            <div
              className={"button-close"}
              onClick={(event) => {
                props.onClick(event);
              }}
            >
              <svg
                width={"16"}
                height={"16"}
                xmlns={"http://www.w3.org/2000/svg"}
              >
                <path
                  d={
                    "M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
                  }
                  fill={"#000"}
                  fillRule={"evenodd"}
                  opacity={".201"}
                />
              </svg>
            </div>
            <ul>
              <li>{"home"}</li>
              <li>{"shop"}</li>
              <li>{"about"}</li>
              <li>{"contact"}</li>
            </ul>
          </nav>
        </header>
      </div>
    </>,
    document.getElementById("portal")
  );
}
