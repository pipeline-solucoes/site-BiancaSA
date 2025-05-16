'use client';

import SecaoSobre from "./secao-home/SecaoSobre";
import SecaoDepoimentos from "./secao-home/SecaoDepoimentos";
import SecaoFormulario from "./secao-home/SecaoFormulario";
import ScrollToTopButtonCustom from "./components/ScrollToTopButtonCustom";
import BannerCustomComCTA from "./components/banner/BannerCustomComCTA";
import NotificationBarCustom from "./components/NotificationBarCustom";
import FooterCustom from "./components/footer/FooterCustom";
import BarraFerramentasCustom from "./components/banner/BarraFerramentasCustom";
import { HeaderBarTop, useResponsive, WhatsAppButton } from "pipesolcomponents";
import { itemsMenu, numberWhatsapp } from "@/constants";
import SecaoAtendimento from "./secao-home/SecaoAtendimento";
import SecaoServicos from "./secao-home/SecaoServicos";
import SecaoVideos from "./secao-home/SecaoVideos";


export default function Home() {

  const { isXs, isSm } = useResponsive();  
  return (    
    <>
      <HeaderBarTop                
        renderBar={() => <BarraFerramentasCustom isXs={isXs} isSm={isSm} itens_menu={itemsMenu}></BarraFerramentasCustom>}
        renderBanner={() => <BannerCustomComCTA isSm={isSm}></BannerCustomComCTA>}>        
      </HeaderBarTop>
      
      <main>
        <SecaoSobre isXs={isXs} isSm={isSm}></SecaoSobre> 
        <SecaoServicos></SecaoServicos>
        <SecaoDepoimentos></SecaoDepoimentos> 
        <SecaoAtendimento></SecaoAtendimento>
        <SecaoVideos></SecaoVideos>
        <SecaoFormulario isXs={isXs} isSm={isSm}></SecaoFormulario>                                                                      
      </main>

      <FooterCustom itens_menu={itemsMenu}></FooterCustom>
      <WhatsAppButton whatsapp={numberWhatsapp}></WhatsAppButton>
      <ScrollToTopButtonCustom></ScrollToTopButtonCustom>
      <NotificationBarCustom></NotificationBarCustom>
    </>   
  );
}