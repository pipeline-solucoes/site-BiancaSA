"use client";

import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { useEffect } from "react";

interface SubstackNewsletterWidgetProps{
  width: string; 
}

//Adicionar o codigo no arquivo tsconfig.json 
//"typeRoots": ["./types", "./node_modules/@types"]
//declarar o objeto CustomSubstackWidget no arquivo global.d.ts

const SubstackNewsletterWidget: React.FC<SubstackNewsletterWidgetProps> = ({width}) => { 

  const theme = useTheme();

  useEffect(() => {
    // Configurações do widget
    window.CustomSubstackWidget = {
      substackUrl: "brunocrispim.substack.com",
      placeholder: "example@gmail.com",
      buttonText: "Enviar",
      theme: "custom",      
      colors: {
        primary: theme.palette.primary.main,
        input: theme.palette.primary.main,
        email: theme.palette.primary.contrastText,
        text: theme.palette.primary.contrastText,
      },
    };

    // Carregar o script dinamicamente
    const script = document.createElement("script");
    script.src = "https://substackapi.com/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Remover o script ao desmontar o componente
      document.body.removeChild(script);
    };
  }, [theme]);

  const color = theme.palette.primary.contrastText;

  return (
    <Box sx={{ display:'flex', flexDirection:'column', 
      alignItems:'flex-start', justifyContent: 'flex-start',  
      gap: '16px', width: {width} }}>      
      <Typography variant="body1" color={color}>Inscreva-se na minha Newsletter e receba as últimas novidades diretamente no seu e-mail.</Typography>
      <div id="custom-substack-embed" style={{ width: width}}></div>
    </Box>    
  );
};

export default SubstackNewsletterWidget;