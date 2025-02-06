import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  className?: string;
}

export const Input: React.FC<InputProps> = ({ error, className, ...props }) => {
  return (
    <input
      className={cn(
        'flex overflow-hidden rounded-xl text-primary-text focus:outline-0 focus:ring-0 border-none bg-secondary focus:border-none placeholder:text-secondary-text px-4 text-sm font-normal leading-normal sm:text-base sm:font-normal sm:leading-normal',
        error && 'border-red-500 focus:ring-red-500',
        className
      )}
      {...props}
    />
  );
};
