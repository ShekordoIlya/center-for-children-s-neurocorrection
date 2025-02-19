import { useState, useEffect } from "react";

export default function TopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const styles = {
    button: {
      position: "fixed",
      bottom: "40px",
      right: "50px",
      background: "none",
      border: "none",
      cursor: "pointer",
      zIndex: 1000,
      color: "green",
    },
  };

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} style={styles.button}>
          <i class="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}
