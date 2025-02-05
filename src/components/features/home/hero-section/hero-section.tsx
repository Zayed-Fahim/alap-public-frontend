import { Button } from '@/components/ui';
import React from 'react';

export const Hero = () => {
  return (
    <div className="p-4 w-full">
      <div
        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat sm:gap-8 sm:rounded-xl items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/images/hero.png")',
          backgroundSize: 'cover'
        }}
      >
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-optional-text text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
            Welcome to Alap
          </h1>
          <h2 className="text-optional-text text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
            Real-time communication for the modern workplace
          </h2>
        </div>

        <Button label="Get started" variant="primary" />
      </div>
    </div>
  );
};
