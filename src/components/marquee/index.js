import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import "./style.css";
import Loader from "../sub_component_loader/index";

export default class Marquee extends Component {
  constructor(props) {
    super(props);
    let announcementsSrc = "announcements.json";
    if (this.props && this.props.src) announcementsSrc = this.props.src;
    this.state = {
      run: "",
      announcementsSrc,
      announcements: undefined,
    };
  }

  componentDidMount() {
    import(`../../json/${this.state.announcementsSrc}`).then((d) =>
      this.setState({ announcements: d }),
    );
  }

  render() {
    const bull = <span className="bullet">•</span>;

    return (
      <Card id="v_marquee" variant="outlined">
        <CardContent
          style={{
            height: "100%",
          }}
        >
          <div className="newshead"> Announcements</div>
          <marquee direction="up" height="100%" id="my_marquee">
            <ul>
              {this.state.announcements ? (
                this.state.announcements.data.map((item, idx) => (
                  <>
                    <li
                      style={{ marginBottom: "5px", marginTop: "5px" }}
                      onMouseOver={() =>
                        document.getElementById("my_marquee").stop()
                      }
                      onMouseLeave={() =>
                        document.getElementById("my_marquee").start()
                      }
                    >
                      <Link href={item.link}>{item.text}</Link>
                    </li>
                    {idx !== this.state.announcements.data.length - 1 && (
                      <Divider />
                    )}
                  </>
                ))
              ) : (
                <Loader />
              )}
            </ul>
          </marquee>
        </CardContent>
      </Card>
    );
  }
}
