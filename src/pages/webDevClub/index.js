import React, { useEffect, useState, useRef } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstaIcon from "@material-ui/icons/Instagram";
import Navbar from "../../components/navbar/index";
import "./styles.css";
import PersonCard from "./components/ClubMembers/PersonCard";
import AluminiCard from "./components/Alumini/AluminiCard";
import Projects from "./components/Projects/Projects";
import { AluminiData } from "./components/Alumini/AluminiData";
import { ProjectData } from "./components/Projects/projectsData";

function WebDevClub() {
  const bgVideo = useRef(null);
  useEffect(() => {
    bgVideo.current.play();
  });
  return (
    <div>
      <Navbar />
      <div className="webdev__page" style={{ width: "100%", height: "100%" }}>
        <section className="webdev__page_banner">
          <div className="bg-video">
            <video
              ref={bgVideo}
              className="bg-video-content"
              muted="true"
              autoPlay
              playsinline
              loop="true"
            >
              <source
                id="vid"
                src={require("./media/coding.mp4")}
                type="video/mp4"
              />
              Your browser is not supported
            </video>
          </div>
          <div className="webdev__banner_inner">
            <div className="logo">
              <span className="webdev__banner_logo-icon">&lt;/&gt;</span>
            </div>
            <h2 className="webdev__banner_title">THIS IS WEB DEV IIITT</h2>
            <hr className="webdev__banner_hr" />
            <p className="webdev__banner_description">
              Fear leads to self-doubt which is the worst enemy of creativity.
            </p>
          </div>
        </section>
        <section className="about_section">
          <div className="utility_center_text">
            <h2 className="about_section__heading">About the club</h2>
            <div className="about_section__row">
              <div className="about_section__col_one">
                <p className="about_section__paragraph">
                  <div className="about_section_tagline">
                    <h1 className="about_section_tagline-text about_section_tagline-think-text">
                      Think
                    </h1>
                    <h1 className="about_section_tagline-text about_section_tagline-design-text">
                      design
                    </h1>
                    <h1 className="about_section_tagline-text about_section_tagline-develop-text">
                      develop
                    </h1>
                  </div>
                  What is color contrast? Contrasting colors are colors that
                  differ from one another. Levels of contrast vary from high to
                  low, depending on their ... Missing: 353849 ‎| Must include.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
              <div className="about_section__col_two">
                <div className="composition">
                  <img
                    src={require("./media/develop.jpg")}
                    alt="develop"
                    className="composition_photo composition_photo_p1"
                  />
                  <img
                    src={require("./media/design.jpg")}
                    alt="design"
                    className="composition_photo composition_photo_p2"
                  />
                  <img
                    src={require("./media/think.jpg")}
                    alt="think"
                    className="composition_photo composition_photo_p3"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="webdev__card">
          <div className="webdev__card_unfold">
            <div className="webdev__card_header">
              <h2 className="webdev__card_header-title">CLUB MEMBERS</h2>
              <hr className="webdev__card_header-hr" />
              <p className="webdev__card_header-description">
                Not spiders, but the passionate web developers are found here.
              </p>
            </div>
            <div>
              <PersonCard />
            </div>
            <div className="webdev__card_header">
              <h2 className="webdev__card_header-title">OUR ALUMINI'S</h2>
              <hr className="webdev__card_header-hr" />
              <p className="webdev__card_header-description">
                Our gems who made the institute progress exponentially.
              </p>
            </div>
            <div className="alumini_card__container">
              {AluminiData.map((alumini) => (
                <AluminiCard
                  number={alumini.key}
                  name={alumini.name}
                  image={alumini.image}
                  about={alumini.about}
                  skills={alumini.skills}
                  achievements={alumini.achievements}
                  website={alumini.website}
                  github={alumini.github}
                  linkdin={alumini.linkdin}
                />
              ))}
            </div>
          </div>
        </div>
        <section className="project__section">
          <div className="utility_center_text">
            <h2 className="about_section__heading">Projects</h2>
          </div>
          <div className="project__container">
            {ProjectData.map((project, index) => (
              <Projects
                number={project.key}
                name={project.name}
                image={project.image}
                status={project.status}
                description={project.description}
                tech={project.tech}
                contributors={project.contributors}
              />
            ))}
          </div>
        </section>
        <section className="webdev__footer">
          <h2 className="webdev__footer_title">Get in touch</h2>
          <hr className="webdev__footer_hr" />
          <div className="inner">
            <form method="post" action="#">
              <div className="fields">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" autoComplete="off" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows="4" />
                </div>
              </div>
              <ul className="actions">
                <li>
                  <input type="submit" value="Send Message" />
                </li>
              </ul>
            </form>
            <ul className="contact">
              <li className="home">
                {" "}
                <div className="contact-icon">
                  <HomeIcon className="icons" />
                </div>
                Home address
              </li>
              <li>
                <div className="contact-icon">
                  {" "}
                  <CallIcon className="icons" />
                </div>
                (000) 000-0000
              </li>
              <li>
                <div className="contact-icon">
                  <EmailIcon className="icons" />
                </div>
                <a className="anchor" href="#">
                  information@untitled.tld
                </a>
              </li>
              <li>
                <div className="contact-icon">
                  <TwitterIcon className="icons" />
                </div>
                <a className="anchor" href="#">
                  twitter.com/untitled-tld
                </a>
              </li>
              <li>
                <div className="contact-icon">
                  <FacebookIcon className="icons" />
                </div>
                <a className="anchor" href="#">
                  facebook.com/untitled-tld
                </a>
              </li>
              <li>
                <div className="contact-icon">
                  <InstaIcon className="icons" />
                </div>
                <a className="anchor" href="#">
                  instagram.com/untitled-tld
                </a>
              </li>
            </ul>
          </div>
          <hr className="webdev__footer_hr hr_two" />
          <ul className="copyright">
            <li>&lt;/&gt; Web Dev IIITT</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
export default WebDevClub;
