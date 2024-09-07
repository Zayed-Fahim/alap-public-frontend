import Image from "next/image";
import React from "react";

interface LogoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  title?: string;
  loading?: "eager" | "lazy" | undefined;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  src,
  alt,
  className,
  width,
  height,
  title,
  loading = "lazy",
}) => {
  return (
    <Image
      title={title}
      width={width}
      height={height}
      loading={loading}
      src={src}
      alt={alt}
      className={className}
    />
  );
};

export default Logo;
