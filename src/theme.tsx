import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      backgroundSectionMain: string;      
      backgroundSectionAlternative: string;
      backgroundSectionHighlight?: string;

      colorSectionMain: string;      

      backgroundButtonCTA: string,
      backgroundHoverButtonCTA: string,
      colorButtonCTA: string,
      colorHoverButtonCTA: string,
      borderRadiusButtonCTA: string,

      borderColor?: string;

      carouselColorIndicators: string,
      carouselColorFocus: string,
    };
  }
  interface PaletteOptions {
    custom?: {
      backgroundSectionMain: string;      
      backgroundSectionAlternative: string;
      backgroundSectionHighlight?: string;     

      backgroundButtonCTA: string,
      backgroundHoverButtonCTA: string,
      colorButtonCTA: string,
      colorHoverButtonCTA: string,
      borderRadiusButtonCTA: string,

      borderColor?: string;

      carouselColorIndicators: string,
      carouselColorFocus: string,
    };
  }
}

// Definindo o tema personalizado
const theme = createTheme({
  breakpoints: { 
    values: { 
      xs: 0, // Extra small devices (phones) 
      sm: 600, // Small devices (tablets) 
      md: 960, // Medium devices (desktops) 
      lg: 1280, // Large devices (large desktops) 
      xl: 1920, // Extra large devices (extra large desktops) 
    }, 
  },  
  shape: { 
    borderRadius: 8  
  },
  palette: {
    primary: {
      main: "#009ace" , //Azul
      dark: "#003d5c" , //Azul mais escuro
      light: "#eff6f9", //Azul mais claro
      contrastText: "#f2f2f2" //Branco      
    },
    secondary: {
      main: '#8c6d32', // Dourado 
      light: '#b68d40', // Dourado mais claro
      contrastText: "#f2f2f2" //Branco
    },    
    text: {
      primary: '#292929',
      secondary: '#4d4d4d',
      disabled: '#A9A9A9',
    },          
    custom: {
      backgroundSectionMain: '#ffffff',
      backgroundSectionAlternative: '#f2f4f7',
      backgroundSectionHighlight: '#f2f5f7',      

      backgroundButtonCTA: "#6aa754",
      backgroundHoverButtonCTA: '#6aa754',
      colorButtonCTA: '#ffffff',
      colorHoverButtonCTA: '#ffffff',
      borderRadiusButtonCTA: "25px",  

      borderColor: '#8c8c8c',
      
      carouselColorIndicators: 'gray',
      carouselColorFocus: '#336dd5',
    },
    info: {
      main: '#555f56',
    },
    error: {
      main: '#F44336',
    },
    success: {
      main: '#4CAF50',
    }    
  },
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
    h1: {         
      fontSize: '52px', // Desktop     
      lineHeight: '1.0',
      letterSpacing: '0.01em',
      fontWeight: 400,
      margin: 0,
      fontStyle: 'normal',
      color: '#292929',
      padding: '8px 0px',    
      '@media (min-width:601px) and (max-width:1280px)': {
        fontSize: '40px', // Tablet
      },
      '@media (max-width:600px)': {
        fontSize: '36px', // Mobile
      },
    },
    h2: {      
      fontSize: '20px', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 400,
      margin: 0,
      color: '#292929',    
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '18px', // Tablet
      },
      fontStyle: 'normal',
      '@media (max-width:600px)': {
        fontSize: '16px', // Mobile
      },
    },
    h3: {
      fontSize: '32px', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 600,
      margin: 0,
      fontStyle: 'normal',      
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '32px', // Tablet
      },
      '@media (max-width:600px)': {
        fontSize: '28px', // Mobile
      },
    },
    h4: {
      fontSize: '28px', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 500,
      margin: 0,
      fontStyle: 'normal',      
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '24px', // Tablet
      },
      '@media (max-width:600px)': {
        fontSize: '20px', // Mobile
      },
    },    
    h5: {
      fontSize: '18px', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 600,
      margin: 0,
      fontStyle: 'normal',      
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '18px', // Tablet
      },
      '@media (max-width:600px)': {
        fontSize: '18px', // Mobile
      },
    }, 
    h6: {
      fontSize: '16px', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 600,
      margin: 0,
      fontStyle: 'normal',      
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '16px', // Tablet
      },
      '@media (max-width:600px)': {
        fontSize: '16px', // Mobile
      },
    },     
    body1: { //Normal
      fontSize: '16px', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 400,      
      fontStyle: 'normal',      
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '16px', // Tablet
      },
      '@media (max-width:600px)': {
        fontSize: '16px', // Mobile
      },
    },
    body2: { //Destaque
      fontSize: '16px', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 600,     
      fontStyle: 'normal',      
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '16px', // Tablet
      },
      '@media (max-width:600px)': {
        fontSize: '16px', // Mobile
      },
    },
    caption: {
      fontSize: '12px', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 600,     
      fontStyle: 'normal',      
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '12px', // Tablet
      },
      '@media (max-width:600px)': {
        fontSize: '12px', // Mobile
      },
    }
    
  },
  spacing: 8,
});

export { theme };