import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../../components/navbar/index';
import PaperCard from '../../components/papercard/index'
import MainCarousel from '../../components/carousel/index';
import MissionVision from '../../components/mission_vision/index'
import Marquee from '../../components/marquee/index'
import Footer from '../../components/footer/index'
import { Divider, Tabs, Tab, Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types'
import news from '../../json/news.json';
import events from '../../json/events.json';
import notices from '../../json/notices.json'
import TwitterContainer from '../../components/twittertimeline/index'
import './style.css'
import carouselData from '../../json/homeCarousel.json'

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other} was some percentage of the parent
    >
      {value === index && (
	<>
	  {children}
	</>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default class Home extends React.Component{
  constructor() {
    super()
    this.state = {
      value: 0
    }
  }

  handleChange = (event, newValue) => {
    this.setState({value: newValue})
  }


  enable_slide_control=()=>{
    document.getElementsByClassName('carousel-root')[0].style.zIndex='auto';
  }

  a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }

  render(){
    const noticeData = notices.data
    return(
      <div className="page-container">

	<Navbar />
	<div onMouseOver={this.enable_slide_control} className="only_on_desktop customeflex">

	  <MissionVision />
	  <MainCarousel images={carouselData.data}/>
	  <Marquee/>
	  <br/>
	  <br/>
	</div>
	{
	  /*
	<div className="only_on_desktop customeflex" id="info">
	  <PaperCard title="News" items={news.data}/>
	  <PaperCard title="Events" items={events.data}/>
	  <PaperCard title="Notice" items={noticeData.slice(0, Math.min(5, noticeData.length))}/>
	</div>
	*/
	}

	<div onMouseOver={this.enable_slide_control} className="only_on_mobile customeflex">
	  <MainCarousel images={carouselData.data}/>
	  <MissionVision />
	  <Marquee/>

	  {/*
	  <div className="only_on_mobile customeflex" id="info_mob">
	    <PaperCard title="News" items={news.data}/>
	    <PaperCard title="Events" items={events.data}/>
	    <PaperCard title="Notice" items={noticeData.slice(0, Math.min(5, noticeData.length))}/>
	  </div>
	  */
	  }
	</div>

	<div className="row">
	  <div className="tabbedPane">
	    <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
	      <Tab label="News" {...this.a11yProps(0)} />
	      <Tab label="Events" {...this.a11yProps(1)} />
	      <Tab label="Notices" {...this.a11yProps(2)} />
	    </Tabs>
	    <TabPanel value={this.state.value} index={0}>
	      <PaperCard title="News" items={news.data}/>
	    </TabPanel>
	    <TabPanel value={this.state.value} index={1}>
	      <PaperCard title="Events" items={news.data}/>
	    </TabPanel>
	    <TabPanel value={this.state.value} index={2}>
	      <PaperCard title="Notices" items={news.data}/>
	    </TabPanel>
	  </div>
	  <div className="twittertimeline">
	    <TwitterContainer src="https://twitter.com/IIITTrichy" width="576" height="680"/>
	  </div>
	</div>
	<Footer/>
      </div>

    );
  }
}
