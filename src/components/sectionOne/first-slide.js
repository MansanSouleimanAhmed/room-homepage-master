import React, { Fragment } from "react";
import ImgDesktopHeroOne from "../../images/desktop-image-hero-1.jpg";
import ImgMobileHeroOne from "../../images/mobile-image-hero-1.jpg";
export default function FirstSlide() {
  return (
    <Fragment>
      <div className={"first-slide"}>
        <div className={"first-slide-img"}>
          <img className={"img-first-slide"} src={ImgDesktopHeroOne} />
          <div className={"slide-arrows-container"}>
            <div className={"side-arrows-left common-side-arrows"}>
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
            <div className={"side-arrows-right common-side-arrows"}>
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
        <div className={"text-first-slide"}>
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
    </Fragment>
  );
}
