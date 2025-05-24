import React from 'react';
import { ContentBanner2Columns, ImageCover, NavigationButton, TitleBanner, } from 'pipesolcomponents';
import { Typography, useTheme } from '@mui/material';
import { subTituloBanner, tituloBanner } from '@/constants';

interface TitleBannerCustomProps{
  isXs: boolean;
  isSm: boolean;
  exibirBotaoCTA?: boolean;  
}

const ContentBannerCustom: React.FC<TitleBannerCustomProps> = ({isXs, isSm, exibirBotaoCTA=true}) => {                

    const theme = useTheme();
    const widthImage = (isXs) ? 340 : 540;
    const align = (isXs || isSm) ? 'center' : 'left'; 
    const imagePerfil = "/fotoBanner.png"; 
    const top = '90px'; 
    
    if (exibirBotaoCTA){

        return (
            <ContentBanner2Columns height='calc(100% - 90px)' top={top}>
                <TitleBanner width='100%' textAlign={align} textTitle={tituloBanner} textSubTitle={subTituloBanner}>                                    
                    <NavigationButton 
                        url="#formulario"             
                        width="auto"
                        background_color={theme.palette.custom.backgroundButtonCTA} 
                        background_color_hover={theme.palette.custom.backgroundHoverButtonCTA}
                        color={theme.palette.custom.colorButtonCTA} 
                        border_radius={theme.palette.custom.borderRadiusButtonCTA}
                        aria_label='botao CTA Agendar Avaliação'
                        layout='button'
                        text_decoration='none'>
                        <Typography variant='body1'>Quero Agendar Avaliação</Typography>
                    </NavigationButton>
                </TitleBanner>
                <ImageCover src={imagePerfil} alt="foto Bianca Souza Aguiar" height={widthImage} width={widthImage}>
                </ImageCover>            
            </ContentBanner2Columns>          
        );
    }
    else{
        return (
            <ContentBanner2Columns height='auto' top={top}>
                <TitleBanner width='100%' textAlign='left' textTitle={tituloBanner} textSubTitle={subTituloBanner}>
                </TitleBanner>  
                <ImageCover src={imagePerfil} alt="foto Bianca Souza Aguiar" height={widthImage} width={widthImage}>
                </ImageCover>                           
            </ContentBanner2Columns>          
        );
    }                           
};

export default ContentBannerCustom;