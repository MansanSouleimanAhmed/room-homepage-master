import React, { Fragment, useEffect, useState, useRef } from "react";
import ImgDesktopHeroOne from "../../images/desktop-image-hero-1.jpg";
import ImgMobileHeroOne from "../../images/mobile-image-hero-1.jpg";
import ImgDesktopHeroSeconde from "../../images/desktop-image-hero-2.jpg";
import ImgMobileHeroSecond from "../../images/mobile-image-hero-2.jpg";
import ImgDesktopHeroThree from "../../images/desktop-image-hero-3.jpg";
import ImgMobileHeroThree from "../../images/mobile-image-hero-3.jpg";

export default function ImgText() {
  const [slideImg, setSlideImg] = useState(0);
  const arrayBanner = [
    <img src={ImgMobileHeroOne} />,
    <img src={ImgMobileHeroSecond} />,
    <img src={ImgMobileHeroThree} />,
  ];
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
      <div className={"img-text"}>
        <div className={"img-container"}>
          <div
            className={"img-slide"}
            style={{ transform: `translateX(${slideImg}%)` }}
          >
            <img src={ImgMobileHeroOne} />
            <img src={ImgMobileHeroSecond} />
            <img src={ImgMobileHeroThree} />
          </div>
          <div className={"arrows-container"}>
            <div className={"arrow-left"} onClick={slideLeft}>
              <svg
                width={"14"}
                height={"24"}
                xmlns={"http://www.w3.org/2000/svg"}
              >
                <path
                  d={"M13 0L1 12l12 12"}
                  stroke={"#FFF"}
                  fill={"none"}
                  fillRule={"evenodd"}
                />
              </svg>
            </div>
            <div className={"arrow-right"} onClick={slideRight}>
              <svg
                width={"14"}
                height={"24"}
                xmlns={"http://www.w3.org/2000/svg"}
              >
                <path
                  d={"M1 0l12 12L1 24"}
                  stroke={"#FFF"}
                  fill={"none"}
                  fillRule={"evenodd"}
                />
              </svg>
            </div>
          </div>
        </div>

        <div
          className={"text-container"}
          style={{ transform: `translateX(${slideImg}%)` }}
        >
          <div className={"text-one"}>
            <h1>{"Le Lorem Ipsum est simplement du faux t"}</h1>
            <p>
              {
                "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."
              }
            </p>
            <div className={"shop-button"}>
              <p>{"SHOP NOW"}</p>
              <div className={"svg-arrow"}>
                <svg
                  width={"40"}
                  height={"12"}
                  xmlns={"http://www.w3.org/2000/svg"}
                >
                  <path
                    d={
                      "M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                    }
                    fill={"#000"}
                    fillRule={"nonzero"}
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className={"text-two"}>
            <h1>{"Le Lorem Ipsum est simplement du faux t"}</h1>
            <p>
              {
                "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."
              }
            </p>
            <div className={"shop-button"}>
              <p>{"SHOP NOW"}</p>
              <div className={"svg-arrow"}>
                <svg
                  width={"40"}
                  height={"12"}
                  xmlns={"http://www.w3.org/2000/svg"}
                >
                  <path
                    d={
                      "M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                    }
                    fill={"#000"}
                    fillRule={"nonzero"}
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className={"text-three"}>
            <h1>{"Le Lorem Ipsum est simplement du faux t"}</h1>
            <p>
              {
                "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."
              }
            </p>
            <div className={"shop-button"}>
              <p>{"SHOP NOW"}</p>
              <div className={"svg-arrow"}>
                <svg
                  width={"40"}
                  height={"12"}
                  xmlns={"http://www.w3.org/2000/svg"}
                >
                  <path
                    d={
                      "M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                    }
                    fill={"#000"}
                    fillRule={"nonzero"}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
