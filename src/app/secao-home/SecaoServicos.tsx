"use client";

import { AnimatedCardData, AnimatedCardGroup, ContainerAnimatedScroll, ContentSectionWrapStyled, NavigationButton, Section } from "pipesolcomponents";
import { Typography, useTheme } from "@mui/material";
import TitleSection from "../components/TitleSection";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { sombraClara, sombraEscura } from "@/constants";

const cards: AnimatedCardData[] = [

  {id: 0, title: 'Cuidados Paliativos', description: 'Abordagem que visa melhorar a qualidade de vida de pacientes e familiares que enfrentam doenças que ameaçam a vida, desde seu diagnóstico, através da prevenção e alívio do de sintomas através de uma comunicação eficaz e empática.'},
  {id: 1, title: 'Fotobiomodulação', description: 'Terapia com luz de baixa intensidade que estimula a regeneração celular, alivia dores e inflamações, acelerando a cicatrização.',
   list_description:[`- Acelera a cicatrização de lesões na pele`, 
    `- Reduz dor e inflamação`,
    `- Previne e trata radiodermite`,
    `- Ameniza náuseas e vômitos`,
    `- Melhora o bem-estar geral`,
    `- É uma técnica não invasiva, indolor e com efeitos terapêuticos locais e sistêmicos.`
   ] 
  },
  {id: 2, title: 'Perícia Judicial', description: 'Análise técnica contratada por pacientes, empresas, advogados, seguradoras ou nomeada por um juíz para esclarecer questões de saúde física, funcionalidade e reabilitação  para ser utilizado em processos judiciais ou perícias médicas.'},
  {id: 3, title: 'Pós Operatório', description: 'Acelera a recuperação após cirurgias, aliviando dores, reduzindo inchaços e restaurando movimentos e funções do corpo.'},  
  {id: 4, title: 'Pré Habilitação', description: 'A pré-habilitação oncológica envolve a preparação e avaliação física e funcional do paciente antes do início de qualquer tratamento, seja cirúrgico ou não. Seu objetivo é prevenir complicações, identificar disfunções prévias, otimizar a recuperação e proporcionar acompanhamento contínuo durante o tratamento, promovendo autonomia e controle eficaz dos sintomas.' },
  {id: 5, title: 'Reabilitação Geriátrica', description: 'Atendimento voltado à pessoa idosa, com foco na prevenção de quedas e agravos, manutenção e/ou recuperação das funções físicas, autonomia e funcionalidade.' },
  {id: 6, title: 'Reabilitação Linfática', description: 'Prevenção, diagnóstico e reabilitação de disfunções linfáticas primárias ou secundárias através de terapia física complexa que inclui enfaixamento compressivo, exercícios, orientações e cuidados com a pele.'},
  {id: 7, title: 'Reabilitação Oncológica', description: 'Cuidados personalizados para pacientes com câncer, promovendo prevenção de agravos e tratando sintomas comuns ao tratamento oncológico como fadiga, dor, náusea e vômito, radiodermite, lesões na pele, reabilitação de funções motoras e funcionalidade perdida, promovendo conforto, controle de sintomas, autonomia e qualidade de vida antes, durante e após o tratamento oncológico.'},
  {id: 8, title: 'Reabilitacao Vascular', description: 'abordagem terapêutica voltada à recuperação da função circulatória em pacientes com doenças arteriais, venosas ou linfáticas. Envolve técnicas como exercícios, uso de enfaixamento compressivas, adaptação de malhas de compressão e cuidados com a pele. Seu objetivo é melhorar o retorno venoso e linfático, aliviar sintomas (como dor e inchaço), prevenir  e tratar úlceras e promovendo funcionalidade e qualidade de vida.'},
  {id: 9, title: 'Tratamento da Neuropatia Periférica', description: 'Tratamento dos sintomas (dor, formigamento e fraqueza muscular) da neuropatia causada pelo tratamento oncológico ou diabetes, prevenindo amputações e  agravos e melhorando a vascularização periférica e recuperando a autonomia e funcionalidade.'},  
]

interface SecaoServicosProps{
  isXs: boolean,
  isSm: boolean,     
}

const SecaoServicos: React.FC<SecaoServicosProps> = ({isXs, isSm}) => {

  const theme = useTheme();

  const width_card = (isXs) ? '340px' : (isSm ? '80%' : 'calc(50% - 8px)') ;
  const max_height_card = (isXs || isSm) ? '300px' : '280px';
  const alignTitle = (isXs) ? 'left' : 'center';

    
  return (
    <Section section_id="servicos" background_color={theme.palette.custom?.backgroundSectionAlternative}>      
      <ContainerAnimatedScroll>

        <TitleSection align={alignTitle}
          title_text="Serviços" 
          subtitle_text="Atendimento em consultório e domicílio, com foco em excelência e cuidado humanizado.">
        </TitleSection>         
                  
        <ContentSectionWrapStyled marginTop="30px" marginBottom="30px">                              
            <AnimatedCardGroup 
              cards={cards} 
              icon={ArrowCircleDownIcon}
              icon_expanded={ArrowCircleUpIcon} 
              background_color='transparent' 
              background_color_expanded={theme.palette.primary.main} 
              color={theme.palette.primary.main} 
              color_expanded={theme.palette.custom?.backgroundSectionAlternative}
              border_radius="20px"
              width_card={width_card}
              min_height_card="30px"
              max_height_card={max_height_card}
              sombraClara={sombraClara}
              sombraEscura={sombraEscura}             
            />              
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

export default SecaoServicos;