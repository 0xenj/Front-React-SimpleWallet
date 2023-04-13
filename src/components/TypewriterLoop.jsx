import React, { useRef, useEffect } from "react";
import Typewriter from "typewriter-effect";

function TypewriterLoop() {
  const typewriterRef = useRef();

  const words = ["The most secure wallet", "The cheaper wallet", "The first Sepolia wallet", "The simplest wallet"];
  let currentWordIndex = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      typewriterRef.current
        .typeString(words[currentWordIndex])
        .callFunction(() => {
          currentWordIndex =
            currentWordIndex === words.length - 1 ? 0 : currentWordIndex + 1;
        })
        .pauseFor(2000)
        .deleteAll()
        .start();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [words, typewriterRef]);

  return (
    <Typewriter
      options={{ cursor: "" }}
      onInit={(typewriter) => (typewriterRef.current = typewriter)}
    />
  );
}

export default TypewriterLoop;