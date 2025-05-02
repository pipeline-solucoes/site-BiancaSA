'use client';

import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { IconText } from 'pipesolcomponents';
import { Typography, useTheme } from '@mui/material';


interface TextWithCheckProps {
  children: string[];
}

const TextWithCheck: React.FC<TextWithCheckProps> = ({ children }) => {

  const theme = useTheme();
  const colorText = theme.palette.text.primary || '#000000'; 
  const colorIcon = theme.palette.secondary.main || '#000000'; 

  return (
    <Typography variant='body1' component="div" color={colorText} marginLeft="16px">
      {children.map((child, index) => (
        <IconText
          key={index} 
          renderIcon={() => ( <CheckIcon style={{ color: colorIcon, fontSize: 24 }} /> )}
        >
          {child}
        </IconText>
      ))}
    </Typography>
  );
};

export default TextWithCheck;