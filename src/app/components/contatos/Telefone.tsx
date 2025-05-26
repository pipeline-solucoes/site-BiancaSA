import { IconText } from 'pipesolcomponents';
import React from 'react';
import { numberPhone } from '@/constants';
import { PhoneEnabled } from '@mui/icons-material';

export interface EmailProps {          
    color: string;    
}

const Telefone: React.FC<EmailProps> = ({color}) => {                

    return(
      <IconText Icon={PhoneEnabled} color_icon={color} color_text={color}>
        {numberPhone}
      </IconText>       
    );         
};

export default Telefone;