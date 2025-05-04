"use client";

import { ContentSectionWrapStyled, Section } from "pipesolcomponents";
import { useTheme } from "@mui/material";
import TitleSectionCenter from "../components/TitleSectionCenter";
import CardAtendimento from "../components/cardAtendimento";



const SecaoAtendimento: React.FC = () => {

  const theme = useTheme();
  

  return (
    <Section section_id="atendimento" background_color={theme.palette.custom?.backgroundSectionAlternative}>
      
      <TitleSectionCenter 
        title_text="Atendimento Personalizado" 
        subtitle_text="No Conforto do Seu Lar ou No Consultório">
      </TitleSectionCenter>

      <br></br>

      <ContentSectionWrapStyled>

        <CardAtendimento 
          alt="atendimento" 
          src="/atendimento-domiciliar.jpeg" 
          titulo="Domiciliar" 
          text="Realizo atendimento domiciliar em Niterói, São Gonçalo e em toda a região do Grande Rio.">        
        </CardAtendimento>

        <CardAtendimento 
          alt="atendimento" 
          src="/fachada-consultorio.png" 
          titulo="Tijuca" 
          endereco="Rua XPT, 123 sala 05"
          bairro="Tijuca"
          cidade="Rio de Janeiro"
          uf="RJ"
          cep="99999-650">        
        </CardAtendimento>

        <CardAtendimento 
          alt="atendimento" 
          src="/fachada-consultorio.png" 
          titulo="São Gonçalo" 
          endereco="Rua XPT, 123 sala 05"
          bairro="Centro"
          cidade="São Gonçalo"
          uf="RJ"
          cep="99999-650">
        </CardAtendimento>

      </ContentSectionWrapStyled>

    </Section>            
  );  
};

export default SecaoAtendimento;