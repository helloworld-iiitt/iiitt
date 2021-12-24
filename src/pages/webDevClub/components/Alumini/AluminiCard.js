import React,{useState} from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from '@material-ui/icons/Language';

const AluminiCard = (props) => {

  const [projectDetail, setProjectDetail] = useState('false');
     const setHidden = () => {

      if (document.body.style.overflow !== "hidden") {
        setProjectDetail('true');
        document.body.style.overflow = "hidden";

      } else {
        document.body.style.overflow = "scroll";
        setProjectDetail(false);
      }
    };

    return (
      <div>
      <div className="alumini_card" onClick={() =>  setHidden()}>
              <div className="alumini_card_top">
                 <img src={props.image} alt="profile" className="alumini_profile"></img>
              </div>
              <div className="alumini_card_bottomp">
                <h3 className="alumini_name"> { props.name } </h3>
              </div>
         </div>
         {projectDetail === 'true' && (props.number == '1' || props.number == '2' || props.number == '3' || props.number == '4' || props.number == '5')?(
          <section className="project_detail_section">
          <div className="project__detail">
                <button className="close__button" onClick={() =>setHidden()}><img className="closed_img" src={require("../../media/closed.svg")}/></button>
                <div className="project_detail__page">
                  <img className="project_detail__page_image" src={props.image} alt="image"></img>
                  <div className="project_detail__page_content" >
                     <h1 className="project_detail__page_name alumini_utility" > {props.name} </h1>
                     <p className="project_detail__page_description" > {props.about} </p>
                     <p className="project_detail__page_tech" ><span className="utility__desgin utility__color_tech">skills</span>&nbsp;:&nbsp; <p className="contri">{props.skills} </p></p>
                     <p className="project_detail__page_contibutors" ><span className="utility__desgin utility__color_con">timeline</span>&nbsp; : &nbsp; <p className="contri">{props.achievements}</p> </p>
                     <div className="alumini_accounts">
                       <a className="alumini_website alumini_icons"  href= { props.website} ><LanguageIcon style={{color:"#f05945",fontSize:"40px"}} /></a>
                       <a className="alumini_icons" href= { props.linkdin} ><LinkedInIcon style={{color:"#0077b5",fontSize:"40px"}} /></a>
                       <a className="alumini_icons" href= { props.github } ><GitHubIcon style={{color:"black",fontSize:"35px"}} /></a>
                    </div>
                  </div>                         
                </div>
            </div> 
          </section>
        ):null}
        </div>
    )
}

export default AluminiCard;