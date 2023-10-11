import React, { useState } from "react";
import "./style.css";

function Projects(props) {
  const [projectDetail, setProjectDetail] = useState("false");
  const setHidden = () => {
    if (document.body.style.overflow !== "hidden") {
      setProjectDetail("true");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
      setProjectDetail(false);
    }
  };
  const desc = props.description.slice(0, 64);
  const name = props.name.slice(0, 18);
  return (
    <div>
      <div className="project" onClick={() => setHidden()}>
        <img className="project_image" src={props.image} alt="project_image" />
        <h3 className="project__name">
          {name}
          ...
        </h3>
        <p
          className={
            props.status === "completed"
              ? "utility__color_status_completed project__status utility__desgin"
              : props.status === "pending"
              ? "utility__color_status_pending project__status utility__desgin"
              : "utility__color_status_working project__status utility__desgin"
          }
        >
          {props.status}
        </p>
        <p className="project__description">
          {desc}
          ...
        </p>
      </div>
      {projectDetail === "true" &&
      (props.number === "1" ||
        props.number === "2" ||
        props.number === "3" ||
        props.number === "4" ||
        props.number === "5" ||
        props.number === "6" ||
        props.number === "7" ||
        props.number === "8" ||
        props.number === "9" ||
        props.number === "10") ? (
        <section className="project_detail_section">
          <div className="project__detail">
            <button className="close__button" onClick={() => setHidden()}>
              <img
                className="closed_img"
                src={require("../../media/closed.svg")}
              />
            </button>
            <div className="project_detail__page">
              <img
                className="project_detail__page_image"
                src={props.image}
                alt="image"
              />
              <div className="project_detail__page_content">
                <h1 className="project_detail__page_name"> {props.name} </h1>
                <span
                  className={
                    props.status === "completed"
                      ? "utility__color_status_completed project_detail__page_status utility__desgin"
                      : props.status === "pending"
                      ? "utility__color_status_pending project_detail__page_status utility__desgin"
                      : "utility__color_status_working project_detail__page_status utility__desgin"
                  }
                >
                  {" "}
                  {props.status}{" "}
                </span>
                <p className="project_detail__page_description">
                  {" "}
                  {props.description}{" "}
                </p>
                <p className="project_detail__page_tech">
                  <span className="utility__desgin utility__color_tech">
                    Technologies
                  </span>
                  &nbsp;:&nbsp; <p className="contri">{props.tech}</p>{" "}
                </p>
                <p className="project_detail__page_contibutors">
                  <span className="utility__desgin utility__color_con">
                    Contributors
                  </span>
                  &nbsp;: &nbsp;
                  <p className="contri"> {props.contributors}</p>{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}

export default Projects;
