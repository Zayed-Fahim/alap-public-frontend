import { CustomLink } from '@/components/ui';
import { NAV_ITEMS } from '@/constants/navigation';
import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <nav className="flex items-center gap-9">
      {NAV_ITEMS.map((item) => (
        <CustomLink key={item.id} href={item.href}>
          {item.label}
        </CustomLink>
      ))}
    </nav>
  );
};
