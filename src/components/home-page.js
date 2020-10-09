import React, { Fragment } from "react";
import Header from "./header.js";
import FirstSlide from "./sectionOne/first-slide.js";
import SecondSlide from "./sectionOne/second-slide.js";
import SectionOne from "./section-one.js";
import SectionTwo from "./section-two.js";

export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <SectionOne />
      <SectionTwo />
    </Fragment>
  );
}
