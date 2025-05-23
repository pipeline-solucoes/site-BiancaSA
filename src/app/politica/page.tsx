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
                <Box sx={{width:'100%'}}>                    
                    <ol>
                        <Typography variant="body2" component="li" color={theme.palette.primary.main}> Introdução
                            <Typography variant="body1" component="div" color={theme.palette.primary.main}>
                            Esta Política de Privacidade descreve como BRUNO DA SILVA CRISPIM, lida com os dados dos usuários dos sites BRUNOCRISPIM.COM e BRUNOCRISPIM.COM.BR. 
                            Ao utilizar nossos sites, você concorda com as práticas descritas nesta política.
                            </Typography>
                        </Typography>
                        <Typography variant="body2" component="li" color={theme.palette.primary.main}> Coleta de Informações
                            <Typography variant="body1" component="div" color={theme.palette.primary.main}>
                                Nosso site não coleta informações pessoais dos usuários. Utilizamos apenas dados anônimos para melhorar a experiência do usuário e otimizar o desempenho do site.
                            </Typography>                            
                        </Typography>
                        <Typography variant="body2" component="li" color={theme.palette.primary.main}>Uso das Informações
                            <Typography variant="body1" component="div" color={theme.palette.primary.main}>
                                Os dados anônimos coletados são usados exclusivamente para: 
                                <ul>
                                    <li>Análise de desempenho do site</li>
                                    <li>Melhoria da experiência do usuário</li>
                                    <li>Identificação de tendências e padrões de uso</li>
                                    <li>Possíveis cookies de bibliotecas e/ou frameworks utilizados no desenvolvimento do site podem armazenar localmente informações para melhorar o desempenho do site.</li>                                        
                                </ul>  
                            </Typography>    
                        </Typography>
                        <Typography variant="body2" component="li" color={theme.palette.primary.main}>Compartilhamento de Informações
                            <Typography variant="body1" component="div" color={theme.palette.primary.main}>
                            Não compartilhamos nenhuma informação pessoal ou anônima coletada dos usuários com terceiros.                                
                            </Typography>
                        </Typography>
                        <Typography variant="body2" component="li" color={theme.palette.primary.main}>Segurança
                            <Typography variant="body1" component="div" color={theme.palette.primary.main}>
                            Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger os dados anônimos coletados contra acesso, uso, alteração ou divulgação não autorizados. 
                            No entanto, nenhuma transmissão de dados pela internet é completamente segura e, portanto, não podemos garantir a segurança absoluta das informações transmitidas.                                
                            </Typography>
                        </Typography>
                        <Typography variant="body2" component="li" color={theme.palette.primary.main}>Seus Direitos
                            <Typography variant="body1" component="div" color={theme.palette.primary.main}>
                            Embora não coletemos informações pessoais, você tem o direito de saber como tratamos os dados anônimos e de solicitar a exclusão desses dados, se aplicável. 
                            Para exercer esses direitos, entre em contato conosco através do e-mail contato@brunocrispim.com.br                                
                            </Typography>
                        </Typography>
                        <Typography variant="body2" component="li" color={theme.palette.primary.main}>Cookies
                            <Typography variant="body1" component="div" color={theme.palette.primary.main}>
                            Nosso site utiliza cookies para melhorar a experiência do usuário. Cookies são pequenos arquivos de texto armazenados em seu dispositivo que ajudam a identificar e lembrar de suas preferências. 
                            Você pode configurar seu navegador para recusar cookies, mas isso pode limitar algumas funcionalidades do site.                                
                            </Typography>
                        </Typography>
                        <Typography variant="body2" component="li" color={theme.palette.primary.main}>Alterações na Política de Privacidade
                            <Typography variant="body1" component="div" color={theme.palette.primary.main}>
                            Reservamo-nos o direito de atualizar esta Política de Privacidade a qualquer momento. Quaisquer alterações serão publicadas nesta página e entrarão em vigor imediatamente após a publicação.                                
                            </Typography>
                        </Typography>
                        <Typography variant="body2" component="li" color={theme.palette.primary.main}>Contato
                            <Typography variant="body1" component="div" color={theme.palette.primary.main}>
                            Se você tiver alguma dúvida ou preocupação sobre esta Política de Privacidade ou sobre nossas práticas de proteção de dados, entre em contato conosco através do e-mail contato@ brunocrispim.com.br                                
                            </Typography>
                        </Typography>
                    </ol>                                        
                </Box>
                <BotaoVoltarPaginaPrincipal></BotaoVoltarPaginaPrincipal>           
            </Section>

            <FooterCustomTermoPolitica></FooterCustomTermoPolitica>
        </>
    )
}

export default PoliticaPrivacidade;