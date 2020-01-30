import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack,Image, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './ImageCarousel.css';

class ImageCarousel extends React.Component {
  constructor(props){
    super(props)
  }
  loadImages(){
      const images = this.props.images;
      return (
          images.map((image,index)=>
          (
          <Slide index={index} key={index}>
              <Image className="carouselImage" src={image} />
          </Slide>
          )
      )
    )
  }
  render(){

    return (
        <CarouselProvider
          visibleSlides={1}
          totalSlides={this.props.images.length}
          step={1}
          naturalSlideHeight={50}
          naturalSlideWidth={50}
          hasMasterSpinner
          infinite
        >
        <div className="carousel-container">
            <Slider>
              {this.loadImages()}
            </Slider>
            <ButtonBack className="buttonBack imageButton"><i className="fa fa-angle-left button-icon"></i></ButtonBack>
            <ButtonNext className="buttonNext imageButton"><i className="fa fa-angle-right button-icon"></i></ButtonNext>
        </div>
    </CarouselProvider>
  )
}
}

export default ImageCarousel;