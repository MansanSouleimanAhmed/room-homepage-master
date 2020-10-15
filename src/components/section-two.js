import React, { Fragment } from "react";
import ImgAboutDark from "../images/image-about-dark.jpg";
import ImgAboutLight from "../images/image-about-light.jpg";
import ArrowsContainer from "./sectionOne/arrows-container";
export default function SectionTwo() {
  return (
    <Fragment>
      <section className={"section-two"}>
        <div className={"second-section-img-one"}>
          <img src={ImgAboutDark} />
        </div>
        <div className={"text-second-section"}>
          <h1>{"ABOUT OUR FURNITURE"}</h1>
          <p>
            {
              "Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anythong in between. Product specialists are available to help you to create."
            }
          </p>
        </div>
        <div className={"second-section-img-two"}>
          <img src={ImgAboutLight} />
        </div>
      </section>
    </Fragment>
  );
}
