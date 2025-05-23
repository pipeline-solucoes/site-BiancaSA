"use client";

import { ResponsiveBannerGradiente } from 'pipesolcomponents';
import React from 'react';
import TitleBanner from './TitleBannerCustom';
import { useTheme } from "@mui/material";

interface BannerProps {  
  isXs: boolean;
  exibirBotaoCTA?: boolean;
}

const Banner: React.FC<BannerProps> = ({isXs, exibirBotaoCTA = true}) => {   

  const theme = useTheme();
  const backgroud_color = theme.palette.primary.light;
  const height_default = '700px';

  return(        
    <ResponsiveBannerGradiente
      height_xs='900px' height_sm={height_default} height_md={height_default} 
      height_lg={height_default} height_xl={height_default}
      colorStart={backgroud_color} colorMiddle={backgroud_color} colorEnd={backgroud_color}>                
      <TitleBanner isXs={isXs} exibirBotaoCTA={exibirBotaoCTA}/>                                  
    </ResponsiveBannerGradiente>
  );
    
};

export default Banner;