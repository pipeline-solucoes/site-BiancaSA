import { IconText } from 'pipesolcomponents';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { Typography } from '@mui/material';

export interface EmailProps {          
    color: string;    
}

const Email: React.FC<EmailProps> = ({color}) => {                

    const colorIcon : string = color || '#000000'

    return(
      <IconText
        renderIcon={() => <EmailIcon sx={{ color: colorIcon, fontSize: 24 }}></EmailIcon> }>
        <Typography variant='body1' component="span" color={color}>contato@biancasouzaaguiar.com.br</Typography>
      </IconText>
    );         
};

export default Email;