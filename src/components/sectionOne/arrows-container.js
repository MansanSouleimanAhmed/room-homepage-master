import React, { Fragment } from "react";

export default function ArrowsContainer(props) {
  return (
    <Fragment>
      <div className={"arrows-container"}>
        <div className={"arrow-left"}>
          <svg width={"14"} height="24" xmlns={"http://www.w3.org/2000/svg"}>
            <path
              d={"M13 0L1 12l12 12"}
              stroke={"#FFF"}
              fill={"none"}
              fillRule={"evenodd"}
            />
          </svg>
        </div>
        <div className={"arrow-right"}>
          <svg width={"14"} height={"24"} xmlns={"http://www.w3.org/2000/svg"}>
            <path
              d={"M1 0l12 12L1 24"}
              stroke={"#FFF"}
              fill={"none"}
              fillRule={"evenodd"}
            />
          </svg>
        </div>
      </div>
    </Fragment>
  );
}
