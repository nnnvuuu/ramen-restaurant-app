import React from 'react';
import {Card,makeStyles,Grid, Divider, CardMedia} from '@material-ui/core';
import 豚骨拉面 from '../../../images/豚骨拉面.png';
import Ramens from './Ramens';


const RamenMenu = () => {
    return( 
        <div>
          <Ramens
           image={豚骨拉面}
           mediaTitle={'豚骨拉面'}
          />
        </div>
    );
}
 
export default RamenMenu;