import React from 'react';
import Navbar from '../../components/navbar/index';
import MainCarousel from '../../components/carousel/index';
import MissionVision from '../../components/mission_vision/index'
import Marquee from '../../components/marquee/index'
import Divider from '@material-ui/core/Divider';
export default class Home extends React.Component{

enable_slide_control=()=>{
document.getElementsByClassName('carousel-root')[0].style.zIndex='auto';
}


    render(){
    

        return(
            <>

            <Navbar />
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}} onMouseOver={this.enable_slide_control} className="only_on_desktop">

                    <MissionVision />
                    <MainCarousel images={[{'name':'IIIT Trichy','path':'orion.jpg'},{'name':'#Ha[.sh] \'19' ,'path':'hash.jpg'},{'name':'director','path':'003.jpeg'}]}/>
                    <Marquee/> 
                    <br/>
                    <br/>
            </div>
            
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}} className="only_on_desktop">          
            
            </div>
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}} onMouseOver={this.enable_slide_control} className="only_on_mobile">
                <MainCarousel images={[{'name':'IIIT Trichy','path':'orion.jpg'},{'name':'#Ha[.sh] \'19' ,'path':'hash.jpg'},{'name':'director','path':'003.jpeg'}]}/>
                <MissionVision />
                <Marquee/>
                
               
            </div>
            </>

        );
    }
}