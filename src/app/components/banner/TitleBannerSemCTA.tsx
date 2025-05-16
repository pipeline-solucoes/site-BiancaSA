import React from 'react';
import { ContentBanner2Columns, ImageCover, TitleBannerWithImage } from 'pipesolcomponents';
import { subTituloBanner, tituloBanner } from '@/constants';

interface TitleBannerSemCTAProps{
  isXs: boolean,
  isSm: boolean,     
}


const TitleBannerSemCTA: React.FC<TitleBannerSemCTAProps> = ({isXs, isSm}) => {            
                                     
    const widthImage = (isXs || isSm) ? 340 : 400; 

    return (
        <ContentBanner2Columns>
    
            <TitleBannerWithImage             
                width='100%' 
                textTitle={tituloBanner}                                 
                textSubtitle={subTituloBanner}
                src='/servicos.png'
                width_image={400}
                height_image={80}>                                                                    
            </TitleBannerWithImage> 
            
            <ImageCover src="/fotoPerfil.png" alt="foto Bianca Souza Aguiar" height={widthImage} width={widthImage}>
            </ImageCover> 

        </ContentBanner2Columns> );     
};

export default TitleBannerSemCTA;