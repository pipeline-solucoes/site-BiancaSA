'use client';

import { Stack, useTheme } from '@mui/material';
import { SocialMediaIconLinkWithBorder, WhatsAppIcon } from 'pipesolcomponents';
import InstagramIcon from '@mui/icons-material/Instagram';
import * as React from 'react';
import { numberWhatsapp } from '@/constants';


export interface SocialMediaProps {
  position: 'footer' | 'faleconosco' | 'menu' | 'barraFerramentas';
}

const SocialMedia: React.FC<SocialMediaProps> = ({position}) => {
  
  const theme = useTheme();

  let color = theme.palette.primary.dark;
  let backgroundColor = 'transparent';
  if (position == 'footer'){
    color = theme.palette.primary.contrastText;
    backgroundColor = '#ffffff50'
  }
    
  const urlInstagram = "https://www.instagram.com/biancasouzaaguiarfisio/";

  return(
    <Stack direction="row" sx={{ gap: '16px' }}>

      <SocialMediaIconLinkWithBorder url={urlInstagram} background_color={backgroundColor}
        aria_label='botao instagram' >
        <InstagramIcon sx={{ color: color, fontSize: 24 }} ></InstagramIcon>
      </SocialMediaIconLinkWithBorder>       

      {(position == 'footer' || position == 'faleconosco') &&
        <WhatsAppIcon whatsapp={numberWhatsapp} ></WhatsAppIcon>
      } 

    </Stack>
  );

};

export default SocialMedia;
