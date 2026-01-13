import React, { useEffect, useState } from "react";
import ImageOverlay from "./ImageOverlay";

const ImageTrigger: React.FC = () => {
  const [showImage, setShowImage] = useState(false);
  const [hasShownOnUnload, setHasShownOnUnload] = useState(false);
  const [confirmedExit, setConfirmedExit] = useState(false);

  useEffect(() => {
  const alreadyShown = sessionStorage.getItem("imageShownOnce");

  if (!alreadyShown) {
    const timer = setTimeout(() => {
      setShowImage(true);
      sessionStorage.setItem("imageShownOnce", "true");
    }, 35000); // 20 секунд

    return () => clearTimeout(timer);
  }
}, []);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showImage && !hasShownOnUnload) {
        setShowImage(true);
        setHasShownOnUnload(true);
      }
    };
    window.addEventListener("mouseout", handleMouseLeave);
    return () => window.removeEventListener("mouseout", handleMouseLeave);
  }, [showImage, hasShownOnUnload]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (showImage && !confirmedExit) {
        e.preventDefault();
        e.returnValue = "";
        return "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [showImage, confirmedExit]);

  const handleClosePopup = () => {
    setShowImage(false);
  };

  const handleAllowExit = () => {
    setConfirmedExit(true);
    setShowImage(false);
    // Страница сможет закрыться
  };

  return (
    <>
      {showImage && (
        <ImageOverlay
          onClose={handleClosePopup}

        />
      )}
    </>
  );
};

export default ImageTrigger;
