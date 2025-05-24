"use client";

import { ResponsiveBannerGradiente } from 'pipesolcomponents';
import React from 'react';
import { useTheme } from "@mui/material";
import ContentBannerCustom from './ContentBannerCustom';

interface BannerProps {  
  isXs: boolean;
  isSm: boolean;
  exibirBotaoCTA?: boolean;
}

const Banner: React.FC<BannerProps> = ({isXs, isSm, exibirBotaoCTA = true}) => {   

  const theme = useTheme();
  const backgroud_color = theme.palette.primary.light;
  const height_default = '100%';

  return(        
    <ResponsiveBannerGradiente
      height_xs={height_default} height_sm={height_default} height_md={height_default} 
      height_lg={height_default} height_xl={height_default}
      colorStart={backgroud_color} colorMiddle={backgroud_color} colorEnd={backgroud_color}>                
      <ContentBannerCustom isXs={isXs} isSm={isSm} exibirBotaoCTA={exibirBotaoCTA}/>                                  
    </ResponsiveBannerGradiente>
  );
    
};

export default Banner;