'use client';

import { ContentColFooter, Footer, NavigationButton, SiteMap, TitleFooterStyle } from 'pipesolcomponents';
import React, { ReactElement } from 'react';
import Copywriter from './Copywriter';
import { Box, Typography, useTheme } from '@mui/material';
import { ItemMenuProps } from 'pipesolcomponents/dist/components/menu/ItemMenuProps';
import SocialMedia from '../contatos/SocialMedia';
import Email from '../contatos/Email';

interface FooterCustomProps{
  itens_menu: ItemMenuProps[];   
}

const FooterCustom: React.FC<FooterCustomProps> = ({itens_menu}) => { 
    
  const theme = useTheme();

    const renderColunas = (): ReactElement => {
      
      const textColor = theme.palette.primary.contrastText;
      const urlTermoUso: string = "/termo";
      const urlPoliticaPrivacidade: string = "/politica";

      return (
          <>
            <Box flex={1}>
              <ContentColFooter>
                <TitleFooterStyle textColor={textColor}>
                  Institucional
                </TitleFooterStyle> 
                <SiteMap listaItemMenu={itens_menu} 
                  color={textColor} 
                  color_hover={textColor}>
                </SiteMap>                      
              </ContentColFooter>
            </Box>

            <Box flex={1}>
              <ContentColFooter>
                <TitleFooterStyle textColor={textColor}>
                  Termos e Política
                </TitleFooterStyle> 
                <Box display="flex" flexDirection="column" alignItems='flex-start'>
                  <NavigationButton width='auto'
                      url={urlTermoUso} layout='link' 
                      color={theme.palette.primary.contrastText} 
                      color_hover={theme.palette.primary.contrastText} 
                      text_decoration='none' 
                      aria_label='link termos de uso'
                    >
                    <Typography variant="body1" component="span" color={theme.palette.secondary.contrastText}>Termos de Uso</Typography>
                  </NavigationButton>                  
                  <NavigationButton width='auto'
                      url={urlPoliticaPrivacidade} layout='link'               
                      color={theme.palette.primary.contrastText} 
                      color_hover={theme.palette.primary.contrastText}
                      text_decoration='none'
                      aria_label='link politica de privacidade'
                    > 
                    <Typography variant="body1" component="span" color={theme.palette.secondary.contrastText}>Política de Privacidade</Typography>
                  </NavigationButton>                
                </Box>                                      
              </ContentColFooter>
            </Box>

            <Box flex={1}>
              <ContentColFooter>
                <TitleFooterStyle textColor={textColor}>
                  Contatos
                </TitleFooterStyle>                 
                <Email color={textColor} />
                <SocialMedia position='footer' />                                                     
              </ContentColFooter>
            </Box>            
          </>
        );    
    }
   
   return(
       <Footer background_color={theme.palette.primary.dark}
           renderColunas={renderColunas}           
           renderCopywriter={() => <Copywriter></Copywriter>}>
       </Footer>
       
   );         
};

export default FooterCustom;