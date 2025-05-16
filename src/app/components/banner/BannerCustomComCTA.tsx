"use client";

import { ResponsiveBanner } from 'pipesolcomponents';
import React from 'react';
import TitleBannerComCTA from './TitleBannerComCTA';


interface BannerCustomComCTAProps {  
  isXs: boolean 
}

const BannerCustomComCTA: React.FC<BannerCustomComCTAProps> = ({isXs}) => {   

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
             
      <TitleBannerComCTA isXs={isXs}/>                        
      
    </ResponsiveBanner>
  )
};

export default BannerCustomComCTA;