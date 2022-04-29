import React,{useState,} from 'react';
import {makeStyles} from '@material-ui/core';
import 豚骨拉面 from '../../../images/豚骨拉面.png';
import 味增拉面 from '../../../images/味增拉面.png';
import 酱油叉烧拉面 from '../../../images/酱油叉烧拉面.png';
import 盐味拉面 from  '../../../images/盐味拉面.png';
import 兰州拉面 from  '../../../images/兰州拉面.png';
import 沾面 from  '../../../images/沾面.png';
import Ramens from './Ramens';
import Paginations from '../Pagination/Paginations';
import PopoutFooter from '../PopoutFooter/PopoutFooter';

//https://www.wikiwikinomnom.com/product/wiki-wiki-shio-ramen/13  reference

const ramenDetails = [
  {
    image:豚骨拉面,
    chnTitle:'豚骨拉面',
    engTitle:'Tonkotsu Ramen',
    japTitle:'とんこつ ラーメン',
    price:'$10',
    numberOfRating:3,
    rating:2,
    ramenAddOns:[
  
      {
        type:'Egg',
        cost:1,
      },
      {
        type:'Extra Egg',
        cost:1,
      },

      {
        type:'Extra Chashu',
        cost:3,
      },
      
      {
        type:'Extra Corn',
        cost:1,
      },

      {
        type:'Extra Bamboo',
        cost:1,
      },

      {
        type:'Extra Spinach ',
        cost:1,
      },

      {
        type:'Extra Noodle ',
        cost:3,
      },

      {
        type:'Extra Mushroom ',
        cost:3,
      },

      {
        type:'Spicy Flakes ',
        cost:0.25,
      },
    ]
  },
  {
    image:味增拉面, 
    chnTitle:'味增拉面',
    engTitle:'Miso Ramen',
    japTitle:'みそラーメン',
    price:'$8',
    numberOfRating:5,
    rating:5,
    ramenAddOns:[
  
      {
        type:'Egg',
        cost:1,
      },
      {
        type:'Extra Egg',
        cost:1,
      },

      {
        type:'Extra Chashu',
        cost:3,
      },
      
      {
        type:'Extra Corn',
        cost:1,
      },

      {
        type:'Extra Bamboo',
        cost:1,
      },

      {
        type:'Extra Spinach ',
        cost:1,
      },

      {
        type:'Extra Noodle ',
        cost:3,
      },

      {
        type:'Extra Mushroom ',
        cost:3,
      },

      {
        type:'Spicy Flakes ',
        cost:0.25,
      },
    ]
  },

  {
    image:酱油叉烧拉面, 
    chnTitle:'酱油叉烧拉面',
    engTitle:'Shoyu Ramen',
    japTitle:'しょうゆラーメン',
    price:'$8',
    numberOfRating:3,
    rating:1,
    ramenAddOns:[
  
      {
        type:'Egg',
        cost:1,
      },
      {
        type:'Extra Egg',
        cost:1,
      },

      {
        type:'Extra Chashu',
        cost:3,
      },
      
      {
        type:'Extra Corn',
        cost:1,
      },

      {
        type:'Extra Bamboo',
        cost:1,
      },

      {
        type:'Extra Spinach ',
        cost:1,
      },

      {
        type:'Extra Noodle ',
        cost:3,
      },

      {
        type:'Extra Mushroom ',
        cost:3,
      },

      {
        type:'Spicy Flakes ',
        cost:0.25,
      },
    ]
  },

  {
    image:盐味拉面, 
    chnTitle:'盐味拉面',
    engTitle:'Shio Ramen',
    japTitle:'しおラーメン',
    price:'$8',
    numberOfRating:3,
    rating:3.5,
    ramenAddOns:[
  
      {
        type:'Egg',
        cost:1,
      },
      {
        type:'Extra Egg',
        cost:1,
      },

      {
        type:'Extra Chashu',
        cost:3,
      },
      
      {
        type:'Extra Corn',
        cost:1,
      },

      {
        type:'Extra Bamboo',
        cost:1,
      },

      {
        type:'Extra Spinach ',
        cost:1,
      },

      {
        type:'Extra Noodle ',
        cost:3,
      },

      {
        type:'Extra Mushroom ',
        cost:3,
      },

      {
        type:'Spicy Flakes ',
        cost:0.25,
      },
    ]
  },

  {
    image:兰州拉面, 
    chnTitle:'兰州拉面',
    engTitle:'Lanzhou Beef Noodle',
    japTitle:'ぎゅうにくめん',
    price:'$9',
    numberOfRating:1000,
    rating:5,
    ramenAddOns:[
  
      {
        type:'Egg',
        cost:1,
      },
      {
        type:'Extra Egg',
        cost:1,
      },

      {
        type:'Extra Chashu',
        cost:3,
      },
      
      {
        type:'Extra Corn',
        cost:1,
      },

      {
        type:'Extra Bamboo',
        cost:1,
      },

      {
        type:'Extra Spinach ',
        cost:1,
      },

      {
        type:'Extra Noodle ',
        cost:3,
      },

      {
        type:'Extra Mushroom ',
        cost:3,
      },

      {
        type:'Spicy Flakes ',
        cost:0.25,
      },
    ]
  },

  {
    image:沾面, 
    chnTitle:'沾面',
    engTitle:'Tsukemen Ramen',
    japTitle:'つけめん',
    price:'$6',
    numberOfRating:3,
    rating:1,
    ramenAddOns:[
  
      {
        type:'Egg',
        cost:1,
      },
      {
        type:'Extra Egg',
        cost:1,
      },

      {
        type:'Extra Chashu',
        cost:3,
      },
      
      {
        type:'Extra Corn',
        cost:1,
      },

      {
        type:'Extra Bamboo',
        cost:1,
      },

      {
        type:'Extra Spinach ',
        cost:1,
      },

      {
        type:'Extra Noodle ',
        cost:3,
      },

      {
        type:'Extra Mushroom ',
        cost:3,
      },

      {
        type:'Spicy Flakes ',
        cost:0.25,
      },
    ]
  },
 
    
]


const useStyles = makeStyles(theme=>({
  pagination:{
    
  }
}))

const RamenMenu = () => {
  const classes = useStyles();
  const itemPerPage = 4;
  const totalItems = ramenDetails.length;
  const [currentPage,setCurrentPage] = useState(1);


     //Get current posts
     const indexOfLastItem = currentPage * itemPerPage;
     const indexOfFirstItem = indexOfLastItem- itemPerPage;
     const currentItem = ramenDetails.slice(indexOfFirstItem, indexOfLastItem);

     const paginate = (pageNumber) => setCurrentPage(pageNumber);


 
    return( 
        <div>
           {currentItem.map((ramens,index)=>{
             return <Ramens key={index} image={ramens.image} 
            chnTitle={ramens.chnTitle} engTitle={ramens.engTitle} japTitle={ramens.japTitle}
            price={ramens.price} numberOfRating={ramens.numberOfRating} rating={ramens.rating}
            ramenAddOns={ramens.ramenAddOns} />
           })}

            <Paginations
              totalItems={totalItems}
              itemPerPage={itemPerPage}
              paginate={paginate}
              currentPage={currentPage}
            />
          
          <PopoutFooter/>
          
        </div>

       
       
    );
}
 
export default RamenMenu;