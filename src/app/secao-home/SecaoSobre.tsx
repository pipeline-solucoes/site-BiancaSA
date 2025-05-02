"use client";

import { ContentSectionWrapStyled, ImageWithPlaceHolder, Section, SectionTextColumnStyle } from "pipesolcomponents";
import { useTheme } from "@mui/material";
import TitleSection from "../components/TitleSection";

interface SecaoSobreProps {  
  isXs: boolean,
  isSm: boolean
}

const SecaoSobre: React.FC<SecaoSobreProps> = ({isXs, isSm}) => {

  const theme = useTheme();
  const colorText = theme.palette.text.primary;

  const width_image = (isXs || isSm ) ? 340 : 400;
  const height_image = (isXs || isSm ) ? 410 : 400;

  return (
    <Section section_id="sobre" background_color={theme.palette.custom?.backgroundSectionMain}>
      
      <TitleSection 
        title_text="Bianca Souza Aguiar" 
        subtitle_text="Fisioterapeuta Especialista em Oncologia e Especializada em Cuidados Paliativos">
      </TitleSection>

      <ContentSectionWrapStyled>
             
        <SectionTextColumnStyle textColor={colorText}>
          <p>Sou Bianca Souza Aguiar, fisioterapeuta formada em 2010 pelo Instituto Brasileiro de Medicina de Reabilitação, especialista em oncologia pela ABFO e COFITTO, com ampla experiência em cuidados paliativos e gerontologia. Minha atuação abrange oncologia, geriatria, disfunções vasculares e cuidados paliativos, proporcionando um atendimento integral, humanizado e personalizado para cada paciente.</p>
          <p>Com uma sólida trajetória na gerontologia, dedico-me ao cuidado de pacientes *oncogeriátricos* em todas as fases do tratamento, desde o diagnóstico, com a pré-habilitação, até os cuidados ao fim da vida. Minha abordagem alia ciência e sensibilidade, garantindo um suporte baseado nas melhores evidências, sempre respeitando a autonomia, o conforto e a qualidade de vida do paciente.</p>
          <p>Estou em constante atualização profissional, aprimorando minhas práticas para oferecer um atendimento cada vez mais eficaz e acolhedor, tanto para os pacientes quanto para suas famílias.</p>
        </SectionTextColumnStyle>
                        
        <ImageWithPlaceHolder src="/fotoPerfil.png" alt="foto Bianca Souza Aguiar" 
          height={height_image} width={width_image}>
        </ImageWithPlaceHolder>
                
      </ContentSectionWrapStyled> 

    </Section>            
  );  
};

export default SecaoSobre;