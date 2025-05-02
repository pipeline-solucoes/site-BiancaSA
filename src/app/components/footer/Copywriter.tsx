import { useTheme } from '@mui/material';
import { Copywrite } from 'pipesolcomponents';
import React from 'react';


const Copywriter: React.FC = () => {            

    const theme = useTheme();
    

    return(
      <Copywrite ano="2025" 
          color={theme.palette.primary.contrastText} 
          color_link_pipeline={theme.palette.primary.light} 
          color_border={theme.palette.primary.contrastText}>                 
      </Copywrite>
    );         
};

export default Copywriter;