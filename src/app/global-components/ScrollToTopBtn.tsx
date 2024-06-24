"use client";
import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTopBtn = () => {
  const [showBtn, setShowBtn] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      //I think I have to use event listener here (I couldn't find any other way)
      window.scrollY > 400 ? setShowBtn(true) : setShowBtn(false);
    });
  }, []);
  const returnToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {showBtn ? (
        <button
          className="fixed right-4 bottom-4 bg-secondary drop-shadow-lg  grid place-items-center radius rounded-md active:scale-90"
          onClick={returnToTop}
        >
          <MdKeyboardDoubleArrowUp className="size-16 text-text p-2" />
        </button>
      ) : null}
    </>
  );
};

export default ScrollToTopBtn;
