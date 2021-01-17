import React from 'react';
import {Card,makeStyles,Grid, Divider, CardMedia} from '@material-ui/core';
import 豚骨拉面 from '../../../images/豚骨拉面.png';
import 味增拉面 from '../../../images/味增拉面.png';
import Ramens from './Ramens';


const RamenMenu = () => {
    return( 
        <div>
          <Ramens
           image={豚骨拉面}
           mediaTitle={'豚骨拉面'}
           chnTitle={'豚骨拉面'}
           engTitle={'Tonkotsu Ramen'}
           japTitle={'とんこつ ラーメン'}
           price={'$10'}
           numberOfRating={3}
           rating={2}
          />

        <Ramens
           image={味增拉面}
           mediaTitle={'味增拉面'}
           chnTitle={'味增拉面'}
           engTitle={'Miso Ramen'}
           japTitle={'みそラーメン'}
           price={'$8'}
           numberOfRating={114514}
           rating={5}
          />
          
        </div>
    );
}
 
export default RamenMenu;