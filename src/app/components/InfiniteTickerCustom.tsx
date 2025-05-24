import React from 'react';
import {InfiniteTicker } from 'pipesolcomponents';
import { useTheme } from '@mui/material';

const InfiniteTickerCustom: React.FC = () => { 
    
    const theme = useTheme();

    return (
       <InfiniteTicker
        items={[
            'Cuidados Paliativos',
            'Fotobiomodulação',
            'Perícia Judicial',
            'Pós Operatório',
            'Pré Habilitação',
            'Reabilitação',
            'Reabilitação Geriátrica',
            'Reabilitação Oncológica',
            'Tratamento de Disfunções Linfáticas',
            'Tratamento de Disfunções Vasculares', 
            'Tratamento da Neuropatia Periférica'
        ]}
        backgroundColor={theme.palette.primary.main}
        textColor={theme.palette.primary.contrastText}
        speed={60}
        repeatCount={10}
      />      
    );
                            
};

export default InfiniteTickerCustom;