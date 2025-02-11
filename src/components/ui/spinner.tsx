import { cn } from '@/lib/utils';

interface ISpinnerProps {
  className: string;
}
export const Spinner: React.FC<ISpinnerProps> = ({ className }) => {
  return (
    <div className={cn('animate-spin border-dotted rounded-full', className)} />
  );
};
