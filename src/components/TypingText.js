import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypingText() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["FrontEnd Developer", "Web Developer"],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1500,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} className="name grtext"></span>;
}
