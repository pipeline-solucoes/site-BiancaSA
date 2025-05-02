'use client';

import { ContentColFooter, Footer, TitleFooterStyle } from 'pipesolcomponents';
import React, { ReactElement } from 'react';
import Copywriter from './Copywriter';
import { Box, useTheme } from '@mui/material';
import SocialMedia from '../contatos/SocialMedia';
import Email from '../contatos/Email';


const FooterCustomTermoPolitica: React.FC = () => { 
    
  const theme = useTheme();

    const renderColunas = (): ReactElement => {
      
      const textColor = theme.palette.primary.contrastText;

      return (                      
          <Box flex={1}>
            <ContentColFooter>
              <TitleFooterStyle textColor={textColor}>
                CONTATOS
              </TitleFooterStyle>                 
              <Email color={textColor} />
              <SocialMedia position='footer' />                                                     
            </ContentColFooter>
          </Box>                                  
        );    
    }
   
   return(
      <Footer background_color={theme.palette.primary.dark}
        renderColunas={renderColunas}           
        renderCopywriter={() => <Copywriter></Copywriter>}>
      </Footer>
       
   );         
};

export default FooterCustomTermoPolitica;