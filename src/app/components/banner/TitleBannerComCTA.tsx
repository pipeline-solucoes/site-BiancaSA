import React from 'react';
import { ImageCover, NavigationButton, TitleBanner } from 'pipesolcomponents';
import { styled, Typography, useTheme } from '@mui/material';
import { subTituloBanner, tituloBanner } from '@/constants';

const Container = styled('div')({  
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    justifyItems: 'center',
    alignItems: 'center',    
    width: '100%',
  });

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
        <Container>
        
            <TitleBanner             
                width='100%' 
                textTitle={() => <Typography variant='h1' component='h1'>{tituloBanner}</Typography> }                                 
                renderSubtitle={() =>                 
                    <Typography variant='h2' component='h2'>{subTituloBanner}</Typography>                
                }>
                <ContainerBotao>                  
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
                        <Typography variant='body1'>Agendar Avaliação</Typography>
                    </NavigationButton>                                                     
                </ContainerBotao>                          
            </TitleBanner> 
        
            <ImageCover src="/fotoPerfil.png" alt="foto Bianca Souza Aguiar" height={400} width={400}>
            </ImageCover>            
        </Container>          
    );
};

export default TitleBannerComCTA;