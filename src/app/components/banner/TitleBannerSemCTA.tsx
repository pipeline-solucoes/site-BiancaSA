import React from 'react';
import { ContentBanner2Columns, ImageCover, TitleBannerWithImage } from 'pipesolcomponents';
import { subTituloBanner, tituloBanner } from '@/constants';

const TitleBannerSemCTA: React.FC = () => {            
                                                          
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
            
            <ImageCover src="/fotoPerfil.png" alt="foto Bianca Souza Aguiar" height={400} width={400}>
            </ImageCover> 

        </ContentBanner2Columns> );     
};

export default TitleBannerSemCTA;