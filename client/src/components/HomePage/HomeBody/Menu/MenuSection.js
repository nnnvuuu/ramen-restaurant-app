import React from 'react';
import Section3bgPng from '../../../../images/section-3-bg.jpg';
import 味增拉面 from '../../../../images/味增拉面.png';
import 豚骨拉面 from '../../../../images/豚骨拉面.png';
import 喜多方拉面 from '../../../../images/喜多方拉面.png';
import 盐味拉面 from '../../../../images/盐味拉面.png';
import 酱油叉烧拉面 from '../../../../images/酱油叉烧拉面.png';
import  鱼贝类拉面 from '../../../../images/鱼贝类拉面.png';
import 寿司 from '../../../../images/寿司.png';
import 日式锅贴 from '../../../../images/日式锅贴.png';
import 酱油拌面 from '../../../../images/酱油拌面.png';
import 兰州拉面 from '../../../../images/兰州拉面.png';
import {Grid, Typography} from '@material-ui/core';
import MenuCard from './MenuCard';



function MenuSection() {


  return (
    <div className='section-3' >
    <div className='section-3-title' > 
          <Typography variant='h2'>
             MENU メニュー
          </Typography>
      </div>
    {/* <Grid
    container
     direction="row"
    // justify="flex-start"

   
     >   
      <Grid item xs={12} sm={6} md={4} lg={4}>
         <MenuCard
          headerTitle="味增拉面"
          subheaderTitle="the best"
          image={味增拉面}
          mediaTitle="wtf"
          price="$10"
          content=" 味噌拉麵（日语：味噌ラーメン）使用味噌作為拉麵湯加上日本麵條，雖然以札幌的味噌拉麵名氣最高，但其他地方也擁有出名的味噌拉麵。 "
          />
      </Grid>
      <Grid item xs={12}  sm={6} md={ 4} lg={4}>
         <MenuCard
          headerTitle="味增拉面"
          subheaderTitle="the best"
          image={味增拉面}
          mediaTitle="wtf"
          price="$10"
          content=" 味噌拉麵（日语：味噌ラーメン）使用味噌作為拉麵湯加上日本麵條，雖然以札幌的味噌拉麵名氣最高，但其他地方也擁有出名的味噌拉麵。 "
          />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
         <MenuCard
          headerTitle="味增拉面"
          subheaderTitle="the best"
          image={味增拉面}
          mediaTitle="wtf"
          price="$10"
          content=" 味噌拉麵（日语：味噌ラーメン）使用味噌作為拉麵湯加上日本麵條，雖然以札幌的味噌拉麵名氣最高，但其他地方也擁有出名的味噌拉麵。 "
          />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
         <MenuCard
          headerTitle="味增拉面"
          subheaderTitle="the best"
          image={味增拉面}
          mediaTitle="wtf"
          price="$10"
          content=" 味噌拉麵（日语：味噌ラーメン）使用味噌作為拉麵湯加上日本麵條，雖然以札幌的味噌拉麵名氣最高，但其他地方也擁有出名的味噌拉麵。 "
          />
      </Grid>
      <Grid item xs={12} sm={6} md={4}lg={4}>
         <MenuCard
          headerTitle="味增拉面"
          subheaderTitle="the best"
          image={味增拉面}
          mediaTitle="wtf"
          price="$10"
          content=" 味噌拉麵（日语：味噌ラーメン）使用味噌作為拉麵湯加上日本麵條，雖然以札幌的味噌拉麵名氣最高，但其他地方也擁有出名的味噌拉麵。 "
          />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
         <MenuCard
          headerTitle="味增拉面"
          subheaderTitle="the best"
          image={味增拉面}
          mediaTitle="wtf"
          price="$10"
          content=" 味噌拉麵（日语：味噌ラーメン）使用味噌作為拉麵湯加上日本麵條，雖然以札幌的味噌拉麵名氣最高，但其他地方也擁有出名的味噌拉麵。 "
          />
      </Grid>

     

      
    </Grid> */}

    </div>
  );
}
export default MenuSection;