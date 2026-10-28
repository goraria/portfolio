"use client";
import { Button } from "@/components/ui/button.tsx";
import { Download } from "lucide-react";
import { useState } from "react";

const HackerButton = ({ label }: { label: string }) => {
  const [displayText, setDisplayText] = useState(label);
  const charset = "abcdefghijklmnopqrstuvwxyz";

  const randomChars = (length: number) => {
    return Array.from(
      { length },
      () => charset[Math.floor(Math.random() * charset.length)],
    ).join("");
  };

  const scramble = async (input: string) => {
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
    <Button onMouseEnter={startScrambling} className="h-10 rounded-full px-4 gap-2">
      {" "}
      <Download className="" />
      {displayText}
    </Button>
  );
};

export { HackerButton };
