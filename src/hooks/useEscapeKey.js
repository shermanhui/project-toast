import React from "react";

export const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        callback(e);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback]);
};
