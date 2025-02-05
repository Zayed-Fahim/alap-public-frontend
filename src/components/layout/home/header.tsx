import React from 'react';
import { Logo } from '@/constants';
import { Button } from '@/components/ui';
import { Navigation } from '@/components/layout';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary-border px-10 py-3">
      <div className="flex items-center gap-4 text-primary-text">
        <div className="size-4">
          <Logo className="size-4" />
        </div>
        <h2 className="text-primary-text text-lg font-bold leading-tight tracking-[-0.015em]">
          Alap
        </h2>
      </div>

      <div className="flex flex-1 justify-end gap-8">
        <Navigation />
        <div className="flex gap-2">
          <Button label="Sign in" variant="primary" />
          <Button label="Get started" variant="secondary" />
        </div>
      </div>
    </header>
  );
};
