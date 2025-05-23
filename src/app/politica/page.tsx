"use client"

import { HeaderBarIn, Section, useResponsive } from "pipesolcomponents";
import { Box, Typography, useTheme } from '@mui/material';
import TitleSection from '../components/TitleSection';
import BotaoVoltarPaginaPrincipal from '../components/botaoVoltarPaginaPrincipal';
import FooterCustomTermoPolitica from "../components/footer/FooterCustomTermoPolitica";
import BarraFerramentasCustom from "../components/banner/BarraFerramentasCustom";
import { itemsMenuTermoPolitica } from "@/constants";
import Banner from "../components/banner/Banner";


const PoliticaPrivacidade: React.FC = ()  => {  
    
    const theme = useTheme();
    const { isXs, isSm } = useResponsive();
    
    return(
        <>
            <HeaderBarIn background_color='transparent' border_radius="40px" top_bar="10px"
                height_xs="880px" height_sm="880px" height_md="700px" height_lg="700px" height_xl="700px"                      
                renderBar={() => <BarraFerramentasCustom isXs={isXs} isSm={isSm} itens_menu={itemsMenuTermoPolitica}></BarraFerramentasCustom>}
                renderBanner={() => <Banner isXs={isXs} exibirBotaoCTA={false}></Banner>}>        
            </HeaderBarIn>

            <Section section_id='politica' background_color={theme.palette.custom?.backgroundSectionMain}>
                <Box sx={{width:'100%'}}>
                    <TitleSection title_text="Política de Privacidade"></TitleSection>
                </Box>                
                <BotaoVoltarPaginaPrincipal></BotaoVoltarPaginaPrincipal>           
            </Section>

            <FooterCustomTermoPolitica></FooterCustomTermoPolitica>
        </>
    )
}

export default PoliticaPrivacidade;