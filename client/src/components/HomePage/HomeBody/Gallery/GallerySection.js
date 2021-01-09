import React from 'react';
import './GallerySection.css';
import Slider from "react-slick";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
//https://www.bonappetit.com/recipe/vegetarian-ramen nice design  
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const GallerySection = (props) =>{
 
return(
    <Carousel 
    swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
    >

      <div><img src='https://www.justonecookbook.com/wp-content/uploads/2019/05/Miso-Ramen-I.jpg'/></div>
      <div><img src='https://i.pinimg.com/736x/c7/c0/a5/c7c0a526a466c80841f17a570802c16b.jpg'/></div>
      <div>Item 3</div>
      <div>Item 4</div>

    </Carousel>
);

}


export default GallerySection;