'use client';

import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { styled, Typography, useTheme } from '@mui/material';
import { ImageCard, Location, MapCard, ShadowCard } from 'pipesolcomponents';
import PlaceIcon from '@mui/icons-material/Place';
import { sombraClara, sombraEscura } from '@/constants';

const ContentCard = styled('div')({   
  width: '300px',
  height: '156px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',  
  padding: '16px',
  gap: '16px'  
});

const ContentCardMapa = styled('div')({   
  width: '100%',
  height: '116px',
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
  width: string; 
}

const CardAtendimento : React.FC<CardBookProps> = ({src, srcMap, alt, titulo, text, endereco, bairro, cidade, uf, cep, width})  => {

  const theme = useTheme();
  const colorText = theme.palette.text.secondary;
  
  if (src)
  {
    const widthImage = (width == '340px') ? 300 : 340 ;

    return (      
        <ShadowCard 
          border_radius='20px' 
          sombraClara={sombraClara} 
          sombraEscura={sombraEscura} 
          height='fit-content'
          width={width}>
          <ImageCard src={src} alt={alt}
            widthImage={widthImage} heightImage={300} 
            border_radius='20px' 
            background_color={theme.palette.custom.backgroundSectionAlternative}>          
            <ContentCard>
              <Titulo>{titulo}</Titulo>              
              <Typography variant='body1' component='p' color={colorText}>{text}</Typography>                          
            </ContentCard>
          </ImageCard> 
        </ShadowCard>             
    );
  }

  else if (srcMap) {
    return (      
        <ShadowCard 
          border_radius='20px' 
          sombraClara={sombraClara} 
          sombraEscura={sombraEscura} 
          height='fit-content'
          width={width}
        >
          <MapCard 
            srcGoogle={srcMap} 
            titleFrame={alt}        
            width="100%" height_map="300px" 
            border_radius='20px' 
            background_color={theme.palette.custom.backgroundSectionAlternative}                        
            >          
            <ContentCardMapa>
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