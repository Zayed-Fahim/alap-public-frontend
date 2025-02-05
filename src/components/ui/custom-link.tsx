import { cn } from '@/lib/utils';
import Link from 'next/link';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  children,
  className
}) => {
  return (
    <Link href={href} className={cn(className)}>
      {children}
    </Link>
  );
};
