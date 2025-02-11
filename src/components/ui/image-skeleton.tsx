import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ImageSkeletonProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imageClassName?: string;
  quality?: number;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ImageSkeleton = ({
  src,
  alt,
  width,
  height,
  className,
  imageClassName,
  quality = 75,
  isLoading,
  setIsLoading
}: ImageSkeletonProps) => {
  return (
    <div className={cn('relative', className)}>
      {isLoading && (
        <div
          className={cn(
            'absolute inset-0 bg-[#DDDDDD]/30 overflow-hidden',
            imageClassName
          )}
          style={{ width, height }}
        >
          <div className="absolute inset-0 transform bg-shimmer animate-shimmer" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        loading="lazy"
        className={cn(
          'object-cover bg-center bg-no-repeat rounded-lg transition-opacity duration-500',
          isLoading ? 'opacity-0' : 'opacity-100',
          imageClassName
        )}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};
