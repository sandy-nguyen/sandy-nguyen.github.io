import React, { Component }  from 'react';

import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className='portfolio' id="portfolio">
      <span class="Title title-position">
        TRUSTED<br />
        BY MANY<span class="Dashes">//</span>
      </span>

      <div class="Red-highlighting red-highlight-position">
        I believe good design is where art, community, and technology fuse to create magic
      </div>

      <span class="Quotation quotation-position-1">
        Jump down the rabbit hole with me and lets get started on a new project together.<br />
        Contact me through any of the following.<br />
        <br />
        I’ve designed for the following companies. However, when I’m not pixel pushing, you<br />
        can catch me working on web3 stealth startups or personal projects.
      </span>

      <div className="portfolio-section">
        <div className="left-pad"></div>

        <div className="box mongodb-position">
          <div className="image-box">
            <img src="images/blackPortfolioImages/mongodb-icon.PNG" alt="Mongodb" className="mongodb-image image image-hover"/>
            <img src="images/whitePortfolioImages/mongodb-icon.PNG" alt="Mongodb" className="mongodb-image image"/>
          </div>
          <span className="portfolio-title">
            MONGODB
          </span>
          <span className="portfolio-position">
            INTERACTION DESIGNER
          </span>
          <span className="portfolio-description">
            DS lead of the navigation<br/>
            redesign. Building and<br/>
            maintaining the LG DS.
          </span>
        </div>

        <div className="box double-jump-position">
          <div className="image-box">
            <img src="images/blackPortfolioImages/double-jump-icon.PNG" alt="Double Jump" className="double-jump-image image image-hover"/>
            <img src="images/whitePortfolioImages/double-jump-icon.PNG" alt="Double Jump" className="double-jump-image image"/>
          </div>
          <span className="portfolio-title">
            DOUBLE JUMP
          </span>
          <span className="portfolio-position">
            PRODUCT DESIGNER
          </span>
          <span className="portfolio-description">
            Spearheaded the design of<br/>
            the responsive MVP<br/>
            website + lite pages.
          </span>
        </div>

        <div className="box blockpoly-position">
          <div className="image-box">
            <img src="images/blackPortfolioImages/blockpoly-icon.PNG" alt="Blockpoly" className="image blockpoly-image image-hover"/>
            <img src="images/whitePortfolioImages/blockpoly-icon.PNG" alt="Blockpoly" className="image blockpoly-image"/>
          </div>
          <span className="portfolio-title">
            BLOCKPOLY
          </span>
          <span className="portfolio-position">
            FOUNDING DESIGNER
          </span>
          <span className="portfolio-description">
            Designed an MVP metaverse<br/>
            loan marketplace for land<br/>
            NFTs.
          </span>
        </div>

        <div className="box mcafee-position">
          <div className="image-box">
            <img src="images/blackPortfolioImages/mcafee-icon.PNG" alt="Mcafee" className="mcafee-image image image-hover"/>
            <img src="images/whitePortfolioImages/mcafee-icon.PNG" alt="Mcafee" className="mcafee-image image"/>
          </div>
          <span className="portfolio-title">
            MCAFEE
          </span>
          <span className="portfolio-position">
            PRODUCT DESIGNER
          </span>
          <span className="portfolio-description">
            Created a guided post-<br/>
            purchase download<br/>
            experience.
          </span>
        </div>

        <div className="box go-invo-position">
          <div className="image-box">
            <img src="images/blackPortfolioImages/goinvo-icon.PNG" alt="Go Invo" className="goinvo-image image image-hover"/>
            <img src="images/whitePortfolioImages/goinvo-icon.PNG" alt="Go Invo" className="goinvo-image image"/>
          </div>
          <span className="portfolio-title">
            GOINVO
          </span>
          <span className="portfolio-position">
            UX DESIGNER
          </span>
          <span className="portfolio-description">
            Built a patient timeline<br/>
            feature + ASD task app.
          </span>
        </div>

        <div className="box aeromates-position">
          <div className="image-box">
            <img src="images/blackPortfolioImages/aeromates-icon.PNG" alt="Aeromates" className="aeromates-image image image-hover"/>
            <img src="images/whitePortfolioImages/aeromates-icon.PNG" alt="Aeromates" className="aeromates-image image"/>
          </div>
          <span className="portfolio-title">
            AEROMATES
          </span>
          <span className="portfolio-position">
            UX/UI DESIGNER
          </span>
          <span className="portfolio-description">
            Designed the iOS and web<br/>
            MVP of the aviation<br/>
            marketplace.
          </span>
        </div>

        <div className="box haus-of-golf-position">
          <div className="image-box">
            <img src="images/blackPortfolioImages/haus-of-golf-icon.PNG" alt="Haus of Golf" className="haus-of-golf-image image image-hover"/>
            <img src="images/whitePortfolioImages/haus-of-golf-icon.PNG" alt="Haus of Golf" className="haus-of-golf-image image"/>
          </div>
          <span className="portfolio-title">
            HAUS OF GOLF
          </span>
          <span className="portfolio-position">
            GRAPHIC DESIGNER
          </span>
          <span className="portfolio-description">
            Conceptualized brand<br/>
            identity through style<br/>
            guides and logo design.
          </span>
        </div>

        <div className="box vrillar-position">
          <div className="image-box">
            <img src="images/blackPortfolioImages/vrillar-icon.PNG" alt="Vrillar" className="vrillar-image image image-hover"/>
            <img src="images/whitePortfolioImages/vrillar-icon.PNG" alt="Vrillar" className="vrillar-image image"/>
          </div>
          <span className="portfolio-title">
            VRILLAR
          </span>
          <span className="portfolio-position">
            UX DESIGNER
          </span>
          <span className="portfolio-description">
            Designed the user<br/>
            interface for an NFT<br/>
            marketplace.
          </span>
        </div>

      <span class="Quotation quotation-position-2">
        Curious about my work? Fall into the
        <a class="Black-button black-button-sizing" href="#contact">
          Rabit Hole ↓
        </a>
      </span>
      </div>
    </div>
  )
}
