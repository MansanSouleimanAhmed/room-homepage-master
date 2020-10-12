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
  //console.log(slideImg);
  return (
    <Fragment>
      <section className={"section-one"}>
        <ImgText />
      </section>
    </Fragment>
  );
}
