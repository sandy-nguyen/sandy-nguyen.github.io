import React, { Component }  from 'react';

import "./intro.scss";
import RightImage from "../right/Right";
export default function Intro() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    const y = el.getBoundingClientRect().top + window.pageYOffset - 128;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <>
      <RightImage />
    <div className='intro' id="intro">
      <span class="Title title-position">
        WELCOME TO<br />
        THE GARDEN<span class="Dashes">//</span>
      </span>


      <span class="Quotation quotation-position-1">
        It looks like a jumble of rectangles.<br />
        Greys and whites.<br />
        Iterations and prototyping.<br />
        Then, eventually sigh of relief and a feeling of accomplishment.<br />
        That is design.
      </span>

      <div class="Red-highlighting red-highlight-position">
        My name is Sandy Nguyen.
      </div>

      <span class="Quotation quotation-position-2">
        I’m a California-based designer with a passion for beautiful, accessible design.<br />
        I want to serve as the bridge between business goals and user goals,<br />
        while at the same time, be an advocate and doer for design.<br />
      </span>

      <span class="Quotation quotation-position-3">
        Are you ready to build together?<span class="Dashes">//</span>
        <button class="Black-button black-button-sizing mobile-hidden" onClick={() => scrollTo("portfolio")}>
          <div class="button-content">
            They Were <img src={"/images/arrow.svg"} width={14} height={14}/>
          </div>
        </button>
      </span>
      </div>
      </>
  )
}
