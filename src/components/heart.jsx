import { useEffect, useRef } from "react";

export default function HeartCursor() {
  const growingHeart = useRef(null);
  const growInterval = useRef(null);

  useEffect(() => {
    const startGrowingHeart = (x, y) => {
      const heart = document.createElement("div");
      heart.classList.add("heart");

      const colors = ["#ff4d6d", "#ff8fa3", "#ffccd5", "#ff69b4", "#ff1493"];
      heart.style.color = colors[Math.floor(Math.random() * colors.length)];
      heart.style.left = x + "px";
      heart.style.top = y + "px";
      heart.innerText = "❤️";
      heart.style.fontSize = "28px"; // starting size

      document.body.appendChild(heart);

      growingHeart.current = heart;

      // keep increasing size
      let size = 28;
      growInterval.current = setInterval(() => {
        size += 4; // speed of increase
        heart.style.fontSize = size + "px";
      }, 60);
    };

    const stopGrowingHeart = () => {
      if (growInterval.current) {
        clearInterval(growInterval.current);
        growInterval.current = null;
      }

      if (growingHeart.current) {
        growingHeart.current.classList.add("heart-pop");
        setTimeout(() => {
          growingHeart.current?.remove();
        }, 300);
        growingHeart.current = null;
      }
    };

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      startGrowingHeart(touch.clientX, touch.clientY);
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      if (growingHeart.current) {
        growingHeart.current.style.left = touch.clientX + "px";
        growingHeart.current.style.top = touch.clientY + "px";
      }
    };

    const handleTouchEnd = () => stopGrowingHeart();

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return null;
}
