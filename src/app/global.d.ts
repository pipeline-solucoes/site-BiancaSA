declare global {
    interface Window {
      CustomSubstackWidget: {
        substackUrl: string;
        placeholder: string;
        buttonText: string;
        theme: string;
        colors: {
          primary: string;
          input: string;
          email: string;
          text: string;
        };
      };
    }
  }
  
  // Isso exporta o módulo para que o TypeScript reconheça
  export {};