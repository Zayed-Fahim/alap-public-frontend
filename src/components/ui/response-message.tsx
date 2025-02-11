import { cn } from '@/lib/utils';

interface IResponseMessageProps {
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
  className?: string;
}

export const ResponseMessage: React.FC<IResponseMessageProps> = ({
  message,
  type,
  className
}) => {
  return (
    <p
      className={cn(
        'text-sm',
        type === 'success' ? 'text-primary-text' : 'text-red-500',
        className
      )}
    >
      {message}
    </p>
  );
};
