import React from "react";
import { ThemeProvider } from "./ThemeContext";
import { ModalProvider } from "./ModalContext";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <ModalProvider>{children}</ModalProvider>
    </ThemeProvider>
  );
}
