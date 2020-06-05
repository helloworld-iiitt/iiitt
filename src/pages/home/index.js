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
import './style.css'
export default class Home extends React.Component{

enable_slide_control=()=>{
document.getElementsByClassName('carousel-root')[0].style.zIndex='auto';
}

componentDidMount(){
  /*  let carousel_height= document.getElementsByClassName("carousel-root")[0].clientHeight;
    console.log(carousel_height);
    if(document.getElementsByClassName('v_marquee')[0])document.getElementsByClassName('v_marquee')[0].style.height = `${carousel_height}px`;*/
    
    window.requestAnimationFrame(function(){
    var node = ReactDOM.findDOMNode(this);
    console.log(node);
   
    
    console.log(document.defaultView.getComputedStyle(document.getElementsByClassName('carousel-root')[0], "").getPropertyValue("height"));
    console.log(document.getElementsByClassName('carousel-slider'));
   // document.getElementsByClassName('v_marquee')[0].style.height = document.defaultView.getComputedStyle(document.getElementsByClassName('carousel-root')[0], "").getPropertyValue("height");
    
        
    });
}
componentWillUpdate(){
    
}
componentDidUpdate(){
   
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
                <PaperCard title="Notice" items={news.data}/>
                <PaperCard title="Events" items={news.data}/>
                
            </div>
            </div>
            <Footer/>
            </>

        );
    }
}