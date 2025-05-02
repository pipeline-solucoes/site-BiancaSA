"use client";

import { ContentSectionWrapStyled, Form, Section } from "pipesolcomponents";
import TitleSection from "../components/TitleSection";
import { Box, useTheme } from "@mui/material";
import Email from "../components/contatos/Email";
import SocialMedia from "../components/contatos/SocialMedia";


const SecaoFormulario: React.FC = () => {
   
  const theme = useTheme();

  return (
    
    <Section section_id="formulario" background_color={theme.palette.custom?.backgroundSectionMain}>

      <TitleSection>Fale com a Bianca</TitleSection>

      <ContentSectionWrapStyled>
        
        <Box display="flex" flexDirection='column' justifyContent="center" 
          gap="24px" marginTop='8px' flex={1}>
            <Form token=""
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
            <Email color={theme.palette.text.primary} />
            <SocialMedia position="faleconosco" />
        </Box>
              
      </ContentSectionWrapStyled>
      
    </Section>            
  );  
};

export default SecaoFormulario;