import { HeadingTitle } from '@/components/ui';
import { ThemeBackgroundOption } from './theme-background-option';

export const ThemeBackgroundCategory = ({
  title,
  images
}: {
  title: string;
  images: string[];
}) => (
  <div>
    <HeadingTitle
      title={title}
      align="left"
      titleSize="sm"
      className="w-full pb-2 pt-4"
      titleColor="text-primary-text"
    />

    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
      {images.map((image, index) => (
        <ThemeBackgroundOption key={index} imageUrl={image} />
      ))}
    </div>
  </div>
);
