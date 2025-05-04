import React from 'react';
import { ImageCover, TitleBanner } from 'pipesolcomponents';
import { styled, Typography } from '@mui/material';
import { subTituloBanner, tituloBanner } from '@/constants';

const Container = styled('div')({  
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    justifyItems: 'center',
    alignItems: 'center',    
    width: '100%',
  });

const TitleBannerSemCTA: React.FC = () => {            
                          
    return (        
        <Container>
        
        <TitleBanner             
            width='100%' 
            textTitle={() => <Typography variant='h1' component='h1'>{tituloBanner}</Typography> }                                 
            renderSubtitle={() =>                 
                <Typography variant='h2' component='h2'>{subTituloBanner}</Typography>                
            }>                               
        </TitleBanner> 
    
        <ImageCover src="/fotoPerfil.png" alt="foto Bianca Souza Aguiar" height={400} width={400}>
        </ImageCover>            
    </Container>                     
    );
};

export default TitleBannerSemCTA;