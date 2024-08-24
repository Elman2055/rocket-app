import { useState, useEffect } from "react";

const useDesktop = () => {
  const [isDesktop, setIsDesktop] = useState();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop;
};

export default useDesktop;
