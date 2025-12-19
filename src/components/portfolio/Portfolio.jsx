import React, { Component }  from 'react';
import { useState } from 'react';
import "./portfolio.scss";
import data from './data';
import { useNavigate } from "react-router-dom";
export default function Portfolio() {
  const navigate = useNavigate();
  const [experience, setExperience] = useState("MD");
  const experiences = Object.values(data);
  const [active, setActive] = useState(false)
  const handleExperience = (val) => {
    setExperience(val)
  }

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    const y = el.getBoundingClientRect().top + window.pageYOffset - 128;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <section className="portfolio" id="portfolio">
      <span class="Title title-position">
        TRUSTED
        <br />
        BY MANY<span class="Dashes">//</span>
      </span>

      <div class="Red-highlighting red-highlight-position hide-mobile">
        I believe good design is where art, community, and technology fuse to
        create magic
      </div>

      <span class="Quotation quotation-position-1 hide-mobile">
        Jump down the rabbit hole with me and lets get started on a new project
        together.
        <br />
        Contact me through any of the following.
        <br />
        <br />
        I’ve designed for the following companies. However, when I’m not pixel
        pushing, you
        <br />
        can catch me working on web3 stealth startups or personal projects.
      </span>

      <div className="portfolio-section">
        {experiences.map((company) => (
          <div
            key={company.key}
            onClick={() => { 
              handleExperience(company.key); 
              setActive(true); 
              if (company.key === 'MD') {
                navigate("/mongodb")
              } else {
                window.open(company.link, '_blank');
              }
            }}
            className="box mongodb-position"
          >
            <div className="box-wrapper">
              <div className="image-box">
                <img
                  src={`images/black portfolio images/${company.image}`}
                  alt={company.company}
                  className="mongodb-image image image-hover"
                />
                <img
                  src={`images/white portfolio images/${company.image}`}
                  alt={company.company}
                  className=" image"
                />
              </div>
              <span className="portfolio-title hide-mobile">
                {company.company}
              </span>
              <span className="portfolio-position hide-mobile">
                {company.position}
              </span>
              {company.render && company.render()}
            </div>
          </div>
        ))}
      </div>
      <span class="Quotation quotation-position-2 hide-mobile">
        Curious about my work? Fall into the
        <button class="Black-button black-button-sizing" onClick={() =>scrollTo("contact")}>
        <div class="button-content">
            Rabbit Hole <img src={"/images/arrow.svg"} width={14} height={14}/>
          </div>
        </button>
      </span>
      {active && (
        <div className="experience-description hide-desktop">
          <span class="experience-company">
            {data[experience].company}
            <span className="experience-dash">
              // {data[experience].position}
            </span>
          </span>
          <hr />
          <p className="experience-duty">{data[experience].description}</p>
          <hr />
        </div>
      )}
    </section>
  );
}
