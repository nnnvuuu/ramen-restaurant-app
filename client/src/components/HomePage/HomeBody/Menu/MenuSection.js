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
import {Typography} from '@material-ui/core';
import './MenuSection.css';
 

function MenuSection(props) {
  return (
    <div className="section-3 ">
      <div className='section-3-title' > 
          <Typography variant='h2'>
             MENU メニュー
          </Typography>
      </div>
    </div>
  );
}

export default MenuSection;