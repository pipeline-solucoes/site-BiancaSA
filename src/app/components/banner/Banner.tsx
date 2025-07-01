"use client";

import { ResponsiveBannerGradiente } from 'pipesolcomponents';
import React from 'react';
import ContentBannerCustom from './ContentBannerCustom';
import { Box } from '@mui/material';
import InfiniteTickerCustom from '../InfiniteTickerCustom';


interface BannerProps {  
  isXs: boolean;
  isSm: boolean;
  exibirBotaoCTA?: boolean;
}

const Banner: React.FC<BannerProps> = ({isXs, isSm, exibirBotaoCTA = true}) => {   

  const height_default = '100%';

  return(        
    <ResponsiveBannerGradiente
      height_xs={height_default} height_sm={height_default} height_md={height_default} 
      height_lg={height_default} height_xl={height_default}
      background_gradient='linear-gradient(120deg, #eff6f9 0%, #eff6f9 100%)'> 
      <Box display="flex">
        <ContentBannerCustom isXs={isXs} isSm={isSm} exibirBotaoCTA={exibirBotaoCTA}/>
        <Box sx={{bottom: 20, position: 'absolute', width: '100%' }}>
          <InfiniteTickerCustom></InfiniteTickerCustom>
        </Box>        
      </Box>            
    </ResponsiveBannerGradiente>
  );
    
};

export default Banner;