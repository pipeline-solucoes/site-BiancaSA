import React from 'react';
import { TextWithSeparador, TitleBanner } from 'pipesolcomponents';
import { Typography, useTheme } from '@mui/material';
import { subTituloBanner, tituloBanner } from '@/constants';

const TitleBannerSemCTA: React.FC = () => {            

    const theme = useTheme();
    const color: string = theme.palette.primary.contrastText;
                          
    return (        
        <TitleBanner             
            width='fit-content' 
            textTitle={() => <Typography variant='h1' component='h1' color={color}>{tituloBanner}</Typography> }                                 
            renderSubtitle={() => 
                <TextWithSeparador color_separador={color}>
                    <Typography variant='h2' component='h2' color={color}>{subTituloBanner}</Typography>
                </TextWithSeparador>
            }>                                     
        </TitleBanner>               
    );
};

export default TitleBannerSemCTA;