"use client";

import { ContentSectionWrapStyled, Form, IconCheckText, Section, SectionTextColumnStyle } from "pipesolcomponents";
import TitleSection from "../components/TitleSection";
import { Box, useTheme } from "@mui/material";
import Email from "../components/contatos/Email";
import SocialMedia from "../components/contatos/SocialMedia";
import { tokenFormulario } from "@/constants";


const SecaoFormulario: React.FC = () => {
   
  const theme = useTheme();

  return (
    
    <Section section_id="formulario" background_color={theme.palette.custom?.backgroundSectionMain}>

      <TitleSection 
        title_text="Fale com a Bianca" 
        subtitle_text="Estou aqui para ajudar">          
      </TitleSection>

      <ContentSectionWrapStyled>        
        
        <SectionTextColumnStyle textColor={theme.palette.text.primary}>
          <p>Meu compromisso é oferecer um atendimento personalizado e humanizado, tanto no conforto do seu lar quanto no acolhimento do nosso consultório. Acredito que um ambiente de confiança e empatia é fundamental para um tratamento eficaz.</p>          
          <IconCheckText iconColor={theme.palette.primary.main} textColor={theme.palette.text.primary}>Agendamento de Consultas: Marque uma consulta no horário e local que melhor se adequem à sua rotina.</IconCheckText>
          <IconCheckText iconColor={theme.palette.primary.main} textColor={theme.palette.text.primary}>Esclarecimento de Dúvidas: Estou a disposição para responder às suas perguntas e oferecer orientações claras e precisas.</IconCheckText>
          <IconCheckText iconColor={theme.palette.primary.main} textColor={theme.palette.text.primary}>Suporte e Acompanhamento: Precisando de um pouco de apoio extra? Estou aqui para ouvir e ajudar.</IconCheckText>                    
          <br/>
          <Email color={theme.palette.text.primary}></Email>
          <SocialMedia position="faleconosco"></SocialMedia>
        </SectionTextColumnStyle>
        
        <Box display="flex" flexDirection='column' justifyContent="center" 
          gap="24px" marginTop='8px' flex={1}>
            <Form token={tokenFormulario}
              background_color={theme.palette.custom.backgroundSectionAlternative} 
              color={theme.palette.text.primary} border_radius="10px" 
              background_color_button={theme.palette.custom.backgroundButtonCTA} 
              border_radius_button={theme.palette.custom.borderRadiusButtonCTA}
              color_button={theme.palette.secondary.contrastText} 
              text_button="Enviar mensagem" 
              message_sucess="Agradeço pelo seu contato. Em breve, responderei com atenção. Até logo!"
              message_erro="Houve um problema ao enviar sua mensagem. Por favor, verifique sua conexão e tente novamente mais tarde. 
              Caso o erro persista, saiba que você também pode me contatar pelos outros canais disponíveis."
              color_message_erro={theme.palette.error.main}
              color_message_sucess={theme.palette.success.main}
            />                        
        </Box>              
      </ContentSectionWrapStyled>
            
    </Section>            
  );  
};

export default SecaoFormulario;