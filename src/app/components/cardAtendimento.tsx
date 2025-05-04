'use client';

import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { styled, Typography, useTheme } from '@mui/material';
import { ImageCard, Location } from 'pipesolcomponents';

const ContentCard = styled('div')({   
  width: '340px',
  height: '156px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',  
  padding: '16px',
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
  src: string;  
  alt: string;   
  titulo: string;  
  text?: string;
  endereco?: string;
  bairro?: string;
  cidade?: string;
  uf?: string;
  cep?:string;
}

const CardAtendimento : React.FC<CardBookProps> = ({src, alt, titulo, text, endereco, bairro, cidade, uf, cep})  => {

  const theme = useTheme();
  const colorText = theme.palette.text.primary;
  
  return (

    <ImageCard src={src} alt={alt} margin="auto" 
      widthImage={340} heightImage={300} 
      border_radius='10px' 
      background_color={theme.palette.custom.backgroundSectionMain}>
        
      <ContentCard>

        <Titulo>{titulo}</Titulo>
            
        { text && <Typography variant='body1' component='p' color={colorText}>{text}</Typography>}   
        { endereco && bairro && cidade && uf && cep &&
          <Location iconColor={theme.palette.primary.main} textColor={colorText}  
            endereco={endereco} bairro={bairro} cidade={cidade} uf={uf} cep={cep}/>  }
              
      </ContentCard>

    </ImageCard>
  
  );
};

export default CardAtendimento;