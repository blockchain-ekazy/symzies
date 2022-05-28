import "./Home.css";

import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Fade from "react-reveal/Fade";

import "animate.css";
import React, { useState } from "react";

import Img1 from "../Images/1.png";
import Img2 from "../Images/2.png";
import Img3 from "../Images/3.png";
import Img4 from "../Images/4.png";
import Img5 from "../Images/5.png";
import Img6 from "../Images/6.png";
import Img7 from "../Images/7.png";
import Img8 from "../Images/8.png";
import Img9 from "../Images/9.png";
import Img10 from "../Images/10.png";
import Img11 from "../Images/11.png";
import Img12 from "../Images/12.png";
import Img13 from "../Images/13.png";
import Img15 from "../Images/15.png";
import Img21 from "../Images/21.png";
import Img25 from "../Images/Team1.png";
import Img26 from "../Images/Team2.png";
import Img27 from "../Images/Team3.png";
import "react-slideshow-image/dist/styles.css";
export default function Home() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1,
    speed: 3000,
    draggable: false,
    slidesToShow: 6,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="MAIN">
      <div className="container-fluid bluebg">
        <nav class="navbar px-0 container navbar-expand navbar-dark">
          <img className="logo pt-2" src={Img21} />
          <a
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mob-navbar"
            aria-label="Toggle"
            aria-expanded="false"
          >
            <span class="navbar-toggler-icon"></span>
          </a>
          <div class="navbar-collapse collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item px-3">
                <a class="nav-link" href="#About">
                  About
                </a>
              </li>
              <li class="nav-item px-3">
                <a class="nav-link" href="#Rd">
                  Road Map
                </a>
              </li>
              <li class="nav-item px-3">
                <a class="nav-link" href="#Team">
                  Team
                </a>
              </li>
            </ul>

            <a className="dis1" href="#" target="_blank">
              <i class="fa-brands fa-discord"></i>
              <span className="tit px-1">|</span> Join Discord
            </a>
          </div>
        </nav>
      </div>

      <div className="container-fluid bluebg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-5 p-0">
              <Fade left>
                <h1 className="wel">
                  Welcome<br></br>to Symzies<br></br>NFT
                </h1>
                <p className="yellow m-0">
                  Symzies is an NFT collection that symbolizes a better
                  narration and increased awareness for neurodivergent
                  individuals.
                </p>

                <button className="btn2 mt-3 ">COMING SOON</button>
              </Fade>
            </div>
            <div className="col-lg-8 col-md-7 p-0">
              <Fade bottom>
                <img className="w-100  abvas " src={Img1} />
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Slider {...settings}>
          <div>
            <img className="w-100" src={Img4} />
          </div>
          <div>
            <img className="w-100" src={Img5} />
          </div>
          <div>
            <img className="w-100" src={Img3} />
          </div>
          <div>
            <img className="w-100" src={Img6} />
          </div>
          <div>
            <img className="w-100" src={Img7} />
          </div>
          <div>
            <img className="w-100" src={Img8} />
          </div>
          <div>
            <img className="w-100" src={Img9} />
          </div>
          <div>
            <img className="w-100" src={Img2} />
          </div>
          <div>
            <img className="w-100" src={Img10} />
          </div>
        </Slider>
      </div>
      <div className="top"></div>
      <a id="About"></a>
      <div className="container-fluid dotts py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img className=" w-100 rotate " src={Img11} />
            </div>
            <div className="col-md-6">
              <Fade right>
                <h1 className="wel1 animate__animated animate__fadeInLeft">
                  About symzies
                </h1>
                <p className="green pr-lg-5 mr-lg-5">
                  Neurodivergence is the term for when someone's brain
                  processes, learns, and/or behaves differently from what is
                  considered "typical." <br />
                  <br />
                  Symzies is a collection of 9744 NFT characters living on the
                  Etherium (ETH) blockchain as digital collectibles. A Symzie
                  symbolizes a better narration and increased awareness for
                  neurodivergent individuals, such as people with Autism, ADHD
                  and Dyslexia to name a few.
                  <br />
                  <br />
                  Each Symzie is algorithmically generated using over 150 unique
                  attributes, creating highly original digital companions. The
                  combination of their atypical look with their cheerful
                  demeanor seeks to embrace and champion the differences between
                  individuals.
                </p>
                <a className="dis1 dis-bg text-white" href="#" target="_blank">
                  <i class="fa-brands fa-discord px-1"></i>
                  <span className="lin px-1">|</span> Join Discord
                </a>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <a id="Rd"></a>
      <div className="container-fluid bluebg roadmap">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-5">
              <Fade left>
                <h1 className="welll1 pt-5 mt-5">ROADMAP</h1>
                <p className="yellow pr-5">
                  Our goal is to have a positive real world impact on
                  neurodivergent individuals by acting as a fun and loving
                  digital insurance platform subsidizing the access to
                  diagnosis, medication and/or therapy.
                </p>
              </Fade>
            </div>
            <div className="col-md-4 p-0">
              <Fade right>
                <img className="ml-5 mb-5" src={Img12}></img>
                <h1 className="heading yellow">Phase 2: Post Sell out</h1>
                <ul className="text-white mt-4">
                  <li>
                    Allow major project holders a say on future decisions.
                  </li>
                  <li className="mt-3">
                    Holders rewarded with exlusive airdrops such as rare Symzies
                    and ETH
                  </li>
                  <li className="mt-3"> Deploy online merch store</li>
                  <li className="mt-3">
                    Partner up with charities and entities involved in the
                    neurodivergent field
                  </li>
                </ul>
              </Fade>
            </div>
            <div className="col-md-3 text-left bnl pt-5">
              <img className="pt-5" src={Img13} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pt-1 pb-5">
            <div className="col-md-4 text-left">
              <Fade left>
                <h1 className="heading yellow">Phase 1: Pre-Mint </h1>
                <ul className="mt-3 text-white">
                  <li>Launch Discord and Website</li>
                  <li className="mt-3">
                    $150,000 budget efficiently distributed for community gorwth
                  </li>
                  <li className="mt-3">
                    community members rewarded with ETH, NFTS, Whitelisting
                    benefits and special roles within the community{" "}
                  </li>
                  <li className="mt-3">
                    PLaunch collection to whitelist members, then to public
                  </li>
                </ul>
              </Fade>
            </div>
            <div className="col-md-5">
              <img className="mt-5 pt-5 pl-5" src={Img15} />
            </div>
            <div className="col-md-3 text-left pt-5">
              <Fade right>
                <h1 className="heading yellow">Phase 3: Subsidize med costs</h1>
                <ul className="text-white mt-3">
                  <li>
                    Donate a portion of the profit to charities focusing on
                    neurodivergence
                  </li>
                  <li className="mt-3">
                    Create the infrastructure to subsidize treatment and
                    diagnosis
                  </li>
                  <li className="mt-3">
                    Set up neurodivergence online inssurance fund
                  </li>
                </ul>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid  p-0">
        <div className="row ml-5 mr-0">
          <div className="col-md-4 px-0 spaced dotts1">
            <Fade right>
              <h1 className="wel1 animate__animated animate__fadeInLeft pt-3">
                Join Us
              </h1>
              <p className="green my-4">
                This project goes beyond just offering an avatar, instead it
                will have a real life application by offering Symzie holders
                subsidized access to diagnosis and treatment. Join us in taking
                advantage of the digital change created by NFTs to have a real
                life impact on social change.
              </p>
              <a className="dis1 dis-bg text-white" href="#" target="_blank">
                <i class="fa-brands fa-discord px-1"></i>
                <span className="lin px-1">|</span> Join Discord
              </a>
            </Fade>
          </div>
          <div className="col-md-8 CCC"></div>
        </div>
      </div>
      <a id="Team"></a>
      <div className="container-fluid DDD pinkbg">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <h1 className="wel1 text-white text-center">TEAM</h1>
            </div>
          </div>
          <div className="row py-5 text-center text-white">
            <div className="col-md-4">
              <img className="team" src={Img25} />
              <p className="heading pt-3 text-dark"> @h.debs</p>
              <p>CREATIVE GENIUS</p>
              <hr className="tew" />
              <p>
                @h.debs is in charge of all creative assets, from designing and
                creating the collection all the way down to designing elements
                for our website.
              </p>
            </div>
            <div className="col-md-4">
              <img className=" team" src={Img26} />
              <p className="heading pt-3 text-dark"> @maitre_momo</p>
              <p>MARKETING WIZARD</p>
              <hr className="tew" />
              <p>
                @maitre_momo is our marketing wizard in charge of setting up
                partnerships in the field all the way down to setting up our
                traction channels.
              </p>
            </div>
            <div className="col-md-4">
              <img className="tem" src={Img27} />
              <p className="heading pt-3 text-dark"> @talentlessdegenerate</p>
              <p>TECHNO KING</p>
              <hr className="tew" />
              <p>
                @talentlessdegenerate is our senior programmer in charge of
                overseeing all tech aspects, from creating and deploying smart
                contracts down to developping our website.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="container-fluid FFF">
        <div className="container FFF pb-4">
          <div className="row py-5 align-items-center">
            <div className="col-md-3">
              <img className="logo" src={Img21} />
            </div>
            <div className="col-md-6 text-center">
              <a class="linko px-3" href="#About">
                About
              </a>
              <a class="linko px-3" href="#Rd">
                Road Map
              </a>
              <a class="linko px-3" href="#Team">
                Team
              </a>
            </div>
            <div className="col-md-3 px-0 text-center">
              <i class="px-2 fa-brands fa-twitter sql"></i>
              <i class="px-2 fa-brands fa-instagram sql"></i>
              <i class="px-2 fa-brands fa-discord sql"></i>
            </div>
          </div>
          <p className="text-light text-center">
            © Copyright 2022 All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
