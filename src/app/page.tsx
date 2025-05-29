'use client';

import SecaoSobre from "./secao-home/SecaoSobre";
import SecaoDepoimentos from "./secao-home/SecaoDepoimentos";
import SecaoFormulario from "./secao-home/SecaoFormulario";
import ScrollToTopButtonCustom from "./components/ScrollToTopButtonCustom";
import NotificationBarCustom from "./components/NotificationBarCustom";
import FooterCustom from "./components/footer/FooterCustom";
import {useResponsive, WhatsAppButton} from "pipesolcomponents";
import {itemsMenu, numberWhatsapp} from "@/constants";
import SecaoAtendimento from "./secao-home/SecaoAtendimento";
import SecaoServicos from "./secao-home/SecaoServicos";
import SecaoVideos from "./secao-home/SecaoVideos";
import HeaderBarInCustom from "./components/banner/HeaderBarInCustom";
import InfiniteTickerCustom from "./components/InfiniteTickerCustom";


export default function Home() {

  const { isXs, isSm } = useResponsive();  
  
  return (    
    <>      
      <HeaderBarInCustom isXs={isXs} isSm={isSm} itemsMenu={itemsMenu}></HeaderBarInCustom>
      <InfiniteTickerCustom></InfiniteTickerCustom>
      
      <main>
        <SecaoSobre isXs={isXs} isSm={isSm}></SecaoSobre> 
        <SecaoServicos isXs={isXs} isSm={isSm}></SecaoServicos>
        <SecaoDepoimentos isXs={isXs} isSm={isSm}></SecaoDepoimentos> 
        <SecaoAtendimento isXs={isXs} isSm={isSm}></SecaoAtendimento>
        <SecaoVideos isXs={isXs} isSm={isSm}></SecaoVideos>
        <SecaoFormulario isXs={isXs}></SecaoFormulario>                                                                      
      </main>

      <FooterCustom itens_menu={itemsMenu}></FooterCustom>
      <WhatsAppButton whatsapp={numberWhatsapp}></WhatsAppButton>
      <ScrollToTopButtonCustom></ScrollToTopButtonCustom>
      <NotificationBarCustom></NotificationBarCustom>
    </>   
  );
}