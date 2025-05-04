"use client";

import { ContentSectionWrapStyled, NavigationButtonMotion, Section } from "pipesolcomponents";
import {Typography, useTheme } from "@mui/material";
import TitleSectionCenter from "../components/TitleSectionCenter";
import { ItemMenuProps } from "pipesolcomponents/dist/components/menu/ItemMenuProps";

export const servicos : ItemMenuProps[] = [
    {url: '#sobre', text: 'Cuidados Paliativos'},
    {url: '#sobre', text: 'Fotobiomodulação'},
    {url: '#sobre', text: 'Perícia Judicial'},
    {url: '#sobre', text: 'Pós Operatório'},
    {url: '#sobre', text: 'Pré Habilitação'},
    {url: '#sobre', text: 'Reabilitação'},
    {url: '#sobre', text: 'Reabilitação Oncológica'},
    {url: '#sobre', text: 'Reabilitação Geriátrica'},
    {url: '#sobre', text: 'Tratamento de Disfunções Linfáticas'},
    {url: '#sobre', text: 'Tratamento de Disfunções Vasculares'},
    {url: '#sobre', text: 'Tratamento da Neuropatia Periférica'},    
  ];        

const SecaoServicos: React.FC = () => {

  const theme = useTheme();
  const backgroundcolor = theme.palette.primary.light;
  const textcolor = theme.palette.primary.contrastText;
  
  return (
    <Section section_id="servicos" background_color={theme.palette.custom?.backgroundSectionAlternative}>
      
      <TitleSectionCenter title_text="Serviços" subtitle_text="Atendimento em consultório e domicílio, com foco em excelência e cuidado humanizado.">
      </TitleSectionCenter>

      <br/>      

      <ContentSectionWrapStyled>

        {servicos.map((item, index) => (
                    
            <NavigationButtonMotion
              key={index}
              url={item.url}             
              width="230px"   
              height="120px"           
              background_color={backgroundcolor} 
              background_color_hover={backgroundcolor}
              color={textcolor} 
              border_radius='10px'
              aria_label='botao serviço'
              layout='button'
              text_decoration='none'             
            >
              <Typography variant='h4'>{item.text}</Typography>
            </NavigationButtonMotion>
                   
        ))}

      </ContentSectionWrapStyled>

    </Section>            
  );  
};

export default SecaoServicos;