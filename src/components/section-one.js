import React, { Fragment, useEffect, useState } from "react";
import ImgText from "./sectionOne/img-text";

export default function SectionOne(props) {
  const [slideImg, setSlideImg] = useState(0);
  useEffect(() => {
    var init = setInterval(() => {
      setSlideImg(slideImg - 100);
      if (slideImg === -200) {
        setSlideImg(0);
      }
    }, 6000);
    return () => clearInterval(init);
  }, [slideImg]);

  const slideLeft = () => {
    setSlideImg(slideImg + 100);
    if (slideImg === 0) {
      setSlideImg(-200);
    }
  };
  const slideRight = () => {
    setSlideImg(slideImg - 100);
    if (slideImg === -200) {
      setSlideImg(0);
    }
  };
  return (
    <Fragment>
      <section className={"section-one"}>
        <ImgText
          slideImg={slideImg}
          slideRight={slideRight}
          slideLeft={slideLeft}
          toggle={props.toggle}
          onClick={props.onClick}
        />
      </section>
    </Fragment>
  );
}
