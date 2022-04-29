import React,{useState,} from 'react';
import {makeStyles} from '@material-ui/core';
import 啤酒 from '../../../images/啤酒.jpg';
import 碳酸饮料 from '../../../images/碳酸饮料.jpg';
import 豚平燒 from '../../../images/豚平燒.jpg';
import 玉子烧 from  '../../../images/玉子烧.jpg';
import 芝麻鸡翅 from  '../../../images/芝麻鸡翅.jpg';
import 米饭 from  '../../../images/米饭.jpg';
import 沾面 from  '../../../images/沾面.png';
import Drinks from './Drinks';
import Paginations from '../Pagination/Paginations';
import PopoutFooter from '../PopoutFooter/PopoutFooter';
//https://www.wikiwikinomnom.com/product/wiki-wiki-shio-ramen/13  reference

const DrinksDetails =   [
  {
    image:啤酒,
    chnTitle:'啤酒',
    engTitle:'Beer',
    japTitle:'ビール',
    initPrice:0,
    numberOfRating:100,
    rating:5,
    typeOfdrink: [
      {
       type:"Asahi",
       cost:2,
      },

      {
      type: "Yebisu",
      cost:2,
      },

      {
        type: "Kirin",
        cost:2,
      },

      {
        type: "Sapporo",
        cost:1,
      },

      {
        type: "Heiniken",
        cost:1.5,
      },

      {
        type: "Budweiser",
        cost:1,
      },

      {
        type: "Tsingtao",
        cost:1.5,
      }
  ]
    
  },
  {
    image:碳酸饮料, 
    chnTitle:'碳酸饮料',
    engTitle:'Soda',
    japTitle:'たんさんいんりょう',
    initPrice:0,
    numberOfRating:5,
    rating:5,
    typeOfdrink: [
      {
       type:"Coke",
       cost:1,
      },

      {
      type: "Diet Coke ",
      cost:1,
      },

      {
        type: "Pepsi",
        cost:1,
      },

      {
        type: "Sprite",
        cost:1,
      },

      {
        type: "Fanta ",
        cost:1,
      },

      {
        type: "Dr Pepper",
        cost:1,
      },
      {
        type: "Monster",
        cost:2,
      },
      {
        type: "RedBull 8.4 oz",
        cost:2,
      },
      {
        type: "RedBull 12 oz",
        cost:3,
      },



     
  ]
    
  },

  // {
  //   image:米饭, 
  //   chnTitle:'米饭',
  //   engTitle:'Rice',
  //   japTitle:'ごはん',
  //   price:'$1',
  //   numberOfRating:3,
  //   rating:1
  // },

  // {
  //   image:芝麻鸡翅, 
  //   chnTitle:'芝麻鸡翅',
  //   engTitle:'Fried Chicken',
  //   japTitle:'手羽先レシピ',
  //   price:'$4',
  //   numberOfRating:3,
  //   rating:3.5
  // },

  // {
  //   image:玉子烧, 
  //   chnTitle:'玉子烧',
  //   engTitle:'Tamagoyaki',
  //   japTitle:'だし巻き玉子',
  //   price:'$3',
  //   numberOfRating:1000,
  //   rating:5
  // },

  // {
  //   image:豚平燒, 
  //   chnTitle:'豚平燒',
  //   engTitle:'Tonpei Yaki',
  //   japTitle:'とんぺい焼き',
  //   price:'$3',
  //   numberOfRating:3,
  //   rating:1
  // },
 
    
]



const DrinkMenu = () => {

  const itemPerPage = 4;
  const totalItems = DrinksDetails.length;
  const [currentPage,setCurrentPage] = useState(1);


     //Get current posts
     const indexOfLastItem = currentPage * itemPerPage;
     const indexOfFirstItem = indexOfLastItem- itemPerPage;
     const currentItem = DrinksDetails.slice(indexOfFirstItem, indexOfLastItem);

     const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return( 
        <div>
          
           {currentItem.map((drinks,index)=>{
            //    {console.log(drinks.typeOfdrink)}
             return <Drinks key={index} image={drinks.image} 
            chnTitle={drinks.chnTitle} engTitle={drinks.engTitle} japTitle={drinks.japTitle}
            initPrice={drinks.initPrice} typeOfdrink ={drinks.typeOfdrink}   />
           
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
 
export default DrinkMenu;