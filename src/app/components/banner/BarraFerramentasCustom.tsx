'use client';

import { BarraDeFerramentas, BarraFerramentasHamburguer, ItemMenuConfig } from 'pipesolcomponents';
import React from 'react';
import SocialMedia from '../contatos/SocialMedia';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material';

interface BarraFerramentasCustomProps{
  isXs: boolean,
  isSm: boolean,   
  itens_menu: ItemMenuConfig[]; 
}

const BarraFerramentasCustom: React.FC<BarraFerramentasCustomProps> = ({isXs, isSm, itens_menu}) => { 

  const theme = useTheme();

    if (isXs || isSm)
    {
      return(
        <BarraFerramentasHamburguer
          background_color='transparent'
          color={theme.palette.text.primary}
          color_hover={theme.palette.primary.main}                                     
          renderSocialMedia={() => <SocialMedia position="barraFerramentas"></SocialMedia> }          
          listaItemMenu={itens_menu}
          renderLogo={() => <></>}        
          renderImageHamburguer={() => 
            <MenuIcon 
              style={{fontSize: 24, color: theme.palette.primary.dark}}>
            </MenuIcon>}      
        >
       </BarraFerramentasHamburguer>                                                           
      );   
    }
    else{
      return(
        <BarraDeFerramentas
          background_color='transparent'
          color={theme.palette.text.primary}
          color_hover={theme.palette.primary.main}        
          text_decoration="none"                    
          renderLogo={() => <></> }
          renderSocialMedia={() => <SocialMedia position="barraFerramentas"></SocialMedia> }        
          listaItemMenu={itens_menu}>
        </BarraDeFerramentas>                                                         
      );           
    }   
};

export default BarraFerramentasCustom;