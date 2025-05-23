'use client';

import { styled, Typography, useTheme } from '@mui/material';
import { SocialMediaIconLinkWithBorder } from 'pipesolcomponents';
import InstagramIcon from '@mui/icons-material/Instagram';
import * as React from 'react';
import { urlInstagram } from '../../../constants';

const Container = styled('div')({  
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'center',
    alignItems: 'center',    
    width: '100%',
    gap: '8px'
  });

export interface SocialMediaProps {
  position: 'footer' | 'faleconosco' | 'menu' | 'barraFerramentas';
}

const SocialMedia: React.FC<SocialMediaProps> = ({position}) => {
  
  const theme = useTheme();

  const color = (position == 'footer') ? theme.palette.primary.dark :  theme.palette.primary.contrastText;
  const background = (position == 'footer') ? theme.palette.primary.contrastText : theme.palette.primary.main;  
  
  return(
    <Container>
      {position != 'barraFerramentas' && <Typography variant='body1' component='div' color={background}>Siga e compartilhe:</Typography>}
      <SocialMediaIconLinkWithBorder url={urlInstagram} background_color={background}  
        aria_label='botao instagram' >
        <InstagramIcon sx={{ color: color, fontSize: 24 }} ></InstagramIcon>
      </SocialMediaIconLinkWithBorder>
    </Container>
  );

};

export default SocialMedia;
