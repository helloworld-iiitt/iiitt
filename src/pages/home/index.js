import React from 'react';
import Navbar from '../../components/navbar/index';
import MainCarousel from '../../components/carousel/index';
import MissionVision from '../../components/mission_vision/index'
export default class Home extends React.Component{




    render(){
    

        return(
            <>

            <Navbar />
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                <MainCarousel images={[{'name':'IIIT Trichy','path':'orion.jpg'},{'name':'#Ha[.sh] \'19' ,'path':'hash.jpg'}]}/>
                <MissionVision />
            </div>
            </>

        );
    }
}