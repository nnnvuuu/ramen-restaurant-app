import React,{useState,} from 'react';
import {makeStyles} from '@material-ui/core';
import 日式锅贴 from '../../../images/日式锅贴.png';
import 寿司 from '../../../images/寿司.png';
import 豚平燒 from '../../../images/豚平燒.jpg';
import 玉子烧 from  '../../../images/玉子烧.jpg';
import 芝麻鸡翅 from  '../../../images/芝麻鸡翅.jpg';
import 米饭 from  '../../../images/米饭.jpg';
import 沾面 from  '../../../images/沾面.png';
import Snacks from './Snacks';
import Paginations from '../Pagination/Paginations';

//https://www.wikiwikinomnom.com/product/wiki-wiki-shio-ramen/13  reference

const snackDetails = [
  {
    image:日式锅贴,
    chnTitle:'日式锅贴',
    engTitle:'Dumpling',
    japTitle:'ぎょうざ',
    price:'$5',
    numberOfRating:100,
    rating:5,
  },
  {
    image:寿司, 
    chnTitle:'寿司',
    engTitle:'Sushi',
    japTitle:'すし',
    price:'$8',
    numberOfRating:5,
    rating:5
  },

  {
    image:米饭, 
    chnTitle:'米饭',
    engTitle:'Rice',
    japTitle:'ごはん',
    price:'$1',
    numberOfRating:3,
    rating:1
  },

  {
    image:芝麻鸡翅, 
    chnTitle:'芝麻鸡翅',
    engTitle:'Fried Chicken',
    japTitle:'手羽先レシピ',
    price:'$4',
    numberOfRating:3,
    rating:3.5
  },

  {
    image:玉子烧, 
    chnTitle:'玉子烧',
    engTitle:'Tamagoyaki',
    japTitle:'だし巻き玉子',
    price:'$3',
    numberOfRating:1000,
    rating:5
  },

  {
    image:豚平燒, 
    chnTitle:'豚平燒',
    engTitle:'Tonpei Yaki',
    japTitle:'とんぺい焼き',
    price:'$3',
    numberOfRating:3,
    rating:1
  },
 
    
]



const SnackMenu = () => {

  const itemPerPage = 4;
  const totalItems = snackDetails.length;
  const [currentPage,setCurrentPage] = useState(1);


     //Get current posts
     const indexOfLastItem = currentPage * itemPerPage;
     const indexOfFirstItem = indexOfLastItem- itemPerPage;
     const currentItem = snackDetails.slice(indexOfFirstItem, indexOfLastItem);

     const paginate = (pageNumber) => setCurrentPage(pageNumber);


 
    return( 
        <div>
           {currentItem.map((snacks,index)=>{
             return <Snacks key={index} image={snacks.image} 
            chnTitle={snacks.chnTitle} engTitle={snacks.engTitle} japTitle={snacks.japTitle}
            price={snacks.price} numberOfRating={snacks.numberOfRating} rating={snacks.rating} />
           })}

            <Paginations
              totalItems={totalItems}
              itemPerPage={itemPerPage}
              paginate={paginate}
              currentPage={currentPage}
            />
          
        </div>
       
    );
}
 
export default SnackMenu;