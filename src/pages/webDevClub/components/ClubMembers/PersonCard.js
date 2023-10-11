import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { MembersData } from "./PersonData";

function PersonCard() {
  return (
    <div className="webdev__card_container-main">
      {MembersData.map((member) => (
        <section className="webdev__card_container">
          <div className="webdev__card_profile">
            <img className="webdev__card_image" src={member.image} />
            <h4 className="webdev__card_name"> {member.name} </h4>
            <h6 className="webdev__card_work"> {member.role} </h6>
            <p className="webdev__card_text"> {member.about} </p>
            <div className="webdev__card_links-container">
              <div className="webdev__card_links">
                <a className="webdev__card_twitter" href={member.email}>
                  <EmailIcon style={{ color: "#fff" }} />
                </a>
                <a className="webdev__card_linkedin" href={member.linkdin}>
                  <LinkedInIcon style={{ color: "#fff" }} />
                </a>
                <a className="webdev__card_git" href={member.github}>
                  <GitHubIcon style={{ color: "#fff" }} />
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
export default PersonCard;
