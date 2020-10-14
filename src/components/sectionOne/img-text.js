import React, { Fragment, useEffect, useState, useRef } from "react";
import ImgDesktopHeroOne from "../../images/desktop-image-hero-1.jpg";
import ImgMobileHeroOne from "../../images/mobile-image-hero-1.jpg";
import ImgDesktopHeroSeconde from "../../images/desktop-image-hero-2.jpg";
import ImgMobileHeroSecond from "../../images/mobile-image-hero-2.jpg";
import ImgDesktopHeroThree from "../../images/desktop-image-hero-3.jpg";
import ImgMobileHeroThree from "../../images/mobile-image-hero-3.jpg";
import ArrowsContainer from "./arrows-container";
import Logo from "./logo";
const invisble = {
  visibility: "hidden",
};
export default function ImgText(props) {
  const arrayBanner = [
    <img src={ImgMobileHeroOne} />,
    <img src={ImgMobileHeroSecond} />,
    <img src={ImgMobileHeroThree} />,
  ];

  return (
    <Fragment>
      <div className={"img-text"}>
        <div className={"img-container"}>
          <div className={"nav-bar"}>
            <div className={"hamburger-div"} onClick={props.onClick}>
              <svg
                width="20"
                height={"14"}
                xmlns={"http://www.w3.org/2000/svg"}
              >
                <path
                  d={"M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"}
                  fill={"#FFF"}
                  fillRule={"evenodd"}
                />
              </svg>
            </div>
            <Logo />
            <ul>
              <li>{"home"}</li>
              <li>{"shop"}</li>
              <li>{"about"}</li>
              <li>{"contact"}</li>
            </ul>
          </div>
          <ArrowsContainer
            slideLeft={props.slideLeft}
            slideRight={props.slideRight}
            toggle={props.toggle}
            onClick={props.onClick}
          />
          <div
            className={"img-slide"}
            style={{ transform: `translateX(${props.slideImg}%)` }}
          >
            <img className={"img-one"} src={ImgMobileHeroOne} />
            <img className={"img-two"} src={ImgMobileHeroSecond} />
            <img className={"img-three"} src={ImgMobileHeroThree} />
          </div>
        </div>

        <div
          className={"text-container"}
          style={{ transform: `translateX(${props.slideImg}%)` }}
        >
          <div
            className={"text-one"}
            style={props.slideImg === -100 ? invisble : null}
          >
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

          <div
            className={"text-two"}
            style={props.slideImg === -200 ? invisble : null}
          >
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
