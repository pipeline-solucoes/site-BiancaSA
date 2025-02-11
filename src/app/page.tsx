"use client"

import { themePS } from "@/theme";
import { ThemeProvider } from "styled-components";
import { AreaBannerMenuTitle, Banner, TitleBanner } from "pipesolcomponents";
import { ReactElement } from "react";
import banner from "../../public/banner.jpeg"

export default function Home() {

  const renderElement = (): ReactElement => {
    return (
      <div>funcionou...</div>
    );
  };

  const renderTextoTitle = (): ReactElement => {
    return (
      <div>funcionou...</div>
    );
  };

  const renderTitle = (): ReactElement => {
    return (
      <TitleBanner color="#d32f2f" width="100%" render={renderTextoTitle}>
      </TitleBanner>
    );
  };

  return (
    <ThemeProvider theme={themePS}>
      <Banner src={banner} alt="banner">
        <AreaBannerMenuTitle background_color_menu="#d32f2f"
          renderMenu={renderElement}
          renderContent={renderTitle}>
        </AreaBannerMenuTitle>
      </Banner>

      <p>teste</p>

      <p>teste</p>

    </ThemeProvider>   
  );
}