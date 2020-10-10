import React, { Fragment, useEffect, useState } from "react";
import FirstSlide from "./sectionOne/first-slide";
import SecondSlide from "./sectionOne/second-slide";
import ThirdSlide from "./sectionOne/third-slide";

export default function SectionOne() {
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
  console.log(slideImg);
  return (
    <Fragment>
      <section className={"section-one"}>
        <div
          className={"slide-container"}
          style={{ transform: `translateX(${slideImg}%)` }}
        >
          <FirstSlide />
          <SecondSlide />
          <ThirdSlide />
        </div>
      </section>
    </Fragment>
  );
}
