import { ItemMenuConfig, ShadowConfig } from "pipesolcomponents";

export const urlTermoUso: string = "/termo-de-uso";
export const urlPoliticaPrivacidade: string = "/politica-de-privacidade";
export const numberPhone: string = "(21) 98131-4001";
export const numberWhatsapp: string = "5521981314001";
export const urlInstagram = "https://www.instagram.com/biancasouzaaguiarfisio/"
export const email = 'contato@biancasouzaaguiar.com.br'
export const tokenBearer = "token-render-prod";
export const urlApi = "https://backend-sites-pipelinesolucoes.onrender.com/send-email";
export const siteKeyRecaptcha = "6LfNNjQrAAAAAJdYsNsPL8RFXM6krfURGLX9Ze98";

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



