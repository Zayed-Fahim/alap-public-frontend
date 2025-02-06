import { cn } from '@/lib/utils';

type TextProps = {
  as?: keyof React.JSX.IntrinsicElements;
  children?: React.ReactNode;
  text?: string;
  className?: string;
};

export const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  children,
  text,
  className
}) => {
  return <Component className={cn(className)}>{text || children}</Component>;
};
