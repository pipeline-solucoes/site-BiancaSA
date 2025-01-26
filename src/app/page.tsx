"use client"

import { themePS } from "@/theme";
import { Button } from "pipesolcomponents";
import { ThemeProvider } from "styled-components";

export default function Home() {
  return (
    <ThemeProvider theme={themePS}>
      <Button texto="teste"></Button>
    </ThemeProvider>   
  );
}
