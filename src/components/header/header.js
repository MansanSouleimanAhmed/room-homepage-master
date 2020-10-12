import React, { Fragment, useLayoutEffect, useState, useEffect } from "react";

import ButtonOpen from "./button-open";
import ButtonClose from "./button-close";
export default function Header(props) {
  console.log(props.toggle);
  return (
    <Fragment>
      <header className={`header ${props.toggle ? `-open` : `-close`}`}>
        <nav>
          <div
            className={"button-close"}
            onClick={(event) => {
              props.onClick();
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
            <li>{"home"}</li> <li>{"shop"}</li> <li>{"about"}</li>
            <li>{"contact"}</li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}
