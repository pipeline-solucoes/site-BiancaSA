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
          xs: { image:'/Banner.png', height: '900px' }, // Para telas extra pequenas
          sm: { image:'/Banner.png', height: '600px' }, // Para telas pequenas
          md: { image:'/Banner.png', height: '600px' }, // Para desktops médios
          lg: { image:'/Banner.png', height: '600px' }, // Para desktops grandes
          xl: { image:'/Banner.png', height: '600px' }, // Para telas extra grandes
          // xs: '/banner-600.webp',  // Para telas extra pequenas 0 - 600
          // sm: '/banner-960.webp',  // Para telas pequenas 601 - 960
          // md: '/banner-1280.webp', // Para desktops médios 961 - 1280
          // lg: '/banner-1920.webp', // Para desktops grandes 1281 - 1920
          // xl: '/banner-2560.webp'  // Para telas extra grandes 1920 - ...
          }}
      >
        <TitleBannerSemCTA isXs={isSm} isSm={isSm}/>                         
      </ResponsiveBanner>
    )    
};

export default BannerCustomSemCTA;