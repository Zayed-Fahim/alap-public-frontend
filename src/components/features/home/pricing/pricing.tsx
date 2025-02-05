import { PRICING_DATA_PLAN } from '@/constants';
import { PricingCard } from '@/components/features/home';

export const Pricing: React.FC = () => {
  return (
    <div
      className="grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] gap-2.5 px-4 py-3 @3xl:grid-cols-4"
      id="#pricing"
    >
      {PRICING_DATA_PLAN.map((plan, index) => (
        <PricingCard key={index} {...plan} />
      ))}
    </div>
  );
};
