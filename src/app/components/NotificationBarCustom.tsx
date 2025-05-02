'use client';

import { urlPoliticaPrivacidade, urlTermoUso } from '@/constants';
import { Typography, useTheme } from '@mui/material';
import { NotificationBar, NavigationButton } from 'pipesolcomponents';
import React from 'react';

const NotificationBarCustom: React.FC = () => {            

    const theme = useTheme();
    return(
        <NotificationBar show={true} background_color="#FFFFFF"  
            background_color_button={theme.palette.secondary.main} 
            color_button={theme.palette.secondary.contrastText} 
            text_button_accept="Aceitar" text_button_notaccept="Rejeitar"
            border_radius_button={theme.palette.custom.borderRadiusButtonCTA}>

            <Typography variant="body1" component="div" color={theme.palette.text.primary}>
            
            Este site usa cookies e dados pessoais de acordo com os 
            nossos <NavigationButton width='auto' url={urlTermoUso} layout='link' color={theme.palette.secondary.main} 
            text_decoration="none" aria_label='link termo de uso'>
            Termo de Uso</NavigationButton> e  <NavigationButton 
            width='auto' url={urlPoliticaPrivacidade} layout='link' color={theme.palette.secondary.main} 
            text_decoration="none" aria_label='link politica de privacidade'>Política de Privacidade</NavigationButton> e, 
            ao continuar navegando neste site, você declara estar ciente dessas condições.

            </Typography>  
        </NotificationBar>                
    );         
};

export default NotificationBarCustom;