"use client"

import { Section, useResponsive, WhatsAppButton } from "pipesolcomponents";
import ScrollToTopButtonCustom from "./ScrollToTopButtonCustom";
import { itemsMenuPage, numberWhatsapp } from "@/constants";
import FooterCustom from './footer/FooterCustom';
import { useTheme } from '@mui/material/styles';
import { Typography } from "@mui/material";
import HeaderBarInCustom from "./banner/HeaderBarInCustom";

interface ContainerPageServicoProps{    
    title: string;    
}

export interface DepoimentoProps {
    nome: string;
    texto: string;
}

const ContainerPageServico: React.FC<ContainerPageServicoProps> = ({ title })  => { 
        
        
    const theme = useTheme();
    const { isXs, isSm } = useResponsive();

    return(
        <>                    
            <HeaderBarInCustom isXs={isXs} isSm={isSm} itemsMenu={itemsMenuPage}></HeaderBarInCustom>

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