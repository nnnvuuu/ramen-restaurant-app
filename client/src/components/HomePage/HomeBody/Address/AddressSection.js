import React from 'react';
import './AddressSection.css'
import {Grid} from '@material-ui/core';

// https://stackoverflow.com/questions/37097404/equal-height-columns-with-centered-content-in-flexbox
const AddressSection = () => {
  return (

    <div className='address-container' >

       <div className="address-section-div-wrapper">
         <i class="fas fa-map-marker-alt address-section-img"/>
         <h3 className='address-section-text'>Address</h3>
         <div>4801 8th Ave, </div>
         <div>Brooklyn, NY 11220</div>
       </div>
    
       <div className="address-section-div-wrapper">
          <i class="fas fa-phone-square-alt address-section-img"/>
          <h3 className='address-section-text'>Phone</h3>
          <div>+1 (718) 437-3542</div>
          <div>+1 (646) 233-6623</div>
        </div>
   
        <div className="address-section-div-wrapper">
          <i class="fas fa-clock address-section-img"/>
          <h3 className='address-section-text'> Hours</h3>
          <div>Monday-Sunday</div>
          <div>07:30–21:00</div>
        </div>
  
   
       <div className="address-section-div-wrapper">
          <i class="fas fa-utensils address-section-img"/>
          <h3 className='address-section-text'>Status</h3>
          <div>Online Order  ✔ </div>
          <div>Food delivery  ✔ </div>
          <div>Take-out   ✔ </div>
          <div>Dine-in  ✖</div>
        </div>
    
  </div>
  );
};

export default AddressSection;