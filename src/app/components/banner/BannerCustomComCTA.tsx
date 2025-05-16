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
        xs: '/Banner.png',  // Para telas extra pequenas
        sm: '/Banner.png',  // Para telas pequenas
        md: '/Banner.png', // Para desktops médios
        lg: '/Banner.png', // Para desktops grandes
        xl: '/Banner.png'  // Para telas extra grandes
        }}
    >
      {(!isSm) &&        
        <TitleBannerComCTA/>                  
      }
      {(isSm) &&              
        <TitleBannerComCTA/>                                   
      }
    </ResponsiveBanner>
  )
};

export default BannerCustomComCTA;