"use client";

import { ContentSectionWrapStyled, ItemMenuConfig, Section, SectionTextColumnStyle, SiteMap, useResponsive } from "pipesolcomponents";
import { Box, Typography, useTheme } from "@mui/material";
import { itemsMenuPage } from "@/constants";
import TitleSection from "@/app/components/TitleSection";
import FooterCustom from "@/app/components/footer/FooterCustom";
import HeaderBarInCustom from "./banner/HeaderBarInCustom";

interface PageServicoProps{    
    servico: 'Cuidados Paliativos' | 'Fotobiomodulação' | 'Perícia Judicial' | 'Pós Operatório' |
             'Pré Habilitação' | 'Reabilitação' | 'Reabilitação Oncológica' | 'Reabilitação Geriátrica' |
             'Tratamento de Disfunções Linfáticas' | 'Tratamento de Disfunções Vasculares' | 
             'Tratamento da Neuropatia Periférica';
}

const PageServico: React.FC<PageServicoProps> = ({servico})  => {

    const theme = useTheme();
    const { isXs, isSm } = useResponsive();   
    const colorText =  theme.palette.text.primary; 
    
    let itemMenuLateral: ItemMenuConfig[] = [        
        {url: '/#cuidados-paliativos', text: 'Cuidados Paliativos'},
        {url: '/#1', text: 'Fotobiomodulação'},
        {url: '/#2', text: 'Perícia Judicial'},
        {url: '/#3', text: 'Pós Operatório'},
        {url: '/#4', text: 'Pré Habilitação'},
        {url: '/#5', text: 'Reabilitação'},
        {url: '/#6', text: 'Reabilitação Oncológica'},
        {url: '/#7', text: 'Reabilitação Geriátrica'},
        {url: '/#8', text: 'Tratamento de Disfunções Linfáticas'},
        {url: '/#9', text: 'Tratamento de Disfunções Vasculares'},
        {url: '/#10', text: 'Tratamento da Neuropatia Periférica'},       
        {url: '/', text: 'Voltar para a Página Principal'},
      ]; 
      
    itemMenuLateral = itemMenuLateral.slice(itemMenuLateral.findIndex(x => x.text == servico));   

    return(
        <>            
            <HeaderBarInCustom isXs={isXs} isSm={isSm} itemsMenu={itemsMenuPage}></HeaderBarInCustom>

            <Section section_id='termo' background_color={theme.palette.custom?.backgroundSectionMain}>

                <ContentSectionWrapStyled marginTop="0px" marginBottom="0px">

                    <Box sx={{width: 'auto', marginRight: '32px'}}>
                        <SiteMap listaItemMenu={itemMenuLateral} 
                            color={colorText} 
                            color_hover={theme.palette.primary.main}>
                        </SiteMap>
                    </Box>

                    <SectionTextColumnStyle textColor={colorText}>                        
                        <TitleSection title_text={servico} align="center"></TitleSection>                                                                                    
                        <Typography variant="body1" component="div">
                            descricao
                        </Typography>                         
                    </SectionTextColumnStyle>
                    
                </ContentSectionWrapStyled>
                                           
            </Section>

            <FooterCustom itens_menu={itemsMenuPage}></FooterCustom>
        </>
    )
}

export default PageServico;