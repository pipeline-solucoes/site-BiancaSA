"use client"

import { themePS } from "@/theme";
import { ThemeProvider } from "styled-components";
import { Banner } from "pipesolcomponents";
import { ReactElement } from "react";

export default function Home() {

  const renderElement = (): ReactElement => {
    return <div>Hello, world!</div>;
  };

  return (
    <ThemeProvider theme={themePS}>
      <Banner background_color="transparent"            
        background_image_1080X600='/banner1080x600.webp'
        background_image_1920X600='./banner1080x600.webp'
        renderContent ={renderElement}>
      </Banner>
      <p>teste</p>

      <p>teste</p>
    </ThemeProvider>   
  );
}