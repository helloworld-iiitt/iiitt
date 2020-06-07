import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './style.css'
export default class MainCarousel extends Component {



    render() {
        return (
            <Carousel infiniteLoop showThumbs={false} autoPlay stopOnHover={false} > 
            { this.props.images.map((image)=>{

                return(
                <div>
                    <img src={require(`../../images/${image.path}`)} />
                    <p className="legend">{image.name}</p>
                </div>
                )})

            }
            </Carousel>
        );
    }
};