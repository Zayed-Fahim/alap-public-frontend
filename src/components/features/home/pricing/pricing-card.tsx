import { Button } from '@/components/ui';
import { Check } from '@/constants';
import React from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  features,
  buttonText
}) => {
  return (
    <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-primary-border bg-background p-6 transition-all transform hover:scale-105 hover:shadow-lg hover:translate-y-[-5px]">
      <div className="flex flex-col gap-1">
        <h1 className="text-[#1C160C] text-base font-bold leading-tight">
          {title}
        </h1>
        <p className="flex items-baseline gap-1 text-[#1C160C]">
          <span className="text-[#1C160C] text-4xl font-black leading-tight tracking-[-0.033em]">
            {price}
          </span>
          <span className="text-[#1C160C] text-base font-bold leading-tight">
            {period}
          </span>
        </p>
      </div>
      <Button label={buttonText} variant="secondary" />
      <div className="flex flex-col gap-2">
        {features?.map((feature, index) => (
          <div
            key={index}
            className="text-[13px] font-normal leading-normal flex gap-3 text-secondary-text"
          >
            <Check className="size-5" />
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
};
