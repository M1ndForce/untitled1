import React from "react";

export default function Modal({
  open,
  children,
}: {
  open: true | false;
  children: string;
}) {
  const styles = {
    overlayStyle: {
      position: "fixed",
      zIndex: "3",
      backgroundColor: "rgba(0,0,0 .7)",
    },
    modalStyle: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#FFF",
      padding: "50px",
      zIndex: 1000,
    },
  } as const;

  if (!open) return null;

  return (
    <>
      <div style={styles.overlayStyle} />
      <div style={styles.modalStyle}>
        <button />
        {children}
      </div>
    </>
  );
}
