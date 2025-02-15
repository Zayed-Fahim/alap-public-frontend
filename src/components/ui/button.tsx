import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'default';
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'default',
  className,
  disabled = false
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        className,
        'flex min-w-fit cursor-pointer items-center justify-center overflow-hidden',
        variant === 'primary' &&
          'bg-primary text-optional-text px-4 rounded-full text-sm font-bold leading-normal tracking-[0.015em]',
        variant === 'secondary' &&
          'bg-secondary text-primary-text px-4 rounded-full text-sm font-bold leading-normal tracking-[0.015em]',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
    >
      <div className="truncate">{children}</div>
    </button>
  );
};
