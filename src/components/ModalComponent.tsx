import React from "react";
import Modal from "./Modal";
import { useModal, useModalUpdate } from "../context/ModalContext";

const styles = {
  otherContentStyle: {
    position: "relative",
    zIndex: 2,
    backgroundColor: "red",
    padding: "10px",
  },
} as const;

export default function ModalComponent() {
  const isOpen = useModal();
  const toggleModal = useModalUpdate();

  return (
    <>
      <div>
        <button onClick={toggleModal}>Open Modal</button>
        <Modal open={isOpen}>Hello world</Modal>
      </div>
      <div style={styles.otherContentStyle}>Other Content</div>
    </>
  );
}
