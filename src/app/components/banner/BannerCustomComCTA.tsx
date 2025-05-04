"use client";

import { ContentBannerLeft, ResponsiveBanner } from 'pipesolcomponents';
import React from 'react';
import TitleBannerComCTA from './TitleBannerComCTA';

interface BannerCustomComCTAProps {  
  isSm: boolean 
}

const BannerCustomComCTA: React.FC<BannerCustomComCTAProps> = ({isSm}) => {   

  return(
    
    <ResponsiveBanner
      srcSet={{
        xs: '/banner.png',  // Para telas extra pequenas
        sm: '/banner.png',  // Para telas pequenas
        md: '/banner.png', // Para desktops médios
        lg: '/banner.png', // Para desktops grandes
        xl: '/banner.png'  // Para telas extra grandes
        }}
    >
      {(!isSm) &&
        <ContentBannerLeft>
          <TitleBannerComCTA/>          
        </ContentBannerLeft>
      }
      {(isSm) &&
        <ContentBannerLeft>         
          <TitleBannerComCTA/>                           
        </ContentBannerLeft> 
      }
    </ResponsiveBanner>
  )
};

export default BannerCustomComCTA;