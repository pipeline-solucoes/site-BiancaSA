"use client";

import { AnimatedCardData, AnimatedCardGroup, ContainerAnimatedScroll, ContentSectionWrapStyled, NavigationButton, Section } from "pipesolcomponents";
import { Typography, useTheme } from "@mui/material";
import TitleSectionCenter from "../components/TitleSectionCenter";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { sombraClara, sombraEscura } from "@/constants";

const cards: AnimatedCardData[] = [

  {id: 0, title: 'Cuidados Paliativos', description: 'Assistência focada no alívio da dor e promoção de conforto físico e emocional para pacientes com doenças crônicas ou em estágio avançado.'},
  {id: 1, title: 'Fotobiomodulação', description: 'Terapia com luz de baixa intensidade que estimula a regeneração celular, alivia dores e inflamações, acelerando a cicatrização.'},
  {id: 2, title: 'Perícia Judicial', description: 'Avaliação técnica especializada para processos judiciais, com emissão de laudos precisos e embasados na prática fisioterapêutica.'},
  {id: 3, title: 'Pós Operatório', description: 'Acelera a recuperação após cirurgias, aliviando dores, reduzindo inchaços e restaurando movimentos e funções do corpo.'},
  {id: 4, title: 'Pré Habilitação', description: 'Preparação física e funcional antes de cirurgias para melhorar os resultados e reduzir o tempo de recuperação no pós-operatório.' },
  {id: 5, title: 'Reabilitação' , description: 'Foca na recuperação funcional após traumas ou doenças, promovendo autonomia, qualidade de vida e prevenção de novas lesões.'},
  {id: 6, title: 'Reabilitação Geriátrica', description: 'Atendimento voltado à pessoa idosa, com foco na prevenção de quedas, manutenção da autonomia e melhora da mobilidade e funcionalidade.' },
  {id: 7, title: 'Reabilitação Oncológica', description: 'Cuidados personalizados para pacientes com câncer, promovendo mobilidade, controle da dor e qualidade de vida durante e após o tratamento.'},
  {id: 8, title: 'Tratamento de Disfunções Linfáticas', description: 'Abordagem para controle de edemas (como o linfedema), por meio de drenagem linfática, exercícios e cuidados específicos.'},
  {id: 9, title: 'Tratamento de Disfunções Vasculares', description: 'Intervenções que visam melhorar a circulação sanguínea, aliviar sintomas de insuficiência venosa e prevenir complicações.'},
  {id: 10, title: 'Tratamento da Neuropatia Periférica', description: 'Terapias para alívio da dor, formigamento e fraqueza causados por lesões nos nervos periféricos, com foco em funcionalidade e bem-estar.'},  
]

interface SecaoServicosProps{
  isXs: boolean,
  isSm: boolean,     
}

const SecaoServicos: React.FC<SecaoServicosProps> = ({isXs, isSm}) => {

  const theme = useTheme();

  const width_card = (isXs || isSm) ? '80%' : 'calc(50% - 8px)';
  const max_height_card = (isXs || isSm) ? '200px' : '230px';

    
  return (
    <Section section_id="servicos" background_color={theme.palette.custom?.backgroundSectionAlternative}>
      
        <TitleSectionCenter title_text="Serviços" subtitle_text="Atendimento em consultório e domicílio, com foco em excelência e cuidado humanizado.">
        </TitleSectionCenter>         
                  
        <ContentSectionWrapStyled marginTop="40px" marginBottom="40px">
          
          <ContainerAnimatedScroll>          
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
          </ContainerAnimatedScroll>   

        </ContentSectionWrapStyled>
                                
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