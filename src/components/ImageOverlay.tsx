import React from "react";
// @ts-ignore
import summer from "../img/summer.png";

interface ImageOverlayProps {
  onClose: () => void;
  footer?: React.ReactNode;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({ onClose, footer }) => {
  const handleImageClick = () => {
    const target = document.getElementById("MiniForm");
    if (target) {
      const headerOffset = 300; // Высота шапки (настрой под свой layout)
      const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    onClose(); // Закрыть попап
  };

  return (
    <div
      className="image-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
      onClick={onClose}
    >
      {/* Кнопка закрытия */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        style={{
          position: "absolute",
          top: 0,
          right: -50,
          background: "transparent",
          border: "none",
          fontSize: 52,
          color: "#fff",
          cursor: "pointer",
        }}
        aria-label="Закрыть"
      >
        &times;
      </button>

      <img
        src={summer}
        alt="Спецпредложение"
        onClick={(e) => {
          e.stopPropagation();
          handleImageClick();
        }}
        style={{
          maxWidth: "90%",
          maxHeight: "80vh",
          borderRadius: 8,
          cursor: "pointer",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
        }}
      />

    </div>
  );
};

export default ImageOverlay;
