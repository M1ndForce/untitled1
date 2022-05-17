import React, { useContext, useState } from "react";

const ModalContext = React.createContext(false);
const ModalUpdateContext = React.createContext(() => {});

export function useModal() {
  return useContext(ModalContext);
}
export function useModalUpdate() {
  return useContext(ModalUpdateContext);
}

export function ModalProvider({ children }: { children: any }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((prevOpenState) => !prevOpenState);
  }

  return (
    <ModalContext.Provider value={isOpen}>
      <ModalUpdateContext.Provider value={toggleOpen}>
        {children}
      </ModalUpdateContext.Provider>
    </ModalContext.Provider>
  );
}
