import { IconText } from 'pipesolcomponents';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { email } from '@/constants';

export interface EmailProps {          
    color: string;    
}

const Email: React.FC<EmailProps> = ({color}) => {                

    return(
      <IconText Icon={EmailIcon} color_icon={color} color_text={color}>
        {email}
      </IconText>
    );         
};

export default Email;