"use client"

import { HeaderBarIn, Section, useResponsive, WhatsAppButton } from "pipesolcomponents";
import ScrollToTopButtonCustom from "./ScrollToTopButtonCustom";
import { itemsMenuPage, numberWhatsapp } from "@/constants";
import BarraFerramentasCustom from './banner/BarraFerramentasCustom';
import FooterCustom from './footer/FooterCustom';
import { useTheme } from '@mui/material/styles';
import { Typography } from "@mui/material";
import Banner from "./banner/Banner";

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
            <HeaderBarIn background_color='transparent' border_radius="40px" top_bar="10px"
                height_xs="880px" height_sm="880px" height_md="700px" height_lg="700px" height_xl="700px"               
                renderBar={() => <BarraFerramentasCustom isXs={isXs} isSm={isSm} itens_menu={itemsMenuPage}></BarraFerramentasCustom>}
                renderBanner={() => <Banner isXs={isXs} exibirBotaoCTA={false}></Banner>}
            ></HeaderBarIn> 

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