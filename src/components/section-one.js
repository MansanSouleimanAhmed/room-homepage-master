import React, { Fragment } from "react";
import FirstSlide from "./sectionOne/first-slide";
import SecondSlide from "./sectionOne/second-slide";
import ThirdSlide from "./sectionOne/third-slide";

export default function SectionOne() {
  return (
    <Fragment>
      <FirstSlide />
      <SecondSlide />
      <ThirdSlide />
    </Fragment>
  );
}
