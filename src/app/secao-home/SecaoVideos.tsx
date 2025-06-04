"use client";

import { ContainerAnimatedScroll, ContentSectionWrapStyled, NavigationButton, Section, YoutubeCard } from "pipesolcomponents";
import { Typography, useTheme } from "@mui/material";
import TitleSection from "../components/TitleSection";

interface SecaoVideosProps{
  isXs: boolean,
  isSm: boolean,  
}

const SecaoVideos: React.FC<SecaoVideosProps> = ({isXs, isSm}) => {

  const theme = useTheme();
  const background = 'rgba(255, 255, 255, 0.25)';  
  const width = (isXs) ? '340px' : "500px";
  const height_video = (isXs || isSm) ? '340px' : "400px";
  const height_text = (isXs || isSm) ? "auto" : "180px";
  const flexDirectionCard = 'column';
  const alignTitle = (isXs) ? 'left' : 'center';

  const colorLink = theme.palette.primary.main;
  const urlWefy = 'https://www.youtube.com/@wefyoficial';
  const urlPriscila = 'https://www.instagram.com/nutriprigoretti/';
  
  return (
    <Section section_id="podcasts" background_color={theme.palette.custom.backgroundSectionMain}>      
      <ContainerAnimatedScroll>
        <TitleSection align={alignTitle}
          title_text="Participações em Podcasts" 
          subtitle_text="Acompanhe os episódios em que compartilhei conhecimentos sobre fisioterapia, cuidados paliativos, oncologia e qualidade de vida.">
        </TitleSection>

        <ContentSectionWrapStyled marginTop="30px" marginBottom="0px">                              
          <YoutubeCard               
            background_color={background}                
            srcYoutube='https://www.youtube.com/embed/tvPg_N7Vw88?si=uYLp9C4-RLb5_dht'
            width={width}
            height_video={height_video}
            flex_direction={flexDirectionCard}
            lazyLoad={true} useFacade={true}
          >            
              <Typography variant="body1" color={theme.palette.text.secondary} component="div" sx={{height: height_text}}>
                <p>Fui convidada a participar do podcast 
                  da <b><NavigationButton color={colorLink} aria_label="link Wefy" layout="link" text_decoration="underline" url={urlWefy} width="auto">WEFY</NavigationButton></b>, 
                  junto com <b><NavigationButton color={colorLink} aria_label="link nutricionista Priscilla Faria Goretti" layout="link" text_decoration="underline" url={urlPriscila} width="auto">nutricionista Priscilla Faria Goretti</NavigationButton></b>, para uma conversa especial sobre o <b>Outubro Rosa</b> e a importância da conscientização sobre o <b>câncer de mama</b>.</p>
                <p>Foi um momento de troca valiosa, com informações e reflexões sobre prevenção, diagnóstico e cuidado.</p>                                
              </Typography>
          </YoutubeCard>                                 
          <YoutubeCard
            background_color={background}                
            srcYoutube='https://www.youtube.com/embed/lSLx_qQBpbQ?si=eBcOr2S2QSEOoLkN'
            width={width} 
            height_video={height_video}
            flex_direction={flexDirectionCard}
            lazyLoad={true} useFacade={true}
          >
              <Typography variant="body1" color={theme.palette.text.secondary} component="div" sx={{height: height_text}}>
                <p>Fui convidada a participar do podcast da <b><NavigationButton color={colorLink} aria_label="link Wefy" layout="link" text_decoration="underline" url={urlWefy} width="auto">WEFY</NavigationButton></b> para 
                  conversar sobre um tema muito importante: <b>Cuidados Paliativos</b>. </p>
                <p>Foi uma troca rica e sensível, onde tivemos a oportunidade de compartilhar experiências e reflexões sobre o cuidado integral com o paciente.</p>                                
              </Typography>
          </YoutubeCard>                                            
        </ContentSectionWrapStyled>
      </ContainerAnimatedScroll>     
    </Section>            
  );  
};

export default SecaoVideos;