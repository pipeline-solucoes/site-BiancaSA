import { ItemMenuConfig, ShadowConfig } from "pipesolcomponents";

export const tituloBanner: string = "Fisioterapia Humanizada no Rio de Janeiro, Niterói e São Gonçalo";
export const subTituloBanner: string = "Recupere sua qualidade de vida com cuidado próximo, no seu ritmo e no seu espaço.";

export const urlTermoUso: string = "/termo";
export const urlPoliticaPrivacidade: string = "/politica";
export const numberPhone: string = "(21) 98131-4001";
export const numberWhatsapp: string = "5521981314001";
export const tokenFormulario = "";
export const urlInstagram = "https://www.instagram.com/biancasouzaaguiarfisio/"
export const email = 'contato@biancasouzaaguiar.com.br'

export const sombraClara: ShadowConfig = {
    offsetX: '-10px',
    offsetY: '-10px',
    blur: '20px',
    color: '#ffffff'
  };

export const sombraEscura: ShadowConfig = {
    offsetX: '10px',
    offsetY: '10px',
    blur: '20px',
    color: 'rgba(0, 0, 0, 0.25)'
  }

export const itemsMenu : ItemMenuConfig[] = [
    {url: '#sobre', text: 'Sobre'},
    {url: '#servicos', text: 'Serviços'},
    {url: '#formulario', text: 'Fale com a Bianca'},
    {url: '#atendimento', text: 'Atendimento'},
    {url: '#depoimentos', text: 'Depoimentos'},
    {url: '#podcasts', text: 'Podcasts'},
  ];

  export const itemsMenuPage : ItemMenuConfig[] = [
    {url: '/', text: 'Home'},
    {url: '/#sobre', text: 'Sobre'},
    {url: '/#servicos', text: 'Serviços'},
    {url: '/#formulario', text: 'Fale com a Bianca'},
    {url: '/#atendimento', text: 'Atendimento'},
    {url: '/#depoimentos', text: 'Depoimentos'},
    {url: '/#podcasts', text: 'Podcasts'},
  ];  

export const itemsMenuTermoPolitica : ItemMenuConfig[] = []; 



