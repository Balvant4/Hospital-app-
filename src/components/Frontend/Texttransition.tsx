import React from "react";

const TEXTS = ["Forest", "Building", "Tree", "Color"];

const TransitionText = () => {
  const [index, setIndex] = React.useState(0);
  const [fade, setFade] = React.useState(true);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // Start fading out the current text
      setTimeout(() => {
        setIndex((index) => (index + 1) % TEXTS.length); // Change text
        setFade(true); // Fade in the new text
      }, 500); // Time to match the fade-out duration
    }, 3000); // every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <h1
      style={{
        opacity: fade ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      {TEXTS[index]}
    </h1>
  );
};

export default TransitionText;
