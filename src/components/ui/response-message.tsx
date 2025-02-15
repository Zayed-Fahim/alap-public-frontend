import { cn } from '@/lib/utils';

export interface IResponseMessage {
  message: string;
  type: 'success' | 'info' | 'warning' | 'error' | 'default';
}

interface IResponseProps extends IResponseMessage {
  className?: string;
}

export const ResponseMessage: React.FC<IResponseProps> = ({
  message,
  type,
  className
}) => {
  const textColor = {
    success: 'text-green-500',
    info: 'text-blue-500',
    warning: 'text-yellow-500',
    error: 'text-red-500',
    default: 'text-gray-500'
  }[type];

  return <p className={cn('text-sm', textColor, className)}>{message}</p>;
};
