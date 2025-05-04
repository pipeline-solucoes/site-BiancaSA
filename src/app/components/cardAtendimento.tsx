'use client';

import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { styled, Typography, useTheme } from '@mui/material';
import { ImageCard, Location } from 'pipesolcomponents';

const ContentCard = styled('div')({  
  padding: '16px',
  width: '340px',
  height: '150px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '8px'
});

const StyledDivText = styled('div')({
  width: '100%',
  height: '100%', 
  flex: '1',
  textAlign: 'left',
});

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

    <ImageCard src={src} alt={alt} margin="auto" widthImage={340} heightImage={340} border_radius='10px'>
        
        <ContentCard>            
            <StyledDivText>
              <Typography variant='body2' component='h4' color={theme.palette.primary.main}>{titulo}</Typography>              
            </StyledDivText>
              
            { text && <Typography variant='body1' component='div' color={colorText}>{text}</Typography>}   
            { endereco && bairro && cidade && uf && cep &&
              <Location iconColor={theme.palette.primary.main} textColor={colorText}  
                endereco={endereco} bairro={bairro} cidade={cidade} uf={uf} cep={cep}/>              
            }                       
        </ContentCard>

    </ImageCard>
  
  );
};

export default CardAtendimento;