import React,{useEffect,useState} from 'react';
import './GallerySection.css';
import {Typography,Box,withStyles,makeStyles,useMediaQuery,useTheme } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
//https://www.bonappetit.com/recipe/vegetarian-ramen nice design  


const StyledTypography = withStyles({
  root: {
    color: '#8B4513',
    opacity:0.5,
  },
 
})(Typography);

// const useStyles = makeStyles((theme) => ({



// }));


const GallerySection = () =>{
    const [SlidePercentage,setSlidePercentage] = useState(70);
    const theme = useTheme();
    const xsMatche = useMediaQuery(theme.breakpoints.down('xs'));
    const smMatche = useMediaQuery(theme.breakpoints.down('sm'));
    const mdMatche = useMediaQuery(theme.breakpoints.down('md'));
    const lgMatche = useMediaQuery(theme.breakpoints.down('lg'));

    // if(lgMatche) setSlidePercentage(70);
    // else if(mdMatche) setSlidePercentage(50);
    // else if(smMatche) setSlidePercentage(30);
    // else if(xsMatche) setSlidePercentage(10);

  return(
    <>
      <h1 className='gallery-title' > 
           Gallery
       </h1>
      <div className='container'>
        <div className='carousel-wrapper'>
         <Carousel 
         infiniteLoop
         useKeyboardArrows
         autoPlay 
         showStatus={false}
         centerMode
        //  centerSlidePercentage={50}
        centerSlidePercentage={50}
         showThumbs={false}
          >
                  <div style={{backgroundColor:'white'}}>
                      <img className='image'src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg" />
                  </div >
                  <div style={{backgroundColor:'white'}}>
                      <img  className='image'src="https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/dogs_1280p_0.jpg?itok=6jQzdNB8" />
                  </div>
                  <div style={{backgroundColor:'white'}}>
                      <img   className='image'src="https://cdn.vox-cdn.com/thumbor/E95GFrahUCtg_WUYpSpf1cgYGsw=/0x0:960x639/1200x900/filters:focal(295x276:447x428)/cdn.vox-cdn.com/uploads/chorus_image/image/61055427/48386721_1922685597829418_3502338425917276160_n.1535484911.jpg" />
                  </div>
              </Carousel>
  
                
          </div>
      </div>
  
    </>
  );
}


export default GallerySection;