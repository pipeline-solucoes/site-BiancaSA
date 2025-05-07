"use client";

import { CarouselStyled, ContentSectionWrapStyled, Section, useResponsiveCarousel, YoutubeCard } from "pipesolcomponents";
import { Typography, useTheme } from "@mui/material";
import TitleSectionCenter from "../components/TitleSectionCenter";



const SecaoVideos: React.FC = () => {

  const theme = useTheme();

  const customBreakpoints = {
    desktop: 1200,
    desktopCards: 3,
    tablet: 900,
    tabletCards: 3,
    mobile: 600,
    mobileCards: 2,
    defaultCards: 1, };
      
  const { centerSlidePercentage } = useResponsiveCarousel({customBreakpoints});
  
  return (
    <Section section_id="podcasts" background_color={theme.palette.primary.main}>      

      <ContentSectionWrapStyled>

        <TitleSectionCenter color_default={false}
            title_text="Participações em Podcasts" 
            subtitle_text="Acompanhe os episódios em que compartilhei conhecimentos sobre fisioterapia, cuidados paliativos, oncologia e qualidade de vida.">
        </TitleSectionCenter>

        {/* <CarouselStyled
          showArrows={true}
          showStatus={false}
          showIndicators={true}
          infiniteLoop={false}
          emulateTouch={true}
          centerMode={true}
          centerSlidePercentage={centerSlidePercentage}
          showThumbs={false}        
          height="500px"
          width='100%'
          margin="32px"
          color_indicators={theme.palette.primary.contrastText}
          color_indicator_focus={theme.palette.primary.contrastText}> */}

        <YoutubeCard 
          srcYoutube="https://www.youtube.com/embed/tvPg_N7Vw88?si=uYLp9C4-RLb5_dht" 
          width="560px" 
          height_video="400px">
          <Typography variant="body1" component="p" color={theme.palette.primary.contrastText}>descricao</Typography> 
        </YoutubeCard>

        <YoutubeCard 
          srcYoutube="https://www.youtube.com/embed/lSLx_qQBpbQ?si=eBcOr2S2QSEOoLkN" 
          width="560px" 
          height_video="400px">
          <Typography variant="body1" component="p" color={theme.palette.primary.contrastText}>descricao</Typography> 
        </YoutubeCard>

        {/* </CarouselStyled> */}
                               
      </ContentSectionWrapStyled> 

    </Section>            
  );  
};

export default SecaoVideos;