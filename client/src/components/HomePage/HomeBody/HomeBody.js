import React from 'react';
import './HomeBody.css';
import AboutSection from './About/AboutSection';
import RamenSection from './Ramen/RamenSection';
import MenuSection from './Menu/MenuSection';
import GallerySection from './Gallery/GallerySection';
import AddressSection from './Address/AddressSection';
import MapSection from './Map/MapSection';
import FooterSection from './Footer/FooterSection';



function HomeBody() {
 
  return (
    <>

          <RamenSection/>
          <AboutSection/>
          <MenuSection/>
          <GallerySection/>
          <AddressSection/>
          <MapSection/>
          <FooterSection/>

    </>

  );
}

export default HomeBody;