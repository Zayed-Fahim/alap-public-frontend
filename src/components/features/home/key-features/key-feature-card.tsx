import { IKeyFeatures } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';


export const KeyFeatureCard = ({
  image,
  icon,
  title,
  description
}: Omit<IKeyFeatures, 'id'>) => {
  return (
    <div
      className={cn(
        'rounded-lg cursor-pointer',
        `${icon && !image ? 'border border-primary-border w-[176px] h-[177px] p-4 transition-all transform hover:scale-105 hover:shadow-lg hover:translate-y-[-5px]' : ''}`
      )}
    >
      <div className="flex flex-col gap-3">
        {image && !icon ? (
          <Image
            alt={title}
            className="object-cover"
            src={image}
            loading="lazy"
            width={176}
            height={176}
          />
        ) : (
          <div className="">{icon}</div>
        )}
        <div className={cn(`${image && !icon ? 'pb-3' : ''}`)}>
          <h3 className="font-bold text-primary-text">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};
