"use client";

import { ContainerAnimatedScroll, ContainerList, ContentSectionWrapStyled, Section, SectionTextColumnStyle, ShadowCard, IconText } from "pipesolcomponents";
import TitleSection from "../components/TitleSection";
import { Box, useTheme } from "@mui/material";
import Email from "../components/contatos/Email";
import SocialMedia from "../components/contatos/SocialMedia";
import { sombraClara, sombraEscura } from "@/constants";
import Telefone from "../components/contatos/Telefone";
import VerifiedIcon from '@mui/icons-material/Verified';
import FormWithRecaptcha from "../components/formulario/FormWithRecaptcha";

interface SecaoFormularioProps{
  isXs: boolean,    
}

const SecaoFormulario: React.FC<SecaoFormularioProps> = ({isXs}) => {
   
  const theme = useTheme();

  const colorIconCheck = theme.palette.primary.main;
  const colorText = theme.palette.text.secondary;
  const widthForm = (isXs) ? '340px' : '560px';

  return (
    
    <Section section_id="formulario" background_color={theme.palette.custom?.backgroundSectionAlternative}>

      <ContainerAnimatedScroll>

        <ContentSectionWrapStyled>
          
            <SectionTextColumnStyle textColor={colorText}>
              <TitleSection 
                title_text="Fale com a Bianca" 
                subtitle_text="Estou aqui para ajudar">          
              </TitleSection> 
              <p>Meu compromisso é oferecer um atendimento personalizado e humanizado, tanto no conforto do seu lar quanto no acolhimento do nosso consultório. Acredito que um ambiente de confiança e empatia é fundamental para um tratamento eficaz.</p>          
              <ContainerList>
                <IconText Icon={VerifiedIcon} color_icon={colorIconCheck} color_text={colorText}><b>Agendamento de Consultas:</b> Marque uma consulta no horário e local que melhor se adequem à sua rotina.</IconText>
                <IconText Icon={VerifiedIcon} color_icon={colorIconCheck} color_text={colorText}><b>Esclarecimento de Dúvidas:</b> Estou a disposição para responder às suas perguntas e oferecer orientações claras e precisas.</IconText>
                <IconText Icon={VerifiedIcon} color_icon={colorIconCheck} color_text={colorText}><b>Suporte e Acompanhamento:</b> Precisando de um pouco de apoio extra? Estou aqui para ouvir e ajudar.</IconText>                    
              </ContainerList>                    
            </SectionTextColumnStyle>
                  
            <ShadowCard sombraClara={sombraClara} sombraEscura={sombraEscura} width={widthForm} height="fit-content" border_radius="20px" padding="0px">            
              <Box display="flex" flexDirection='column' justifyContent="center" gap="24px" marginTop='8px' flex={1} 
                sx={{ backgroundColor: theme.palette.custom.backgroundSectionAlternative, padding: "24px", borderRadius: '10px' }} >                  
                  <FormWithRecaptcha 
                    background_color={theme.palette.custom.backgroundSectionMain} 
                    color={colorText} 
                    border_radius="10px" 
                    background_color_button={theme.palette.primary.main} 
                    border_radius_button={theme.palette.custom.borderRadiusButtonCTA}
                    color_button={theme.palette.primary.contrastText} 
                    text_button="Enviar mensagem" 
                    message_sucess="Agradeço pelo seu contato. Em breve, responderei com atenção. Até logo!"
                    message_erro="Houve um problema ao enviar sua mensagem. Por favor, verifique sua conexão e tente novamente mais tarde. 
                    Caso o erro persista, saiba que você também pode me contatar pelos outros canais disponíveis."                    
                  />
                  <ContainerList>
                    <Telefone color={theme.palette.primary.main}></Telefone>
                    <Email color={theme.palette.primary.main}></Email>
                    <SocialMedia position="faleconosco"></SocialMedia>
                  </ContainerList>                        
              </Box>
            </ShadowCard>
        
        </ContentSectionWrapStyled>

       </ContainerAnimatedScroll> 
            
    </Section>            
  );  
};

export default SecaoFormulario;