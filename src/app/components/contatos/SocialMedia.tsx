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
    gap: '4px'
  });

export interface SocialMediaProps {
  position: 'footer' | 'faleconosco' | 'menu' | 'barraFerramentas';
}

const SocialMedia: React.FC<SocialMediaProps> = ({position}) => {
  
  const theme = useTheme();

  let color = theme.palette.primary.main;
  if (position == 'footer'){
    color = theme.palette.primary.contrastText;
  }
  else if (position == 'barraFerramentas'){
    color = theme.palette.primary.dark;
  }

  return(
    <Container>
      {position != 'barraFerramentas' && <Typography variant='body1' component='div' color={color}>Siga e compartilhe:</Typography>}
      <SocialMediaIconLinkWithBorder url={urlInstagram} background_color="transparent"
        aria_label='botao instagram' >
        <InstagramIcon sx={{ color: color, fontSize: 32 }} ></InstagramIcon>
      </SocialMediaIconLinkWithBorder>
    </Container>
  );

};

export default SocialMedia;
