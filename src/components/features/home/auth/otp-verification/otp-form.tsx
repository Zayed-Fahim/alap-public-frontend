import { Input } from '@/components/ui';
import React from 'react';

export const OtpForm: React.FC = () => {
  return (
    <fieldset className="flex gap-4 py-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <Input
          id="otp"
          key={index}
          className="h-14 w-14 text-center border-2 border-transparent bg-secondary focus:border-2 focus:border-[#dce0e5]"
          type="number"
          max={1}
          min={0}
          onKeyUp={(event) => {
            const target = event.target as HTMLInputElement;
            if (event.key.match(/^\d$/)) {
              if (target.value.length > 1) {
                target.value = target.value[0];
              }
              (target.nextElementSibling as HTMLElement)?.focus();
            }
          }}
          onKeyDown={(event) => {
            const target = event.target as HTMLInputElement;
            if (event.key === 'Backspace' && target.value === '') {
              (target.previousElementSibling as HTMLElement)?.focus();
            } else if (event.key === 'ArrowLeft') {
              (target.previousElementSibling as HTMLElement)?.focus();
            } else if (event.key === 'ArrowRight') {
              (target.nextElementSibling as HTMLElement)?.focus();
            }
          }}
        />
      ))}
    </fieldset>
  );
};
