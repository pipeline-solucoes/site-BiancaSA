"use client";

import { ContentSectionWrapStyled, Section, YoutubeCard } from "pipesolcomponents";
import { Typography, useTheme } from "@mui/material";
import TitleSectionCenter from "../components/TitleSectionCenter";

const SecaoVideos: React.FC = () => {

  const theme = useTheme();
  const background = theme.palette.text.secondary;
  const borderRadius = "10px";
  const width = "580px";
  const height = "400px";
  
  return (
    <Section section_id="servicos" background_color={theme.palette.custom.backgroundSectionMain}>      

      <ContentSectionWrapStyled>

        <TitleSectionCenter
            title_text="Participações em Podcasts" 
            subtitle_text="Acompanhe os episódios em que compartilhei conhecimentos sobre fisioterapia, cuidados paliativos, oncologia e qualidade de vida.">
        </TitleSectionCenter>

          <YoutubeCard 
            key={0}
            background_color={background}
            border_radius={borderRadius}
            srcYoutube='https://www.youtube.com/embed/tvPg_N7Vw88?si=uYLp9C4-RLb5_dht'
            width={width} 
            height_video={height}
          >            
              <Typography variant="body1" color={theme.palette.text.primary} component="div" sx={{height: '270px'}}>
                <p>Fui convidada a participar do podcast da <b>WEFY</b>, junto com <b>nutricionista Priscilla Faria Goretti (@nutriprigoretti)</b>, para uma conversa especial sobre o <b>Outubro Rosa</b> e a importância da conscientização sobre o <b>câncer de mama</b>.</p>
                <p>Foi um momento de troca valiosa, com informações e reflexões sobre prevenção, diagnóstico e cuidado.</p>                
                <p>O episódio está disponível no canal da <b>WEFY</b> no YouTube - aproveite para assistir e se inscrever no canal para acompanhar outros conteúdos incríveis! </p>
              </Typography>
          </YoutubeCard>

          <YoutubeCard 
            key={1}
            background_color={background}
            border_radius={borderRadius}
            srcYoutube='https://www.youtube.com/embed/lSLx_qQBpbQ?si=eBcOr2S2QSEOoLkN'
            width={width} 
            height_video={height}
          >
              <Typography variant="body1" color={theme.palette.text.primary} component="div" sx={{height: '270px'}}>
                <p>Fui convidada a participar do podcast da <b>WEFY</b> para conversar sobre um tema muito importante: <b>Cuidados Paliativos</b>. </p>
                <p>Foi uma troca rica e sensível, onde tivemos a oportunidade de compartilhar experiências e reflexões sobre o cuidado integral com o paciente.</p>                
                <p>O episódio já está disponível no canal da <b>WEFY</b> no YouTube. Assista, curta e inscreva-se no canal para apoiar esse trabalho tão necessário!</p>
              </Typography>
          </YoutubeCard>        
                               
      </ContentSectionWrapStyled>       

    </Section>            
  );  
};

export default SecaoVideos;