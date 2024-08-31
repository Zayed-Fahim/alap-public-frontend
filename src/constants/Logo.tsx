import Image from "next/image";
import React from "react";

interface LogoProps {
  src: string;
  alt: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt, className }) => {
  return (
    <Image
      width={80}
      height={80}
      src={src}
      alt={alt}
      className={`${className}`}
    />
  );
};

export default Logo;
