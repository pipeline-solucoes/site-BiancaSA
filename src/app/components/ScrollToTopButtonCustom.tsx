'use client';

import { ScrollToTopButton } from 'pipesolcomponents';
import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useTheme } from '@mui/material';

const ScrollToTopButtonCustom: React.FC = () => {   
    
    const theme = useTheme();
    const colorIcon: string = theme.palette.primary.contrastText || '#000000'

    return(
        <ScrollToTopButton show={false}
            background_color={theme.palette.secondary.main} 
            background_color_hover={theme.palette.secondary.main} 
            border_radius="10px">   
            <ArrowUpwardIcon sx={{ color: colorIcon, fontSize: 24}}></ArrowUpwardIcon>                          
        </ScrollToTopButton>
    );         
};

export default ScrollToTopButtonCustom;