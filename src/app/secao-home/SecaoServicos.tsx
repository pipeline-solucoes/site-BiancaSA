"use client";

import { Section } from "pipesolcomponents";
import { useTheme } from "@mui/material";
import TitleSectionCenter from "../components/TitleSectionCenter";



const SecaoServicos: React.FC = () => {

  const theme = useTheme();
  

  return (
    <Section section_id="atendimento" background_color={theme.palette.custom?.backgroundSectionAlternative}>
      
      <TitleSectionCenter title_text="Serviços">
      </TitleSectionCenter>

      <br></br>

    </Section>            
  );  
};

export default SecaoServicos;