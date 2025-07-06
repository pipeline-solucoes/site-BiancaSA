"use client";

import {
  CardLerMais,
  Carrossel,
  ContainerAnimatedScroll,
  ContentSectionWrapStyled,  
  Section,  
} from "pipesolcomponents";
import { ReactElement } from "react";
import { useTheme } from "@mui/material";
import * as React from "react";
import TitleSection from "../components/TitleSection";

interface DepoimentoProps {
  nome: string;
  texto: string[];   
}

interface SecaoDepoimentosProps{
  isXs: boolean,  
}

const SecaoDepoimentos: React.FC<SecaoDepoimentosProps> = ({ isXs }) => {

  const theme = useTheme();    
  const alignTitle = (isXs) ? 'left' : 'center';

  const renderCards = (depoimentos: DepoimentoProps[]): ReactElement => {
    
      return (
        <Carrossel
          background_color_button="transparent"
          background_color_hover_button="transparent"
          border_radius_button="50%"
          color_button={theme.palette.text.primary}
          color_hover_button={theme.palette.primary.main}
          cardWidth={340}
          cardsCount={depoimentosObras.length}  
          color_dot_active={theme.palette.primary.main}                  
      >
        {depoimentos.map((item, index) => (
          <CardLerMais
            key={index}            
            text_footer={item.nome}
            description={item.texto}
            border_radius={`${theme.shape.borderRadius}px`}
            color_text_lermais={theme.palette.primary.main}
            color_text_description={theme.palette.text.secondary}
            color_text_footer={theme.palette.primary.main}                      
            background_color={theme.palette.custom.backgroundSectionAlternative}   
            icon="/quote.png"                    
          />                                            
        ))}
      </Carrossel>
      );
  };


  const depoimentosObras: DepoimentoProps[] = [    
    {
      nome: "Elisa Conrado",
      texto: [`Não tenho palavras pra descrever a a profissional maravilhosa que é a Bianca! Além de competentíssima, é uma pessoa incrível. Fui acolhida com muito carinho, além do tratamento físico, recebi muito apoio emocional durante as sessões, e como disse anteriormente, ela é muito acolhedora. Outro aspecto marcante é que a Bianca sempre entrava em contato comigo, enviando mensagem pra saber como eu estava e, de acordo com a necessidade, passava algumas orientações. Cabe ressaltar também a sua alegria, simpatia e amor pelos pacientes! Outro detalhe ainda, pelo amor a profissão está em constante busca de aprofundamento e estudo na área em que atua! É uma profissional que faz a diferença!`],
    },
    {
      nome: "Livia.dealmeida Alves",
      texto: [`Profissional excelente.`,
        `Maestria em ser didática humana e empática...`,
        `Habilidades e conhecimento teorico/científico de alto nível.`,
        `Sem dúvidas uma recomendação profissional sem igual`,
      ],
    },
    {
      nome: "Vivian Longobardi",
      texto: [`A Melhor fisioterapeuta que eu poderia ter, atenciosa, competente, me sinto extremamente segura com ela.`,
        `Ser humano incrível!!`,
        ` `,
        `Gratidão por tanto.`,
        ` `,
        `Excelência em pessoa e não tô exagerando não rs`
      ],
    },
    {
      nome: "Gloria Couceiro",
      texto: [`A Dra. Bianca, além de ser uma profissional muito competente e experiente, dispensa um tratamento de muita qualidade aos seu pacientes. Uma pessoa muito educada, sensível e humana que cuidou da minha mãe com muito carinho e resultando em uma melhora significativa no seu quadro.`],
    },
    {
      nome: "Juliana Brascher",
      texto: [`A Bianca é uma profissional extremamente comprometida e dedicada com os seus pacientes. Recomendo e aproveito para agradecer pelo período que precisei de seu apoio profissional com o meu filho.`],
    },
    {
      nome: "Maria Cristina Caetano",
      texto: [`Bianca é uma excelente profissional, atenciosa, atualizada e humana. Acompanho seu trabalho com idosos há muitos anos.`],
    }
  ];

  return (
    <Section section_id="depoimentos" background_color={theme.palette.custom?.backgroundSectionMain}>
      <ContainerAnimatedScroll>
        <ContentSectionWrapStyled marginTop="40px" marginBottom="40px">          
          <TitleSection align={alignTitle}
            title_text="Histórias de Superação e Esperança"
            subtitle_text="Palavras dos meus pacientes">
            </TitleSection>
            {renderCards(depoimentosObras)}
        </ContentSectionWrapStyled>
      </ContainerAnimatedScroll>      
    </Section>
  );
};

export default SecaoDepoimentos;