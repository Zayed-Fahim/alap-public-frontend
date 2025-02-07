import { cn } from '@/lib/utils';

interface HeadingTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  titleSize?: 'sm' | 'md' | 'lg' | 'xl';
  subtitleSize?: 'sm' | 'md' | 'lg';
  titleColor?: string;
  subtitleColor?: string;
  className?: string;
}

export const HeadingTitle: React.FC<HeadingTitleProps> = ({
  title,
  subtitle,
  align = 'center',
  titleSize = 'xl',
  subtitleSize = 'md',
  titleColor = 'text-optional-text',
  subtitleColor = 'text-optional-text',
  className
}) => {
  const titleClass = {
    sm: 'text-xl font-bold',
    md: 'text-2xl font-bold',
    lg: 'text-4xl font-extrabold',
    xl: 'text-5xl font-extrabold'
  };

  const subtitleClass = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className={cn('flex flex-col gap-2', `text-${align}`, className)}>
      <h1 className={cn(titleClass[titleSize], titleColor)}>{title}</h1>
      {subtitle && (
        <p className={cn(subtitleClass[subtitleSize], subtitleColor)}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
