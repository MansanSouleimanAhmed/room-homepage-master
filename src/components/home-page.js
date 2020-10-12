import React, { Fragment, useState } from "react";

import Header from "./header/header.js";
import SectionOne from "./section-one.js";
import SectionTwo from "./section-two.js";
import TransparentDiv from "./sectionOne/transparent-div.js";
import Modal from "./modal.js";

export default function HomePage() {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <Modal
        toggle={toggle}
        onClick={() => {
          setToggle((state) => !state);
        }}
      ></Modal>
      <div
        className={"test"}
        onClick={() => {
          setToggle((state) => !state);
        }}
      ></div>
      <SectionOne />
      <SectionTwo />
    </Fragment>
  );
}
