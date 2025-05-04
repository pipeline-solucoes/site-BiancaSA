'use client';

import { Stack, useTheme } from '@mui/material';
import { SocialMediaIconLinkWithBorder } from 'pipesolcomponents';
import InstagramIcon from '@mui/icons-material/Instagram';
import * as React from 'react';
import { urlInstagram } from '../../../constants';

export interface SocialMediaProps {
  position: 'footer' | 'faleconosco' | 'menu' | 'barraFerramentas';
}

const SocialMedia: React.FC<SocialMediaProps> = ({position}) => {
  
  const theme = useTheme();

  let color = theme.palette.primary.main;
  let backgroundColor = 'transparent';
  if (position == 'footer'){
    color = theme.palette.primary.contrastText;
    backgroundColor = '#ffffff50'
  }

  return(
    <Stack direction="row" sx={{ gap: '16px' }}>

      <SocialMediaIconLinkWithBorder url={urlInstagram} background_color={backgroundColor}
        aria_label='botao instagram' >
        <InstagramIcon sx={{ color: color, fontSize: 24 }} ></InstagramIcon>
      </SocialMediaIconLinkWithBorder>

    </Stack>
  );

};

export default SocialMedia;
