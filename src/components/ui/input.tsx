import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  className?: string;
}

export const Input: React.FC<InputProps> = ({ error, className, ...props }) => {
  return (
    <input
      className={cn(
        'overflow-hidden rounded-xl text-primary-text bg-secondary focus:border-primary-border focus:outline-none focus:ring-0 placeholder:text-secondary-text px-4 text-sm font-normal leading-normal sm:text-base sm:font-normal sm:leading-normal',
        error
          ? 'border border-red-500 focus:ring-red-500'
          : 'border border-transparent ',
        className
      )}
      {...props}
    />
  );
};
