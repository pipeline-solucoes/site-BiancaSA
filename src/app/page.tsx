'use client';

import SecaoSobre from "./secao-home/SecaoSobre";
import SecaoDepoimentos from "./secao-home/SecaoDepoimentos";
import SecaoFormulario from "./secao-home/SecaoFormulario";
import ScrollToTopButtonCustom from "./components/ScrollToTopButtonCustom";
import NotificationBarCustom from "./components/NotificationBarCustom";
import FooterCustom from "./components/footer/FooterCustom";
import BarraFerramentasCustom from "./components/banner/BarraFerramentasCustom";
import { HeaderBarIn, useResponsive, WhatsAppButton } from "pipesolcomponents";
import { itemsMenu, numberWhatsapp } from "@/constants";
import SecaoAtendimento from "./secao-home/SecaoAtendimento";
import SecaoServicos from "./secao-home/SecaoServicos";
import SecaoVideos from "./secao-home/SecaoVideos";
import Banner from "./components/banner/Banner";


export default function Home() {

  const { isXs, isSm } = useResponsive();  
  
  return (    
    <>
      <HeaderBarIn background_color='transparent' border_radius="40px" top_bar="10px"
        height_xs="880px" height_sm="880px" height_md="700px" height_lg="700px" height_xl="700px"                
        renderBar={() => <BarraFerramentasCustom isXs={isXs} isSm={isSm} itens_menu={itemsMenu}></BarraFerramentasCustom>}
        renderBanner={() => <Banner isXs={isXs}></Banner>}>        
      </HeaderBarIn>
      
      <main>
        <SecaoSobre isXs={isXs} isSm={isSm}></SecaoSobre> 
        <SecaoServicos isXs={isXs} isSm={isSm}></SecaoServicos>
        <SecaoDepoimentos isXs={isXs} isSm={isSm}></SecaoDepoimentos> 
        <SecaoAtendimento></SecaoAtendimento>
        <SecaoVideos isXs={isXs}></SecaoVideos>
        <SecaoFormulario isXs={isXs}></SecaoFormulario>                                                                      
      </main>

      <FooterCustom itens_menu={itemsMenu}></FooterCustom>
      <WhatsAppButton whatsapp={numberWhatsapp}></WhatsAppButton>
      <ScrollToTopButtonCustom></ScrollToTopButtonCustom>
      <NotificationBarCustom></NotificationBarCustom>
    </>   
  );
}