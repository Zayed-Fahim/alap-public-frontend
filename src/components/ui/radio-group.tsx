'use client';
import { cn } from '@/lib/utils';

interface RadioGroupProps {
  name: string;
  options: { label: string; value: string }[];
  selectedValue?: string;
  onChange?: (value: string) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  selectedValue,
  onChange
}) => {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => (
        <label
          key={option.value}
          className={cn(
            'text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-primary-border px-4 h-12 text-primary-text has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-primary relative cursor-pointer',
            selectedValue === option.value
              ? 'border-[3px] px-3.5 border-primary-border'
              : ''
          )}
        >
          {option.label}
          <input
            type="radio"
            name={name}
            value={option?.value}
            // checked={selectedValue === option.value}
            onChange={() => onChange?.(option.value)}
            className="invisible absolute"
          />
        </label>
      ))}
    </div>
  );
};
