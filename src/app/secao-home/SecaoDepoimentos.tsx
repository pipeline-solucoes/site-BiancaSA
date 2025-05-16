"use client";

import {
  CarouselStyled,
  ContainerAnimatedScroll,
  Section,
  TestimonialCard
} from "pipesolcomponents";
import { ReactElement } from "react";
import { useTheme } from "@mui/material";
import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TitleSectionCenter from "../components/TitleSectionCenter";

interface DepoimentoProps {
  nome: string;
  texto: string;   
}

interface SecaoDepoimentosProps{
  isXs: boolean,
  isSm: boolean,     
}

const SecaoDepoimentos: React.FC<SecaoDepoimentosProps> = ({isXs, isSm}) => {

  const theme = useTheme();
    
  const width_card = (isXs || isSm) ? '340px' : '80%';
  const width_carrossel = (isXs || isSm) ? '340px' : '100%';
  const height_carrossel = (isXs || isSm) ? '610px' : '430px';

  const renderCards = (depoimentos: DepoimentoProps[]): ReactElement => {
    
      return (
        <CarouselStyled
          showArrows={true}
          showStatus={false}
          showIndicators={true}
          infiniteLoop={false}
          emulateTouch={true}
          centerMode={true}
          centerSlidePercentage={100}
          showThumbs={false}        
          height={height_carrossel}
          width={width_carrossel}
          margin="auto"
          color_indicators={theme.palette.primary.main}
          color_indicator_focus={theme.palette.primary.main}
      >
        {depoimentos.map((item, index) => (
          <TestimonialCard
            key={index}
            width={width_card}
            height="100%"
            name={item.nome}
            socialMedia=" "
            color={theme.palette.text.primary}
            color_icon={theme.palette.primary.main}            
            background_color={theme.palette.custom.backgroundSectionAlternative}                      
          >            
            {item.texto}            
          </TestimonialCard>
        ))}
      </CarouselStyled>
      );
  };


  const depoimentosObras: DepoimentoProps[] = [    
    {
      nome: "Elisa Conrado",
      texto: `Não tenho palavras pra descrever a a profissional maravilhosa que é a Bianca! Além de competentíssima, é uma pessoa incrível. Fui acolhida com muito carinho, além do tratamento físico, recebi muito apoio emocional durante as sessões, e como disse anteriormente, ela é muito acolhedora. Outro aspecto marcante é que a Bianca sempre entrava em contato comigo, enviando mensagem pra saber como eu estava e, de acordo com a necessidade, passava algumas orientações. Cabe ressaltar também a sua alegria, simpatia e amor pelos pacientes! Outro detalhe ainda, pelo amor a profissão está em constante busca de aprofundamento e estudo na área em que atua! É uma profissional que faz a diferença!`,
    },
    {
      nome: "Pablo Nunes",
      texto: `A Bianca é uma excelente fisioterapeuta, referência na sua área de atuação. Dedicada e sempre atualizada às melhoras práticas da profissão. Recomendo!`,
    },
    {
      nome: "Henrique Luna",
      texto: `A Bianca é uma excelente profissional. Atenciosa, competente, divertida e super atualizada com as melhores práticas da fisioterapia. Recomendo 100%.`,
    },
    {
      nome: "Gloria Couceiro",
      texto: `A Dra. Bianca, além de ser uma profissional muito competente e experiente, dispensa um tratamento de muita qualidade aos seu pacientes. Uma pessoa muito educada, sensível e humana que cuidou da minha mãe com muito carinho e resultando em uma melhora significativa no seu quadro.`,
    },
    {
      nome: "Juliana Brascher",
      texto: `A Bianca é uma profissional extremamente comprometida e dedicada com os seus pacientes. Recomendo e aproveito para agradecer pelo período que precisei de seu apoio profissional com o meu filho.`,
    },
    {
      nome: "Maria Cristina Caetano",
      texto: `Bianca é uma excelente profissional, atenciosa, atualizada e humana. Acompanho seu trabalho com idosos há muitos anos.`,
    }
  ];

  return (
    <Section section_id="depoimentos" background_color={theme.palette.custom?.backgroundSectionMain}>      
      <ContainerAnimatedScroll>
        <TitleSectionCenter 
          title_text="Histórias de Superação e Esperança"
          subtitle_text="Palavras dos meus pacientes"
        >
        </TitleSectionCenter>
        {renderCards(depoimentosObras)} 
      </ContainerAnimatedScroll>
    </Section>
  );
};

export default SecaoDepoimentos;