import { Button, Logo } from "@/atoms";
import React from "react";

interface SocialButtonProps {
  logoSrc: string;
  text: string;
  onClick?: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  logoSrc,
  text,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
        hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
    >
      <div className="relative flex items-center space-x-4 justify-center">
        <Logo
          src={logoSrc}
          alt={`${text} logo`}
          width={80}
          height={80}
          className="absolute left-0 w-5"
        />
        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
          {text}
        </span>
      </div>
    </Button>
  );
};

export default SocialButton;
