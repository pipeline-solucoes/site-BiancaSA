"use client";

import { ContentSectionWrapStyled, NavigationButton, Section } from "pipesolcomponents";
import { Typography, useTheme } from "@mui/material";
import TitleSectionCenter from "../components/TitleSectionCenter";
import CardAtendimento from "../components/cardAtendimento";



const SecaoAtendimento: React.FC = () => {

  const theme = useTheme();
  

  return (
    <Section section_id="atendimento" background_color={theme.palette.custom.backgroundSectionAlternative}>
      
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
          srcMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.6878355902954!2d-43.23473182531663!3d-22.924882079242433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e6aa100fadb%3A0x700211b48320a812!2sShopping%2045!5e0!3m2!1spt-BR!2sbr!4v1746458726230!5m2!1spt-BR!2sbr"
          alt="atendimento"           
          titulo="Tijuca" 
          endereco="Pr. Saenz Peña, 45"
          bairro="Tijuca"
          cidade="Rio de Janeiro"
          uf="RJ"
          cep="20520-901">
        </CardAtendimento>
             
        <CardAtendimento 
          alt="atendimento" 
          srcMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117652.20006841299!2d-43.209280103317504!3d-22.85312829351251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x999af531d40b61%3A0xbbdbe1fcd22771e8!2sIcon%20Business%20%26%20Mall!5e0!3m2!1spt-BR!2sbr!4v1746460045180!5m2!1spt-BR!2sbr"
          titulo="São Gonçalo" 
          endereco="Av. Pres. Kennedy, 735"
          bairro="Estrela do Norte"
          cidade="São Gonçalo"
          uf="RJ"
          cep="24445-795">
        </CardAtendimento>

      </ContentSectionWrapStyled>
      
      <br/>
      <NavigationButton 
          url="#formulario"             
          width="auto"
          background_color={theme.palette.custom.backgroundButtonCTA} 
          background_color_hover={theme.palette.custom.backgroundHoverButtonCTA}
          color={theme.palette.custom.colorButtonCTA} 
          border_radius={theme.palette.custom.borderRadiusButtonCTA}
          aria_label='botao CTA Agendar Avaliação'
          layout='button'
          text_decoration='none'>
          <Typography variant='body1'>Quero Agendar Avaliação</Typography>
      </NavigationButton>

    </Section>            
  );  
};

export default SecaoAtendimento;