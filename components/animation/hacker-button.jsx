"use client";
import { useState } from "react";
import { Download } from "@gorth/primitive/cores/lucide";
import { Button } from "@gorth/primitive/custom/button";

const HackerButton = ({ label }) => {
  const [displayText, setDisplayText] = useState(label);
  const charset = "abcdefghijklmnopqrstuvwxyz";

  const randomChars = (length) => {
    return Array.from(
      { length },
      () => charset[Math.floor(Math.random() * charset.length)],
    ).join("");
  };

  const scramble = async (input) => {
    let prefix = "";
    for (let index = 0; index < input.length; index++) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      prefix += input.charAt(index);
      setDisplayText(prefix + randomChars(input.length - prefix.length));
    }
  };

  const startScrambling = () => {
    scramble(label);
    setTimeout(() => console.log("Submitted"), label.length * 50);
  };

  return (
    <Button onMouseEnter={startScrambling}>
      {" "}
      <Download className="mx-1" />
      {displayText}
    </Button>
  );
};

export { HackerButton };
