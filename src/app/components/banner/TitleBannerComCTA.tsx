import React from 'react';
import { NavigationButton, TitleBanner } from 'pipesolcomponents';
import { styled, Typography, useTheme } from '@mui/material';
import { subTituloBanner, tituloBanner } from '@/constants';

const ContainerBotao = styled('div')({  
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
  width: '100%',
});

const TitleBannerComCTA: React.FC = () => {            

    const theme = useTheme();    
                          
    return (        
        <TitleBanner             
            width='50%' 
            textTitle={() => <Typography variant='h1' component='h1'>{tituloBanner}</Typography> }                                 
            renderSubtitle={() =>                 
                <Typography variant='h2' component='h2'>{subTituloBanner}</Typography>                
            }>
            <ContainerBotao>                  
                <NavigationButton 
                    url="#obras"             
                    width="calc(100% - 48px)"
                    background_color={theme.palette.custom.backgroundButtonCTA} 
                    background_color_hover={theme.palette.custom.backgroundHoverButtonCTA}
                    color={theme.palette.custom.colorButtonCTA} 
                    border_radius={theme.palette.custom.borderRadiusButtonCTA}
                    aria_label='botao CTA Explore minhas obras'
                    layout='button'
                    text_decoration='none'             
                >
                    <Typography variant='body1'>Agendar Avaliação</Typography>
                </NavigationButton>                                                     
            </ContainerBotao>                          
        </TitleBanner>               
    );
};

export default TitleBannerComCTA;