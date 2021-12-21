import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../../components/navbar/index";
import PaperCard from "../../components/papercard/index";
import MainCarousel from "../../components/carousel/index";
import MissionVision from "../../components/mission_vision/index";
import Marquee from "../../components/marquee/index";
import Footer from "../../components/footer/index";
import {
  Divider,
  Paper,
  Card,
  Tabs,
  Tab,
  Box,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import "./style.css";
import carouselData from "../../json/homeCarousel.json";
import Loader from "../../components/sub_component_loader/index";
import { Timeline } from "react-twitter-widgets";
import Modal from "../../components/modal/index";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      was
      some
      percentage
      of
      the
      parent
    >
      {value === index && <>{children}</>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      noticeData: undefined,
      eventsData: undefined,
      newsData: undefined,
      achievementsData: undefined,
    };
  }

  componentDidMount() {
    import("../../json/achievements.json").then((data) => {
      this.setState({ achievementsData: data.data });
    });
    import("../../json/news.json").then((data) => {
      let d = data.data
      let older = d.filter(x => !x.isNew).sort((a, b) => new Date(b.date) - new Date(a.date))
      let newer = d.filter(x => x.isNew).sort((a, b) => new Date(b.date) - new Date(a.date))
      this.setState({ newsData: [...newer, ...older,] });
    });
    import("../../json/events.json").then((data) => {
      let d = data.data
      let older = d.filter(x => !x.isNew).sort((a, b) => new Date(b.date) - new Date(a.date))
      let newer = d.filter(x => x.isNew).sort((a, b) => new Date(b.date) - new Date(a.date))
      this.setState({ eventsData: [...newer, ...older] });
    });
    import("../../json/notices.json").then((data) => {
      let d = data.data
      let older = d.filter(x => !x.isNew).sort((a, b) => new Date(b.date) - new Date(a.date))
      let newer = d.filter(x => x.isNew).sort((a, b) => new Date(b.date) - new Date(a.date))
      this.setState({ noticeData: [...newer, ...older] });
    });
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  enable_slide_control = () => {
    document.getElementsByClassName("carousel-root")[0].style.zIndex = "auto";
  };

  a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  render() {
    return (
      <div className="page-container">
        <Navbar />
        <div className="container">
          <div onMouseOver={this.enable_slide_control} className="customeflex">
            <div className="mission">
              <MissionVision />
            </div>
            <div className="carousel">
              <MainCarousel images={carouselData.data} />
            </div>
            <div className="marquee" id="announcements_marquee">
              <Marquee />
            </div>
          </div>

          <div className="row">
            <Paper elevation={3} className="tabbedPane" id="news_event_notice">
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                aria-label="news events notices"
              >
                <Tab label="News" {...this.a11yProps(0)} className="tab" />
                <Tab label="Events" {...this.a11yProps(1)} className="tab" />
                <Tab label="Notices" {...this.a11yProps(2)} className="tab" />
              </Tabs>
              <TabPanel value={this.state.value} index={0}>
                {this.state.newsData ? (
                  <PaperCard
                    title="News"
                    items={this.state.newsData.slice(
                      0,
                      Math.min(5, this.state.newsData.length)
                    )}
                    linkToOlder="/news"
                  />
                ) : (
                    <Loader />
                  )}
              </TabPanel>
              <TabPanel value={this.state.value} index={1}>
                {this.state.eventsData ? (
                  <PaperCard
                    title="Events"
                    items={this.state.eventsData.slice(
                      0,
                      Math.min(5, this.state.eventsData.length)
                    )}
                    linkToOlder="/events"
                  />
                ) : (
                    <Loader />
                  )}
              </TabPanel>
              <TabPanel value={this.state.value} index={2}>
                {this.state.noticeData ? (
                  <PaperCard
                    title="Notices"
                    items={this.state.noticeData.slice(
                      0,
                      Math.min(5, this.state.noticeData.length)
                    )}
                    linkToOlder="/general"
                  />
                  
                ) : (
                    <Loader />
                  )}
              </TabPanel>
              
            </Paper>
            <Paper elevation={3} className="achievements">
              {this.state.achievementsData ? (
                <PaperCard
                  title="Achievements"
                  items={this.state.achievementsData.slice(
                    0,
                    Math.min(5, this.state.achievementsData.length)
                  )}
                  linkToOlder="/achievements"
                />
              ) : (
                  <Loader />
                )}
            </Paper>
            <Paper elevation={3} className="twittertimeline" id="twitter_timeline">
              <Timeline
                dataSource={{
                  sourceType: "profile",
                  screenName: "iiittrichy",
                }}
                options={{
                  width: "576",
                  height: "680",
                }}
                // renderError={(err) => {
                  // return (
                    // <>
                      //  <h2 className="adblock">
                        // /Blocked by Adblocker or Social Media Plugin
                      // </h2>
                      // <Modal />
                    // </>
                  // );
                // }}
              />
            </Paper>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
