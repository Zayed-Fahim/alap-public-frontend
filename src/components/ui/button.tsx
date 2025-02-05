import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  className
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em]',
        variant === 'primary'
          ? 'bg-primary text-optional-text'
          : 'bg-secondary text-primary-text',
        className
      )}
    >
      <span className="truncate">{label}</span>
    </button>
  );
};
