import { CustomLink } from '@/components/ui';
import { FOOTER_NAV_ITEMS, SOCIAL_MEDIA_LINKS } from '@/constants/navigation';
import React from 'react';

export const Footer = () => {
  return (
    <div className="container mx-auto flex flex-1 justify-center py-5">
      <div className=" flex flex-col max-w-[960px] flex-1">
        <footer className="flex flex-col gap-6 px-5 py-10 text-center">
          <div className="grid grid-cols-4 place-items-center gap-6 sm:flex-row sm:justify-around">
            {FOOTER_NAV_ITEMS.map((link, index) => (
              <CustomLink
                key={index}
                href={link?.href}
                className="text-footer text-base font-normal leading-normal"
              >
                {link?.label}
              </CustomLink>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
              <CustomLink key={index} href={link.href}>
                <div className="text-footer size-6" data-icon={link.name}>
                  {link.icon}
                </div>
              </CustomLink>
            ))}
          </div>
          <p className="text-footer text-base font-normal leading-normal">
            @ {new Date().getFullYear()} Alap Inc.
          </p>
        </footer>
      </div>
    </div>
  );
};
