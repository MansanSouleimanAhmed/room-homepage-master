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
          <h1>{"Le Lorem Ipsum est simplement"}</h1>
          <p>
            {
              "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem "
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
