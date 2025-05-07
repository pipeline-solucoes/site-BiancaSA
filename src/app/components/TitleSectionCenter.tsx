import { styled, Typography, useTheme } from '@mui/material';
import React from 'react';

interface TitleSectionProps {  
    title_text: string;
    subtitle_text?: string; 
    color_default?: boolean;    
}

export const Container = styled('div')(() => ({    
    display: 'flex',
    flexDirection: 'column',    
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: '8px',
  }));

const TitleSectionCenter: React.FC<TitleSectionProps> = ({title_text, subtitle_text, color_default = true}) => {            

    const theme = useTheme();

    const colorTitle = color_default ? theme.palette.primary.main : theme.palette.primary.dark;
    const colorSubTitle = color_default ? theme.palette.text.primary : theme.palette.primary.dark;

    return(
        <Container>
            <Typography variant='h3' component="h3" color={colorTitle} 
                sx={{ width: 'auto' }}>
                {title_text}
            </Typography>
            {   subtitle_text &&
                <Typography variant='h4' component="h4" color={colorSubTitle} 
                    sx={{ width: 'auto' }}>
                    {subtitle_text}
                </Typography>
            }
        </Container>
    );         
};

export default TitleSectionCenter;