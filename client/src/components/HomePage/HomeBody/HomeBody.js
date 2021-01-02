import React from 'react';
import './HomeBody.css';
import RamenTitlePng from '../../../images/RAMEN-title.png';

function HomeBody(props) {
  return (
    <>
      

        <div className="section-1 ">
          <img src={RamenTitlePng}/>
        </div>
        <div className="section-2 box ">about</div>
        <div className="section-3 box ">menu</div>
        <div className="section-4 box ">gallery</div>
        <div className="section-5 box ">address</div>
        <div className="section-6 box ">map</div>
        <div className="section-7 box ">footer</div>

    </>

  );
}

export default HomeBody;