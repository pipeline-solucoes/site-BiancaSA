'use client';

import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { styled, Typography, useTheme } from '@mui/material';
import { ImageCard, Location, MapCard, ShadowCard } from 'pipesolcomponents';
import PlaceIcon from '@mui/icons-material/Place';
import { sombraClara, sombraEscura } from '@/constants';

const ContentCard = styled('div', {
  shouldForwardProp: (prop) =>
    !['width', 'height'].includes(prop as string),
})<{  
  width: string;
  height: string;
}>(({ width, height }) => ({
  width: width,
  height: height,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',  
  padding: '16px',
  gap: '16px'  
}));

const ContentCardMapa = styled('div', {
  shouldForwardProp: (prop) =>
    !['width', 'height'].includes(prop as string),
})<{  
  width: string;
  height: string;
}>(({ width, height }) => ({   
 width: width,
  height: height,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',    
  gap: '16px'  
}));

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
  isXs: boolean,
  isSm: boolean, 
}

const CardAtendimento : React.FC<CardBookProps> = ({src, srcMap, alt, titulo, text, endereco, bairro, cidade, uf, cep, isXs, isSm})  => {

  const theme = useTheme();
  const colorText = theme.palette.text.secondary;
  const border_radius = '20px';
  
  const flex_direction = isSm ? 'row' : 'column';
  const width_card = (isXs) ? 340 : (isSm ? 500 : 380);
  const height_image = isSm ? 200 : 300;
  
    
  if (src)
  {
    const widthImage = (isXs) ? 300 : (isSm ? 241 : 340);
    const height_content_card = isSm ? '200px' : '156px';
    const width_content_card = isSm ? '216px' : '100%';

    return (      
        <ShadowCard 
          border_radius={border_radius} 
          sombraClara={sombraClara} 
          sombraEscura={sombraEscura} 
          height='fit-content'
          width={`${width_card}px`}>
          <ImageCard src={src} alt={alt} flex_direction={flex_direction}
            widthImage={widthImage} heightImage={height_image} 
            border_radius={border_radius} 
            background_color={theme.palette.custom.backgroundSectionAlternative}>          
            <ContentCard width={width_content_card} height={height_content_card} >
              <Titulo>{titulo}</Titulo>              
              <Typography variant='body1' component='p' color={colorText}>{text}</Typography>                          
            </ContentCard>
          </ImageCard> 
        </ShadowCard>             
    );
  }

  else if (srcMap) {

    const widthImage = (isXs) ? 300 : (isSm ? 241 : 340);
    const height_content_card = isSm ? '160px' : '116px'; 
    const width_content_card = isSm ? '200px' : '100%';   

    return (      
        <ShadowCard 
          border_radius={border_radius} 
          sombraClara={sombraClara} 
          sombraEscura={sombraEscura} 
          height='fit-content'
          width={`${width_card}px`}
        >
          <MapCard flex_direction={flex_direction} 
            srcGoogle={srcMap} 
            titleFrame={alt}        
            width_map={`${widthImage}px`} height_map={`${height_image}px`}
            border_radius={border_radius} 
            background_color={theme.palette.custom.backgroundSectionAlternative}
            root_margin='600px'
            >          
            <ContentCardMapa width={width_content_card} height={height_content_card}>
              <Titulo>{titulo}</Titulo>                        
              { endereco && bairro && cidade && uf && cep &&
                <Location textColor={colorText}  
                  endereco={endereco} bairro={bairro} cidade={cidade} uf={uf} cep={cep}
                  Icon={PlaceIcon} iconColor={theme.palette.primary.main}
                />  
              }                
            </ContentCardMapa>  
          </MapCard>
        </ShadowCard>                
    );
  }
  
};

export default CardAtendimento;