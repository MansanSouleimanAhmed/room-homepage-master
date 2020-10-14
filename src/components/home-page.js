import React, { Fragment, useState, useEffect } from "react";

import Header from "./header/header.js";
import SectionOne from "./section-one.js";
import SectionTwo from "./section-two.js";
import TransparentDiv from "./sectionOne/transparent-div.js";
import Modal from "./modal.js";

export default function HomePage() {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [slideImg, setSlideImg] = useState(0);

  return (
    <Fragment>
      <Modal
        toggle={toggle}
        onClick={() => {
          setToggle((state) => !state);
        }}
      ></Modal>

      <div className={"sections-container"}>
        <SectionOne
          toggle={toggle}
          onClick={() => {
            setToggle((state) => !state);
          }}
        />
        <SectionTwo />
      </div>
    </Fragment>
  );
}
