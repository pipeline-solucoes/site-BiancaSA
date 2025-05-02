import { Typography, useTheme } from '@mui/material';
import React from 'react';

interface TitleSectionProps {  
    children: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({children}) => {            

    const theme = useTheme();
    return(
        <Typography variant='h3' component="h3" color={theme.palette.primary.main} 
            sx={{ width: '100%' }}>
        {children}
        </Typography>
    );         
};

export default TitleSection;