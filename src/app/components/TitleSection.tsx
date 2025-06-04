import { styled, Typography, useTheme } from '@mui/material';
import React from 'react';

interface TitleSectionProps {  
    title_text: string;
    subtitle_text?: string;
    align: 'left' | 'center';
    color?: string;
}

export const Container = styled('div', {
  shouldForwardProp: (prop) =>
    !['align'].includes(prop as string),
})<{  
  align: 'left' | 'center';  
}>(({ align }) => ({     
    display: 'flex',
    flexDirection: 'column',    
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: '8px',
    textAlign: align
  }));

const TitleSection: React.FC<TitleSectionProps> = ({title_text, subtitle_text, align = "left", color}) => {            

    const theme = useTheme();
    const colorTitle = color ? color : theme.palette.primary.main;
    const colorSubTitle = color ? color : theme.palette.text.primary;
    
    return(
        <Container align={align}>
            <Typography variant='h3' component="h3" color={colorTitle} sx={{ width: '100%' }}>
                {title_text}
            </Typography>
            {   subtitle_text &&
                <Typography variant='h4' component="h4" color={colorSubTitle} sx={{ width: '100%' }}>
                    {subtitle_text}
                </Typography>
            }
        </Container>
    );         
};

export default TitleSection;