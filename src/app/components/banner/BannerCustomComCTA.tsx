"use client";

import { ResponsiveBanner } from 'pipesolcomponents';
import React from 'react';
import TitleBannerComCTA from './TitleBannerComCTA';


interface BannerCustomComCTAProps {  
  isSm: boolean 
}

const BannerCustomComCTA: React.FC<BannerCustomComCTAProps> = ({isSm}) => {   

  return(
    
    <ResponsiveBanner
      srcSet={{
        xs: { image:'/Banner.png', height: '800px' }, // Para telas extra pequenas
        sm: { image:'/Banner.png', height: '800px' }, // Para telas pequenas
        md: { image:'/Banner.png', height: '600px' }, // Para desktops médios
        lg: { image:'/Banner.png', height: '600px' }, // Para desktops grandes
        xl: { image:'/Banner.png', height: '600px' }, // Para telas extra grandes
        }}
    >
             
      <TitleBannerComCTA isXs={isSm} isSm={isSm}/>                        
      
    </ResponsiveBanner>
  )
};

export default BannerCustomComCTA;