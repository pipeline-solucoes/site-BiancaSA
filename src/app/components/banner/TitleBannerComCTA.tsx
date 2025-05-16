import React from 'react';
import { ContentBanner2Columns, ImageCover, NavigationButton, TitleBannerWithImage } from 'pipesolcomponents';
import { Typography, useTheme } from '@mui/material';
import { subTituloBanner, tituloBanner } from '@/constants';

interface TitleBannerComCTAProps{
  isXs: boolean,       
}

const TitleBannerComCTA: React.FC<TitleBannerComCTAProps> = ({isXs}) => {                

    const theme = useTheme();
    const widthImage = (isXs) ? 300 : 400;    
                          
    return (
        <ContentBanner2Columns>

            <TitleBannerWithImage             
                width='100%' 
                textTitle={tituloBanner}                                 
                textSubtitle={subTituloBanner}
                src='/servicos.png'
                width_image={widthImage}
                height_image={80}>
                                  
                    <NavigationButton 
                        url="#formulario"             
                        width="auto"
                        background_color={theme.palette.custom.backgroundButtonCTA} 
                        background_color_hover={theme.palette.custom.backgroundHoverButtonCTA}
                        color={theme.palette.custom.colorButtonCTA} 
                        border_radius={theme.palette.custom.borderRadiusButtonCTA}
                        aria_label='botao CTA Agendar Avaliação'
                        layout='button'
                        text_decoration='none'             
                    >
                        <Typography variant='body1'>Quero Agendar Avaliação</Typography>
                    </NavigationButton>
                                         
            </TitleBannerWithImage> 
        
            <ImageCover src="/fotoPerfil.png" alt="foto Bianca Souza Aguiar" height={widthImage} width={widthImage}>
            </ImageCover>            
        </ContentBanner2Columns>          
    );
};

export default TitleBannerComCTA;