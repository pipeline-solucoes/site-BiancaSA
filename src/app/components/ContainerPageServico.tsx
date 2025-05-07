"use client"

import { HeaderBarTop, Section, useResponsive, WhatsAppButton } from "pipesolcomponents";
import ScrollToTopButtonCustom from "./ScrollToTopButtonCustom";
import BannerCustomSemCTA from "./banner/BannerCustomSemCTA";
import { itemsMenuPage, numberWhatsapp } from "@/constants";
import BarraFerramentasCustom from './banner/BarraFerramentasCustom';
import FooterCustom from './footer/FooterCustom';
// import { ReactElement } from 'react';
import { useTheme } from '@mui/material/styles';
import { Typography } from "@mui/material";

interface ContainerPageServicoProps{    
    title: string;    
}

export interface DepoimentoProps {
    nome: string;
    texto: string;
}

const ContainerPageServico: React.FC<ContainerPageServicoProps> = ({ title })  => { 
        
        
    const theme = useTheme();
    //const colorText = theme.palette.text.primary;

    const { isXs, isSm } = useResponsive();

    return(
        <>        
            <HeaderBarTop               
                renderBar={() => <BarraFerramentasCustom isXs={isXs} isSm={isSm} itens_menu={itemsMenuPage}></BarraFerramentasCustom>}
                renderBanner={() => <BannerCustomSemCTA isSm={isSm}></BannerCustomSemCTA>}
            ></HeaderBarTop> 

            <Section section_id='servico' background_color={theme.palette.custom?.backgroundSectionMain}>   
                <Typography variant="h1" component="h1">{title}</Typography>                                                                
            </Section>
           
            <FooterCustom itens_menu={itemsMenuPage}></FooterCustom>

            <WhatsAppButton whatsapp={numberWhatsapp}></WhatsAppButton>
            <ScrollToTopButtonCustom></ScrollToTopButtonCustom>
        </>
    )
}

export default ContainerPageServico;