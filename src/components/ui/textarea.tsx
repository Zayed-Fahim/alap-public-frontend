import { cn } from '@/lib/utils';

interface TextAreaFieldProps {
  placeholder: string;
  className?: string;
  rows?: number;
}

export const TextArea: React.FC<TextAreaFieldProps> = ({
  placeholder,
  className,
  rows
}) => {
  return (
    <textarea
      placeholder={placeholder}
      rows={rows}
      className={cn(
        'flex overflow-hidden rounded-xl text-primary-text focus:outline-0 focus:ring-0 border border-none bg-secondary focus:border-none placeholder:text-secondary-text p-4 text-sm font-normal leading-normal sm:text-base sm:font-normal sm:leading-normal',
        className
      )}
    />
  );
};
