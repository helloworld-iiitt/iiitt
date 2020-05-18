import React from 'react';
import Navbar from '../../components/navbar/index';
import PaperCard from '../../components/papercard/index'
import MainCarousel from '../../components/carousel/index';
import MissionVision from '../../components/mission_vision/index'
import Marquee from '../../components/marquee/index'
import Divider from '@material-ui/core/Divider';
import news from '../../json/news.json';
import './style.css'
export default class Home extends React.Component{

enable_slide_control=()=>{
document.getElementsByClassName('carousel-root')[0].style.zIndex='auto';
}


    render(){
    
    

        return(
            <>

            <Navbar />
            <div onMouseOver={this.enable_slide_control} className="only_on_desktop customeflex"> 

                    <MissionVision />
                    <MainCarousel images={[{'name':'IIIT Trichy','path':'orion.jpg'},{'name':'#Ha[.sh] \'19' ,'path':'hash.jpg'},{'name':'director','path':'003.jpeg'}]}/>
                    <Marquee/> 
                    <br/>
                    <br/>
            </div>
          
            <div className="only_on_desktop customeflex" id="info">          
                <PaperCard title="News" items={news.data}/>
                <PaperCard title="Events" items={news.data}/>
                <PaperCard title="Notice" items={news.data}/>
            </div>
            <div onMouseOver={this.enable_slide_control} className="only_on_mobile customeflex">
                <MainCarousel images={[{'name':'IIIT Trichy','path':'orion.jpg'},{'name':'#Ha[.sh] \'19' ,'path':'hash.jpg'},{'name':'director','path':'003.jpeg'}]}/>
                <MissionVision />
                <Marquee/>
               
                <div className="only_on_mobile customeflex" id="info_mob">   
                <PaperCard title="News" items={news.data}/>
                <PaperCard title="Events" items={news.data}/>
                <PaperCard title="Notice" items={news.data}/>
            </div>
                
               
            </div>
            </>

        );
    }
}