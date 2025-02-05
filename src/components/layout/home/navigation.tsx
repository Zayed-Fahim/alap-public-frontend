import { CustomLink } from '@/components/ui';
import { NAV_ITEMS } from '@/constants/navigation';

export const Navigation: React.FC = () => {
  return (
    <nav className="flex items-center gap-9">
      {NAV_ITEMS.map((item) => (
        <CustomLink
          key={item.id}
          href={item.href}
          className="text-primary-text font-medium leading-normal transition-colors hover:text-primary"
        >
          {item.label}
        </CustomLink>
      ))}
    </nav>
  );
};
