import React from "react";
import moment from "moment";
import packageJson from "../../../package.json";
import preval from "preval.macro";
import "./versionStyle.css";
const buildTimestamp = preval`module.exports = new Date().getTime();`;

class Component extends React.Component {
  getDateString = () => {
    const lastUpdateMoment = moment.unix(buildTimestamp / 1000);
    const formattedDate = lastUpdateMoment.format("DD/MMMM/YYYY HH:mm:ss");

    return formattedDate;
  };

  render() {
    return (
      <div className="updated"> Last Updated : {this.getDateString()}</div>
    );
  }
}

Component.propTypes = {};

Component.defaultProps = {};

export default Component;
