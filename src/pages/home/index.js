import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../../components/navbar/index';
import PaperCard from '../../components/papercard/index'
import MainCarousel from '../../components/carousel/index';
import MissionVision from '../../components/mission_vision/index'
import Marquee from '../../components/marquee/index'
import Footer from '../../components/footer/index'
import Divider from '@material-ui/core/Divider';
import news from '../../json/news.json';
import notices from '../../json/notices.json'
import './style.css'
import carouselData from '../../json/homeCarousel.json'
export default class Home extends React.Component{

  enable_slide_control=()=>{
    document.getElementsByClassName('carousel-root')[0].style.zIndex='auto';
  }

  render(){
    const noticeData = notices.data
    return(
      <>

	<Navbar />
	<div onMouseOver={this.enable_slide_control} className="only_on_desktop customeflex">

     <MissionVision />
	  <MainCarousel images={carouselData.data}/>
      <Marquee/>


	  <br/>
	  <br/>
	</div>

	<div className="only_on_desktop customeflex" id="info">
	  <PaperCard title="News" items={news.data}/>
	  <PaperCard title="Events" items={news.data}/>
	  <PaperCard title="Notice" items={noticeData.slice(0, Math.min(5, noticeData.length))}/>
	</div>

	<div onMouseOver={this.enable_slide_control} className="only_on_mobile customeflex">
	  <MainCarousel images={carouselData.data}/>
	  <MissionVision />
	  <Marquee/>

	  <div className="only_on_mobile customeflex" id="info_mob">
	    <PaperCard title="News" items={news.data}/>
	    <PaperCard title="Notice" items={news.data}/>
	    <PaperCard title="Events" items={noticeData.slice(0, Math.min(5, noticeData.length))}/>
	  </div>
	</div>
	<Footer/>
      </>

    );
  }
}
