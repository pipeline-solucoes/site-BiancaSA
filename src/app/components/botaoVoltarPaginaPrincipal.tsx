'use client';

import { Box, Typography, useTheme } from '@mui/material';
import { NavigationButton } from 'pipesolcomponents';
import React from 'react';

const BotaoVoltarPaginaPrincipal: React.FC = () => {            

    const theme = useTheme();
    return(
       
        <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'flex-end'} marginTop={'32px'}>
            
            <NavigationButton width='fit-content' url="/"
                color={theme.palette.primary.main}  
                text_decoration="none" 
                layout='button'
                border_color={theme.palette.primary.main}
                border_radius={theme.palette.custom.borderRadiusButtonCTA}
                aria_label='link voltar para pagina principal'>

                <Typography variant="body1" component="span">
                    Voltar para a página principal
                </Typography>

            </NavigationButton>
            
        </Box>
    );         
};

export default BotaoVoltarPaginaPrincipal;