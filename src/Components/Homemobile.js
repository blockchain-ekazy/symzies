import "./Home.css";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";
import Img21 from "../Images/21.png";
import Img22 from "../Images/22.png";
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
import Img25 from "../Images/Team1.png";
import Img26 from "../Images/Team2.png";
import Img27 from "../Images/Team3.png";
import cross from "../Images/cross.png";
import gallery from "../Images/gallery.png";

export default function Homemobile() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1,
    speed: 2000,
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
  const propertiesText = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    draggable: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    cssEase: "linear",
    // prevArrow: <i className="fa fa-long-arrow-left pink"></i>,
    // nextArrow: "<i className='fa fa-long-arrow-right pink'></i>",
  };
  return (
    <div>
      <div className="container-fluid bluebg mbl">
        <nav class="navbar px-0  navbar-expand-xl navbar-dark">
          <div class="container-fluid">
            <img className="logo" src={Img21}></img>
            <a className="dis1 text-white" href="#" target="_blank">
              <i class="fa-brands fa-discord px-1"></i>
              <span className="lin px-1">|</span> Join Discord
            </a>
            <button class="navbar-toggler" id="toggler">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse pl-5 bluebg" id="mob-navbar">
              <img src={cross} className="cross" />
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#HomeM">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#AboutM">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#RdM">
                    Road Map
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#TeamM">
                    Team
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div id="HomeM" className="container-fluid bluebg text-center">
        <div className="row">
          <div className="col-12">
            <Fade left>
              <h1 className="wel pt-5">
                Welcome to Symzies <br />
                NFT
              </h1>
              <p className="yellow my-4">
                Symzies is an NFT collection that symbolizes a better narration
                and increased awareness for neurodivergent individuals.
              </p>

              <a
                className="btn2 text-white position-relative z-index-100"
                href="#"
              >
                Coming Soon
              </a>
            </Fade>
          </div>
        </div>
      </div>

      <div className="bluebg">
        <Fade up>
          <img src={Img22} />
        </Fade>
        <Slider className="bg-light" {...settings}>
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

      <a id="AboutM"></a>
      <div className="container-fluid">
        <div className="row  align-items-center">
          <div className="col-12 overflow dotts1">
            <img className="p-5 d-block mx-auto rotate" src={Img11} />
          </div>
          <div className="col-md-7 text-center">
            <Fade right>
              <h1 className="wel1 animate__animated animate__fadeInLeft">
                About symzies
              </h1>
              <p className="green p-1">
                Neurodivergence is the term for when someone's brain processes,
                learns, and/or behaves differently from what is considered
                "typical."<br></br>
                <br></br>Symzies is a collection of 9744 NFT characters living
                on the Etherium (ETH) blockchain as digital collectibles. A
                Symzie symbolizes a better narration and increased awareness for
                neurodivergent individuals, such as people with Autism, ADHD and
                Dyslexia to name a few.<br></br>
                <br></br> Each Symzie is algorithmically generated using over
                150 unique attributes, creating highly original digital
                companions. The combination of their atypical look with their
                cheerful demeanor seeks to embrace and champion the differences
                between individuals.
              </p>
              <a className="dis1 dis-bg mx-auto text-white" href="#">
                <i class="fa-brands fa-discord px-2"></i>{" "}
                <span class="lin px-1">|</span>Join Discord
              </a>
            </Fade>
          </div>
        </div>
      </div>

      <a id="RdM"></a>
      <div className="container-fluid bluebg mt-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="welll1 text-center ">ROADMAP</h1>
            <p className="yellow">
              Our goal is to have a positive real world impact on neurodivergent
              individuals by acting as a fun and loving digital insurance
              platform subsidizing the access to diagnosis, medication and/or
              therapy.
            </p>
          </div>
        </div>
      </div>
      <div className="roadmapM bluebg pb-5">
        <Slider {...propertiesText}>
          <div className="rd1 px-5">
            <img src={Img13} className="d-block ml-auto w-25" />
            <h1 className="heading yellow pt-3">Phase 1: Pre-Mint </h1>
            <ul className="mt-3 text-white">
              <li>Launch Discord and Website</li>
              <li className="mt-3">
                $150,000 budget efficiently distributed for community gorwth
              </li>
              <li className="mt-3">
                community members rewarded with ETH, NFTS, Whitelisting benefits
                and special roles within the community{" "}
              </li>
              <li className="mt-3">
                PLaunch collection to whitelist members, then to public
              </li>
            </ul>
          </div>
          <div className="rd2 px-5">
            <img src={Img15} className="d-block ml-auto" />
            <h1 className="heading yellow pt-3">Phase 2: Post Sell out </h1>
            <ul className="text-white mt-4">
              <li>Allow major project holders a say on future decisions.</li>
              <li className="mt-3">
                Holders rewarded with exlusive airdrops such as rare Symzies and
                ETH
              </li>
              <li className="mt-3"> Deploy online merch store</li>
              <li className="mt-3">
                Partner up with charities and entities involved in the
                neurodivergent field
              </li>
            </ul>
          </div>
          <div className="rd3 px-5">
            <img src={Img12} className="d-block ml-auto w-25" />
            <h1 className="heading yellow pt-3">
              Phase 3: Subsidize med costs
            </h1>
            <ul className="text-white mt-3">
              <li>
                Donate a portion of the profit to charities focusing on
                neurodivergence
              </li>
              <li className="mt-3">
                Create the infrastructure to subsidize treatment and diagnosis
              </li>
              <li className="mt-3">
                Set up neurodivergence online inssurance fund
              </li>
            </ul>
          </div>
        </Slider>
      </div>
      <div className="container-fluid">
        <div className="container py-5 dotts1">
          <div className="row">
            <div className="col-md-12 text-center">
              <Fade right>
                <h1 className="wel1 animate__animated animate__fadeInLeft">
                  Join Us
                </h1>
                <p className="green">
                  This project goes beyond just offering an avatar, instead it
                  will have a real life application by offering Symzie holders
                  subsidized access to diagnosis and treatment. We want to take
                  advantage of the digital change created by NFTs to have a real
                  life impact on social change.
                </p>
                <br />
                <a href="#" className="dis1 mx-auto dis-bg">
                  <i class="fa-brands fa-discord px-2"></i> Join Discord
                </a>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <img src={gallery} className="w-100 p-3" />

      <a id="TeamM"></a>
      <div className="container-fluid px-0 text-white DDD mt-5 pinkbg text-center">
        <div className=" ">
          <div className="row">
            <div className="col-md-12">
              <h1 className="wel1 py-5 text-white">TEAM</h1>
            </div>
          </div>
          <Slider {...propertiesText} className="pb-5 mb-5 whitearrows">
            <div>
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
            <div>
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
            <div>
              <img className="team" src={Img27} />
              <p className="heading pt-3 text-dark"> @talentlessdegenerate</p>
              <p>TECHNO KING</p>
              <hr className="tew" />
              <p>
                @talentlessdegenerate is our senior programmer in charge of
                overseeing all tech aspects, from creating and deploying smart
                contracts down to developping our website.
              </p>
            </div>
          </Slider>
        </div>
      </div>
      <div className="divider"></div>

      <div className="container FFF pt-5 pb-2 text-center">
        <img className="logo" src={Img21} />
        <br />
        <br />
        <a class="linko px-3" href="#About">
          About
        </a>
        <a class="linko px-3" href="#Rd">
          Road Map
        </a>
        <a class="linko px-3" href="#Team">
          Team
        </a>
        <br />
        <br />
        <i class="px-2 fa-brands fa-twitter sql"></i>
        <i class="px-2 fa-brands fa-instagram sql"></i>
        <i class="px-2 fa-brands fa-discord sql"></i>
        <br />
        <br />
        <p className="text-light text-center">
          © Copyright 2022 All rights reserved.
        </p>
      </div>
    </div>
  );
}
