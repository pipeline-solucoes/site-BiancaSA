"use client";

import { Section, useResponsive } from "pipesolcomponents";
import { Box, useTheme } from "@mui/material";
import TitleSection from "../components/TitleSection";
import BotaoVoltarPaginaPrincipal from "../components/botaoVoltarPaginaPrincipal";
import FooterCustomTermoPolitica from "../components/footer/FooterCustomTermoPolitica";
import { itemsMenuTermoPolitica } from "@/constants";
import HeaderBarInCustom from "../components/banner/HeaderBarInCustom";


const TermoDeUso: React.FC = ()  => {

    const theme = useTheme();
    const { isXs, isSm } = useResponsive();   
    
    return(
        <>
            <HeaderBarInCustom isXs={isXs} isSm={isSm} itemsMenu={itemsMenuTermoPolitica}></HeaderBarInCustom>

            <Section section_id='termo' background_color={theme.palette.custom?.backgroundSectionMain}>
                <Box sx={{width:'100%'}}>
                    <TitleSection title_text="Termos de Uso"></TitleSection>
                </Box>                
                <BotaoVoltarPaginaPrincipal></BotaoVoltarPaginaPrincipal>           
            </Section>

            <FooterCustomTermoPolitica></FooterCustomTermoPolitica>
        </>
    )
}

export default TermoDeUso;