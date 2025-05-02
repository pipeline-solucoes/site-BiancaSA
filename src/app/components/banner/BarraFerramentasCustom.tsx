'use client';

import { BarraDeFerramentas, BarraFerramentasHamburguer } from 'pipesolcomponents';
import React from 'react';
import SocialMedia from '../contatos/SocialMedia';
import MenuIcon from '@mui/icons-material/Menu';
import { ItemMenuProps } from 'pipesolcomponents/dist/components/menu/ItemMenuProps';
import { useTheme } from '@mui/material';

interface BarraFerramentasCustomProps{
  isXs: boolean,
  isSm: boolean,   
  itens_menu: ItemMenuProps[]; 
}

const BarraFerramentasCustom: React.FC<BarraFerramentasCustomProps> = ({isXs, isSm, itens_menu}) => { 

  const theme = useTheme();

    if (isXs || isSm)
    {
      return(
        <BarraFerramentasHamburguer
          background_color={theme.palette.custom.backgroundSectionMain}
          color={theme.palette.primary.dark}
          color_hover={theme.palette.primary.main}                                     
          renderSocialMedia={() => <SocialMedia position="barraFerramentas"></SocialMedia> }          
          listaItemMenu={itens_menu}
          renderLogo={() => <></>}        
          renderImageHamburguer={() => 
            <MenuIcon 
              style={{fontSize: 24, color: theme.palette.primary.main}}>
            </MenuIcon>}      
        >
       </BarraFerramentasHamburguer>                                                           
      );   
    }
    else{
      return(
        <BarraDeFerramentas
          background_color={theme.palette.custom.backgroundSectionMain}
          color={theme.palette.primary.dark}
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