import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full px-4 text-sm font-bold leading-normal tracking-[0.015em]',
        variant === 'primary'
          ? 'bg-primary text-optional-text'
          : 'bg-secondary text-primary-text',
        className
      )}
    >
      <div className="truncate">{children}</div>
    </button>
  );
};
