import React from 'react';
import {InfiniteTicker, ShadowCard } from 'pipesolcomponents';
import { useTheme } from '@mui/material';
import { sombraClara, sombraEscura } from '@/constants';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

const InfiniteTickerCustom: React.FC = () => { 
    
    const theme = useTheme();

    return (
        <ShadowCard 
            border_radius="20px"
            sombraClara={sombraClara} 
            sombraEscura={sombraEscura} 
            height='fit-content'
            width="100%"
            padding='24px 48px'
            margin='0px'
            background_color={theme.palette.custom.backgroundSectionMain}
            >   
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
              backgroundColor="transparent"
              textColor={theme.palette.text.primary}
              speed={60}
              repeatCount={10}    
              Icon={BubbleChartIcon}          
            />               
        </ShadowCard>      
    );
                            
};

export default InfiniteTickerCustom;