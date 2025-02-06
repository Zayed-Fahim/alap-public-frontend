import { Button } from '@/components/ui';
import { Apple, FacebookColored, Google } from '@/constants';
import React from 'react';

export const SocialAuthentication = () => {
  return (
    <div className="flex justify-center items-center gap-x-3 py-4">
      <Button variant="secondary" className="h-10">
        <div className="flex justify-center items-center gap-2">
          <Google className="size-4" />
          <span>Google</span>
        </div>
      </Button>
      <Button variant="secondary" className="h-10">
        <div className="flex justify-center items-center gap-2">
          <FacebookColored className="size-4" />
          <span>Facebook</span>
        </div>
      </Button>
      <Button variant="secondary" className="h-10">
        <div className="flex justify-center items-center gap-2">
          <Apple className="size-4" />
          <span>Apple</span>
        </div>
      </Button>
    </div>
  );
};


