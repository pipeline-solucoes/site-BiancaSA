"use client";

import React from 'react';
import { ResponsiveBanner } from 'pipesolcomponents';
import TitleBannerSemCTA from './TitleBannerSemCTA';

interface BannerCustomSemCTAProps {    
  isSm: boolean,    
}

const BannerCustomSemCTA: React.FC<BannerCustomSemCTAProps> = ({
  isSm }) => {   
  
    return(
    
      <ResponsiveBanner
        srcSet={{
          xs: '/Banner.png',  // Para telas extra pequenas
          sm: '/Banner.png',  // Para telas pequenas
          md: '/Banner.png', // Para desktops médios
          lg: '/Banner.png', // Para desktops grandes
          xl: '/Banner.png'  // Para telas extra grandes
          // xs: '/banner-600.webp',  // Para telas extra pequenas 0 - 600
          // sm: '/banner-960.webp',  // Para telas pequenas 601 - 960
          // md: '/banner-1280.webp', // Para desktops médios 961 - 1280
          // lg: '/banner-1920.webp', // Para desktops grandes 1281 - 1920
          // xl: '/banner-2560.webp'  // Para telas extra grandes 1920 - ...
          }}
      >
        {(!isSm) &&          
          <TitleBannerSemCTA/>          
        }
        {(isSm) &&                  
          <TitleBannerSemCTA/>                    
        }
      </ResponsiveBanner>
    )    
};

export default BannerCustomSemCTA;