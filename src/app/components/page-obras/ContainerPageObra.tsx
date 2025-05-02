"use client"

import { CarouselStyled, ContentSectionWrapStyled, HeaderBarTop, Section, TestimonialCard, useResponsive, WhatsAppButton } from "pipesolcomponents";
import ScrollToTopButtonCustom from "../ScrollToTopButtonCustom";
import BannerCustomSemCTA from "../banner/BannerCustomSemCTA";
import { itemsMenuPage, numberWhatsapp } from "@/constants";
import { Box, Typography } from '@mui/material';
import CardBookComprar from '../cards-obras/CardBookComprar';
import TitleSection from '../TitleSection';
import BotaoVoltarPaginaPrincipal from '../botaoVoltarPaginaPrincipal';
import BarraFerramentasCustom from '../banner/BarraFerramentasCustom';
import FooterCustom from '../footer/FooterCustom';
import { ReactElement } from 'react';
import { useTheme } from '@mui/material/styles';

interface ContainerPageObraProps{
    src: string;
    href: string;
    alt: string;
    title: string;
    maxheightcard?: string;
    subTitle?: string;
    renderTexto: () => React.ReactElement; 
    renderCarrossel: () => React.ReactElement; 
    renderListaCards: () => React.ReactElement;   
    depoimentos?: DepoimentoProps[]; 
}

export interface DepoimentoProps {
    nome: string;
    texto: string;
}

const ContainerPageObra: React.FC<ContainerPageObraProps> = ({src, alt, href, title, subTitle, 
    renderTexto, renderCarrossel, renderListaCards, depoimentos, maxheightcard, })  => { 
        
        
    const theme = useTheme();
    const colorText = theme.palette.text.primary;

    const { isXs, isSm, isLg, isXl } = useResponsive();

    let heightcard : string = '400px'; 
    if (isXs)
        heightcard = maxheightcard || '640px';

    const renderCards = (): ReactElement => {
        
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
                height={heightcard}
                width='100%'
                margin="0px"
                color_indicators={theme.palette.primary.main}
                color_indicator_focus={theme.palette.secondary.main}
            >
            {depoimentos?.map((item, index) => (
              <TestimonialCard
                key={index}
                width="100%"
                height="auto"
                name={item.nome}
                socialMedia=" "
                color={theme.palette.text.primary}
                color_icon={theme.palette.secondary.main}>
                    <Typography variant="body1" color={theme.palette.text.primary}>
                        {item.texto}
                    </Typography>
              </TestimonialCard>
            ))}
          </CarouselStyled>
          );
      };    
      
    return(
        <>        
            <HeaderBarTop               
                renderBar={() => <BarraFerramentasCustom isXs={isXs} isSm={isSm} itens_menu={itemsMenuPage}></BarraFerramentasCustom>}
                renderBanner={() => <BannerCustomSemCTA isSm={isSm}></BannerCustomSemCTA>}
            ></HeaderBarTop> 


            <Section section_id='livro' background_color={theme.palette.custom?.backgroundSectionMain}>   
                <ContentSectionWrapStyled>
                    <CardBookComprar href={href} src={src} alt={alt} isXs={isXs} isSm={isSm}></CardBookComprar>                    
                    <Box gap={'24px'} flex={1}>
                        <TitleSection>{title}</TitleSection>
                        <Box display="flex" flexDirection="column" alignItems={"flex-start"} justifyContent={"flex-start"} gap={2} marginTop={2}>
                            { subTitle && <Typography variant="body2" color={colorText}>{subTitle}</Typography> }
                            <Typography variant="body1" component="div" color={colorText}>
                                { renderTexto() }
                            </Typography>                                
                        </Box>                                                                                        
                        <BotaoVoltarPaginaPrincipal></BotaoVoltarPaginaPrincipal>                        
                    </Box>                    
                </ContentSectionWrapStyled>                                                                    
            </Section>

            {   depoimentos &&
                <Section section_id='depoimentos' background_color={theme.palette.custom?.backgroundSectionAlternative}>
                    <Box display="flex" flexDirection='column' justifyContent='flex-start' alignItems='flex-start' sx={{width: '100%'}} >                    
                        { renderCards() }                        
                    </Box>
                </Section> 
            }

            <Section section_id='livros' background_color={theme.palette.custom?.backgroundSectionMain}>
                <Box display="flex" flexDirection='column' justifyContent='flex-start' alignItems='flex-start' sx={{width: '100%'}} >
                    <Typography variant="h4" component="p" color={theme.palette.text.primary} width='100%'>Conheça também:</Typography>
                    { (isXl || isLg) && renderListaCards() } 
                    { (!isXl && !isLg) &&  renderCarrossel() }                
                </Box>
            </Section>

            <FooterCustom itens_menu={itemsMenuPage} isXs={isXs} isSm={isSm}></FooterCustom>

            <WhatsAppButton whatsapp={numberWhatsapp}></WhatsAppButton>
            <ScrollToTopButtonCustom></ScrollToTopButtonCustom>
        </>
    )
}

export default ContainerPageObra;