"use client";

import { ContainerAnimatedScroll, ContentSectionWrapStyled, Section } from "pipesolcomponents";
import { Container, Typography, useTheme } from "@mui/material";
import TitleSection from "../components/TitleSection";
import { VideoGallery } from "../components/VideoGallery";

interface SecaoVideosProps{
  isXs: boolean,
  isSm: boolean,  
}

const SecaoVideos: React.FC<SecaoVideosProps> = ({isXs, isSm}) => {

  const theme = useTheme();  
  const alignTitle = (isXs) ? 'left' : 'center';

  const colorLink = theme.palette.primary.main;
  const urlWefy = 'https://www.youtube.com/@wefyoficial';
  const urlPriscila = 'https://www.instagram.com/nutriprigoretti/';

  const videos = [
  { id: 'tvPg_N7Vw88', title: 'Outubro Rosa, Câncer de Mama, Prevenções, Diagnóstico Precoce e Sintomas| WeFy Podcast #2.18', 
    description: `
      Fui convidada a participar do podcast da <b><NavigationButton color={${colorLink}} aria_label="link Wefy" layout="link" text_decoration="underline" url='${urlWefy}' width="auto">WEFY</NavigationButton></b>, 
      junto com <b><NavigationButton color={${colorLink}} aria_label="link nutricionista Priscilla Faria Goretti" layout="link" text_decoration="underline" url=${urlPriscila} width="auto">nutricionista Priscilla Faria Goretti</NavigationButton></b>, para uma conversa especial sobre o <b>Outubro Rosa</b> e a importância da conscientização sobre o <b>câncer de mama</b>.`
   },
  { id: 'lSLx_qQBpbQ', title: 'Cuidados Paliativos: Histórias Reais e Uma Jornada de Conforto e Qualidade | WeFy Podcast #1.3',
    description: `
      Fui convidada a participar do podcast da <b><NavigationButton color={${colorLink}} aria_label="link Wefy" layout="link" text_decoration="underline" url='${urlWefy}' width="auto">WEFY</NavigationButton></b> para 
      conversar sobre um tema muito importante: <b>Cuidados Paliativos</b>.`
   },  
]
  
  return (
    <Section section_id="podcasts" background_color={theme.palette.custom.backgroundSectionMain}>      
      <ContainerAnimatedScroll>
        <TitleSection align={alignTitle}
          title_text="Participações em Podcasts" 
          subtitle_text="Acompanhe os episódios em que compartilhei conhecimentos sobre fisioterapia, cuidados paliativos, oncologia e qualidade de vida.">
        </TitleSection>        
               
        <ContentSectionWrapStyled marginTop="30px" marginBottom="30px">
          <VideoGallery videos={videos} backgroundList={theme.palette.custom.backgroundSectionAlternative} borderRadius={theme.shape.borderRadius} />
        </ContentSectionWrapStyled>       
        
        
      </ContainerAnimatedScroll>     
    </Section>            
  );  
};

export default SecaoVideos;