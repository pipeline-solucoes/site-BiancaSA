"use client";

import { ContainerAnimatedScroll, ContentSectionWrapStyled, NavigationButton, Section } from "pipesolcomponents";
import { Typography, useTheme } from "@mui/material";
import TitleSection from "../components/TitleSection";
import CardAtendimento from "../components/cardAtendimento";

interface SecaoAtendimentoProps{
  isXs: boolean,
  isSm: boolean,
}

const SecaoAtendimento: React.FC<SecaoAtendimentoProps> = ({isXs, isSm}) => {

  const theme = useTheme();  
  const alignTitle = (isXs) ? 'left' : 'center';

  return (
    <Section section_id="atendimento" background_color={theme.palette.custom.backgroundSectionAlternative}>      

      <ContainerAnimatedScroll>

        <TitleSection align={alignTitle} 
          title_text="Atendimento Personalizado" 
          subtitle_text="No Conforto do Seu Lar ou No Consultório">
        </TitleSection>        

        <ContentSectionWrapStyled marginTop="30px" marginBottom="30px">
          <CardAtendimento isXs={isXs} isSm={isSm} 
            alt="atendimento" 
            src="/atendimento-domiciliar.webp" 
            titulo="Domiciliar" 
            text="Realizo atendimento domiciliar em Niterói, Tijuca e Zona Sul do Rio de Janeiro.">        
          </CardAtendimento>        
          <CardAtendimento  isXs={isXs} isSm={isSm}
            srcMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.6878355902954!2d-43.23473182531663!3d-22.924882079242433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e6aa100fadb%3A0x700211b48320a812!2sShopping%2045!5e0!3m2!1spt-BR!2sbr!4v1746458726230!5m2!1spt-BR!2sbr"
            alt="Atendimento consultório Tijuca"           
            titulo="Tijuca" 
            endereco="Pr. Saenz Peña, 45"
            bairro="Tijuca"
            cidade="Rio de Janeiro"
            uf="RJ"
            cep="20520-901">
          </CardAtendimento>              
          <CardAtendimento  isXs={isXs} isSm={isSm} 
            alt="Atendimento consultório São Gonçalo"             
            srcMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117652.20006841299!2d-43.209280103317504!3d-22.85312829351251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x999af531d40b61%3A0xbbdbe1fcd22771e8!2sIcon%20Business%20%26%20Mall!5e0!3m2!1spt-BR!2sbr!4v1746460045180!5m2!1spt-BR!2sbr"
            titulo="São Gonçalo" 
            endereco="Av. Pres. Kennedy, 735"
            bairro="Estrela do Norte"
            cidade="São Gonçalo"
            uf="RJ"
            cep="24445-795">
          </CardAtendimento>
        </ContentSectionWrapStyled>

      </ContainerAnimatedScroll>  
                
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