import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../../components/navbar/index';
import PaperCard from '../../components/papercard/index'
import MainCarousel from '../../components/carousel/index';
import MissionVision from '../../components/mission_vision/index'
import Marquee from '../../components/marquee/index'
import Footer from '../../components/footer/index'
import { Divider, Paper, Card, Tabs, Tab, Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types'
import TwitterContainer from '../../components/twittertimeline/index'
import './style.css'
import carouselData from '../../json/homeCarousel.json'
import Loader from '../../components/sub_component_loader/index'
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
      value: 0,
      noticeData: undefined,
      eventsData: undefined,
      newsData: undefined,
      achievementsData: undefined
    }
  }

  componentDidMount() {
    import('../../json/achievements.json')
      .then(data => {
	this.setState({achievementsData: data.data})
      })
    import('../../json/news.json')
      .then(data => {
	this.setState({newsData: data.data})
      })
    import('../../json/events.json')
      .then(data => {
	this.setState({eventsData: data.data})
      })
    import('../../json/notices.json')
      .then(data => {
	this.setState({noticeData: data.data})
      })
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

    return(
      <div className="page-container">

	<Navbar />
	<div className="container">
	  <div onMouseOver={this.enable_slide_control} className="customeflex">
	    <div className="mission">
	      <MissionVision />
	    </div>
	    <div className="carousel">
	      <MainCarousel images={carouselData.data}/>
	    </div>
	    <div className="marquee">
	      <Marquee/>
	    </div>
	  </div>

	  <div className="row">
	    <Paper elevation={3} className="tabbedPane">

	      <Tabs value={this.state.value} onChange={this.handleChange} aria-label="news events notices">
		<Tab label="News" {...this.a11yProps(0)} className="tab"/>
		<Tab label="Events" {...this.a11yProps(1)} className="tab"/>
		<Tab label="Notices" {...this.a11yProps(2)} className="tab"/>
	      </Tabs>
	      <TabPanel value={this.state.value} index={0}>
		{
		  this.state.newsData ?
		    <PaperCard title="News" items={this.state.newsData.slice(0, Math.min(5, this.state.newsData.length))}/>
		    :
		    <Loader />
		}
	      </TabPanel>
	      <TabPanel value={this.state.value} index={1}>
		{
		  this.state.eventsData ?
		    <PaperCard title="Events" items={this.state.eventsData.slice(0, Math.min(5, this.state.eventsData.length))}/>
		    :
			<Loader />
		}
	      </TabPanel>
	      <TabPanel value={this.state.value} index={2}>
		{
		  this.state.noticeData ? <PaperCard title="Notices" items={this.state.noticeData.slice(0, Math.min(5, this.state.noticeData.length))}/>
		  :
		  <Loader />
		}
	      </TabPanel>
	    </Paper>
	    <Paper elevation={3} className="achievements">
	      {
		this.state.achievementsData ?
		  <PaperCard title="Achievements" items={this.state.achievementsData.slice(0, Math.min(5, this.state.achievementsData.length))} />
		  :
		  <Loader />	
	      }
	    </Paper>
	    <Paper elevation={3} className="twittertimeline">
	      <TwitterContainer src="https://twitter.com/IIITTrichy" width="576" height="680"/>
	    </Paper>
	  </div>
	</div>
	<Footer/>
      </div>

    );
  }
}
