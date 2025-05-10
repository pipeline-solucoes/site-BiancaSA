"use client";

import { ContentSectionWrapStyled, GradientCard, NavigationButton, Section } from "pipesolcomponents";
import { Typography, useTheme } from "@mui/material";
import TitleSectionCenter from "../components/TitleSectionCenter";

interface IServico {
  url: string;
  text: string;
  description: string;
}

const servicos : IServico[] = [
    {url: '/servicos/cuidadospaliativos', text: 'Cuidados Paliativos', description: 'Assistência focada no alívio da dor e promoção de conforto físico e emocional para pacientes com doenças crônicas ou em estágio avançado.'},
    {url: '#sobre', text: 'Fotobiomodulação', description: 'Terapia com luz de baixa intensidade que estimula a regeneração celular, alivia dores e inflamações, acelerando a cicatrização.'},
    {url: '#sobre', text: 'Perícia Judicial', description: 'Avaliação técnica especializada para processos judiciais, com emissão de laudos precisos e embasados na prática fisioterapêutica.'},
    {url: '#sobre', text: 'Pós Operatório', description: 'Acelera a recuperação após cirurgias, aliviando dores, reduzindo inchaços e restaurando movimentos e funções do corpo.'},
    {url: '#sobre', text: 'Pré Habilitação', description: 'Preparação física e funcional antes de cirurgias para melhorar os resultados e reduzir o tempo de recuperação no pós-operatório.'},
    {url: '#sobre', text: 'Reabilitação', description: 'Foca na recuperação funcional após traumas ou doenças, promovendo autonomia, qualidade de vida e prevenção de novas lesões.'},
    {url: '#sobre', text: 'Reabilitação Oncológica', description: 'Cuidados personalizados para pacientes com câncer, promovendo mobilidade, controle da dor e qualidade de vida durante e após o tratamento.'},
    {url: '#sobre', text: 'Reabilitação Geriátrica', description: 'Atendimento voltado à pessoa idosa, com foco na prevenção de quedas, manutenção da autonomia e melhora da mobilidade e funcionalidade.'},
    {url: '#sobre', text: 'Tratamento de Disfunções Linfáticas', description: 'Abordagem para controle de edemas (como o linfedema), por meio de drenagem linfática, exercícios e cuidados específicos.'},
    {url: '#sobre', text: 'Tratamento de Disfunções Vasculares', description: 'Intervenções que visam melhorar a circulação sanguínea, aliviar sintomas de insuficiência venosa e prevenir complicações.'},
    {url: '#sobre', text: 'Tratamento da Neuropatia Periférica', description: 'Terapias para alívio da dor, formigamento e fraqueza causados por lesões nos nervos periféricos, com foco em funcionalidade e bem-estar.'},    
  ];        

const SecaoServicos: React.FC = () => {

  const theme = useTheme();
  
  return (
    <Section section_id="servicos" background_color={theme.palette.custom?.backgroundSectionAlternative}>
      
      <TitleSectionCenter title_text="Serviços" subtitle_text="Atendimento em consultório e domicílio, com foco em excelência e cuidado humanizado.">
      </TitleSectionCenter>
      <br/>            
      <ContentSectionWrapStyled>

        {servicos.map((item) => (

            <GradientCard 
              key={item.text}
              width="320px" height="260px"  
              color_title={theme.palette.primary.main}
              color_description={theme.palette.text.primary}
              border_radius="10px"
              color1={theme.palette.custom.backgroundSectionMain} 
              color2={theme.palette.custom.backgroundSectionMain} 
              color3={theme.palette.custom.backgroundSectionAlternative} 
              title= {item.text}
              description= {item.description}

            >
             <NavigationButton                             
              color={theme.palette.primary.main} 
              border_color={theme.palette.primary.main}               
              width="auto" 
              url={item.url} 
              aria_label={`botao ${item.text}`}              
              layout="link" 
              text_decoration="underline"                 
             >
                Ler mais
             </NavigationButton>
            </GradientCard>                                                 
        ))}

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

export default SecaoServicos;