"use client";

import { HeaderBarTop, Section, useResponsive } from "pipesolcomponents";
import BannerCustomSemCTA from "../components/banner/BannerCustomSemCTA";
import { Box, Typography, useTheme } from "@mui/material";
import TitleSection from "../components/TitleSection";
import BotaoVoltarPaginaPrincipal from "../components/botaoVoltarPaginaPrincipal";
import FooterCustomTermoPolitica from "../components/footer/FooterCustomTermoPolitica";
import BarraFerramentasCustom from "../components/banner/BarraFerramentasCustom";
import { itemsMenuTermoPolitica } from "@/constants";


const TermoDeUso: React.FC = ()  => {

    const theme = useTheme();
    const { isXs, isSm } = useResponsive();        

    return(
        <>
            <HeaderBarTop                       
                renderBar={() => <BarraFerramentasCustom isXs={isXs} isSm={isSm} itens_menu={itemsMenuTermoPolitica}></BarraFerramentasCustom>}
                renderBanner={() => <BannerCustomSemCTA isSm={isSm}></BannerCustomSemCTA>}>        
            </HeaderBarTop>

            <Section section_id='termo' background_color={theme.palette.custom?.backgroundSectionMain}>
                <Box sx={{width:'100%'}}>
                    <TitleSection>Termos de Uso</TitleSection>
                </Box>
                <Box sx={{width:'100%'}}>
                    <ol>
                        <Typography variant="body2" component="li" color={theme.palette.primary.main}>Objetivo 
                            <Typography variant="body1" component="div" color={theme.palette.primary.main}>
                            Este documento estabelece os termos e condições de uso do site BRUNOCRISPIM.COM e BRUNOCRISPIM.COM.BR (aqui referido como &quot;Site&quot;), que pertencem à BRUNO DA SILVA CRISPIM (aqui referido como “Autor”) Ao acessar e utilizar o Site, você concorda em cumprir todas as condições estabelecidas.                            
                            </Typography>
                        </Typography>
                        <Typography variant="body2" component="li" color={theme.palette.primary.main}>Aceitação dos Termos 
                            <Typography variant="body1" component="div" color={theme.palette.primary.main}>
                            Ao acessar o Site, você concorda em cumprir os termos e condições estabelecidos. Caso não concorde, não deve acessar ou utilizar o Site.                         
                            </Typography>
                        </Typography>
                        <Typography variant="body2" component="li" color={theme.palette.primary.main}>Uso do Site 
                            <Typography variant="body1" component="div" color={theme.palette.primary.main}>
                            O Site é destinado exclusivamente para divulgar os interesses, história, objetivos, mentorias e obras literárias. Você não deve usar o Site para fins ilegais, prejudiciais, ofensivos, difamatórios ou que violem os direitos de terceiros.                            
                            </Typography>
                        </Typography>
                        <Typography variant="body2" component="li" color={theme.palette.primary.main}>Política de Privacidade 
                            <Typography variant="body1" component="div" color={theme.palette.primary.main}>
                            O Site não coleta e não utiliza dados pessoais conforme descrito na nossa Política de Privacidade, que está disponível no link https://brunocrispim.com.br/politica-de-privacidade                            
                            </Typography>
                        </Typography>
                        <Typography variant="body2" component="li" color={theme.palette.primary.main}>Sobre o Autor 
                            <Typography variant="body1" component="div" color={theme.palette.primary.main}>
                            O Site é operado por Bruno Crispim.  
                            É escritor, professor e mestre em Escrita Criativa pela PUC-RS. Com 4 romances publicados, tenho vencido o Prêmio UFES de Literatura e sendo finalista do Prêmio Kindle de Literatura. 
                            Para saber mais sobre nosso Autor e nossos serviços, visite a página https://brunocrispim.com.br.                            
                            </Typography>
                        </Typography>
                        <Typography variant="body2" component="li" color={theme.palette.primary.main}>Licença de uso e cópia 
                            <Typography variant="body1" component="div" color={theme.palette.primary.main}>
                            O visitante poderá acessar todo o conteúdo do website, como artigos, vídeos, imagens, produtos e serviços, não significando nenhum tipo de cessão de direito ou permissão de uso, ou de cópia dos mesmos. 
                            Todos os direitos são preservados, conforme a legislação brasileira, principalmente na Lei de Direitos Autorais (regulamentada na Lei nº 9.610/18), assim como no Código Civil brasileiro (regulamentada na Lei nº 10.406/02), ou quaisquer outras legislações aplicáveis. 
                            Todo o conteúdo do Site é protegido por direitos autorais, e seu uso, cópia, transmissão, venda, cessão ou revenda, deve seguir a lei brasileira, tendo o Autor todos os seus direitos reservados, e não permitindo a cópia ou utilização de nenhuma forma e meio, sem autorização expressa e por escrita da mesma. 
                            O Autor poderá em casos concretos permitir pontualmente exceções a este direito, que serão claramente destacados no mesmo, com a forma e permissão de uso do conteúdo protegido. 
                            Este direito é revogável e limitado as especificações de cada caso.                            
                            </Typography>
                        </Typography>
                        <Typography variant="body2" component="li" color={theme.palette.primary.main}>Modificações 
                            <Typography variant="body1" component="div" color={theme.palette.primary.main}>
                            O Site pode ser atualizado ou modificado a qualquer momento. O usuário fica responsável por verificar as atualizações dos termos e condições.                            
                            </Typography>
                        </Typography>
                        <Typography variant="body2" component="li" color={theme.palette.primary.main}>Responsabilidade 
                            <Typography variant="body1" component="div" color={theme.palette.primary.main}> 
                            O Site não se responsabiliza por qualquer dano ou perda decorrente do uso do Site, incluindo, mas não se limitando a perdas financeiras ou danos à reputação.                           
                            </Typography>
                        </Typography>
                        <Typography variant="body2" component="li" color={theme.palette.primary.main}>Limitação de Responsabilidade 
                            <Typography variant="body1" component="div" color={theme.palette.primary.main}>
                            O Site não se responsabiliza por qualquer conteúdo fornecido por usuários ou terceiros. Qualquer conteúdo postado no Site é responsabilidade exclusiva do autor.                            
                            </Typography>
                        </Typography>
                        <Typography variant="body2" component="li" color={theme.palette.primary.main}>Leis Aplicáveis
                            <Typography variant="body1" component="div" color={theme.palette.primary.main}> 
                            Estes termos e condições são regidos pelas leis brasileiras. Qualquer disputa decorrente destes termos e condições será resolvida nos tribunais brasileiros.                           
                            </Typography>
                        </Typography>
                        <Typography variant="body2" component="li" color={theme.palette.primary.main}>Contato 
                            <Typography variant="body1" component="div" color={theme.palette.primary.main}>
                            Para quaisquer dúvidas ou preocupações, entre em contato conosco pelo e- mail contato@brunocrispim.com.br ou por telefone (21) 99475-1178                            
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

export default TermoDeUso;