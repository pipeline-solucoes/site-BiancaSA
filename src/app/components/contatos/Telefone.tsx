import { IconText } from 'pipesolcomponents';
import React from 'react';
import { Typography } from '@mui/material';
import { numberPhone } from '@/constants';
import { PhoneEnabled } from '@mui/icons-material';

export interface EmailProps {          
    color: string;    
}

const Telefone: React.FC<EmailProps> = ({color}) => {                

    const colorIcon : string = color || '#000000'

    return(
      <IconText
        renderIcon={() => <PhoneEnabled sx={{ color: colorIcon, fontSize: 24 }}></PhoneEnabled> }>
        <Typography variant='body1' component="span" color={color}>{numberPhone}</Typography>
      </IconText>
    );         
};

export default Telefone;