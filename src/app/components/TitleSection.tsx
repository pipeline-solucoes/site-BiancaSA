import { styled, Typography, useTheme } from '@mui/material';
import React from 'react';

interface TitleSectionProps {  
    title_text: string;
    subtitle_text?: string;
}

export const Container = styled('div')(() => ({    
    display: 'flex',
    flexDirection: 'column',    
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    gap: '8px',
  }));

const TitleSection: React.FC<TitleSectionProps> = ({title_text, subtitle_text}) => {            

    const theme = useTheme();
    return(
        <Container>
            <Typography variant='h3' component="h3" color={theme.palette.primary.main} 
                sx={{ width: '100%' }}>
                {title_text}
            </Typography>
            {   subtitle_text &&
                <Typography variant='h4' component="h4" color={theme.palette.text.primary} 
                    sx={{ width: '100%' }}>
                    {subtitle_text}
                </Typography>
            }
        </Container>
    );         
};

export default TitleSection;