'use client';

import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { styled, Typography, useTheme } from '@mui/material';
import { ContainerAnimatedCard, ImageCard, Location, MapCard } from 'pipesolcomponents';

const ContentCard = styled('div')({   
  width: '340px',
  height: '188px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',  
  padding: '16px',
  gap: '16px'  
});

const ContentCardMapa = styled('div')({   
  width: '100%',
  height: '156px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',    
  gap: '16px'  
});

const Titulo = styled('h4')(({ theme }) => ({
  width: '100%',
  height: 'auto',     
  textAlign: 'center',  
  color: theme.palette.primary.main,  

  // Tipografia
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.h4?.fontWeight,
  fontStyle: theme.typography.h4?.fontStyle,
  lineHeight: theme.typography.h4?.lineHeight,
  letterSpacing: theme.typography.h4?.letterSpacing,
  fontSize: theme.typography.h4?.fontSize,
  margin: theme.typography.h4?.margin,
}));


interface CardBookProps {  
  src?: string;
  srcMap?: string;  
  alt: string;   
  titulo: string;  
  text?: string;
  endereco?: string;
  bairro?: string;
  cidade?: string;
  uf?: string;
  cep?:string;
}

const CardAtendimento : React.FC<CardBookProps> = ({src, srcMap, alt, titulo, text, endereco, bairro, cidade, uf, cep})  => {

  const theme = useTheme();
  const colorText = theme.palette.text.primary;
  
  if (src)
  {
    return (
      <ImageCard src={src} alt={alt} margin="0px" 
        widthImage={340} heightImage={300} 
        border_radius='10px' 
        background_color={theme.palette.custom.backgroundSectionMain}>          
        <ContentCard>
          <Titulo>{titulo}</Titulo>              
          <Typography variant='body1' component='p' color={colorText}>{text}</Typography>                          
        </ContentCard>
      </ImageCard>    
    );
  }

  else if (srcMap) {
    return (

      <ContainerAnimatedCard>
        <MapCard 
          srcGoogle={srcMap}
          margin="auto" 
          width="340px" height_map="300px" 
          border_radius='10px' 
          background_color={theme.palette.custom.backgroundSectionMain}       
          >          
          <ContentCardMapa>
            <Titulo>{titulo}</Titulo>                        
            { endereco && bairro && cidade && uf && cep &&
              <Location iconColor={theme.palette.primary.main} textColor={colorText}  
                endereco={endereco} bairro={bairro} cidade={cidade} uf={uf} cep={cep}/>  }                
          </ContentCardMapa>  
        </MapCard>    
      </ContainerAnimatedCard>
    );
  }
  
};

export default CardAtendimento;