import { Button, HeadingTitle } from '@/components/ui';
import { GRADIENTS, IMAGES, SOLID_COLORS } from '@/constants';
import { ThemeBackgroundCategory } from '@/components/features/home';

export const ThemeBackground = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col py-4">
        <HeadingTitle
          title="Set a chat background"
          align="left"
          className="w-full pb-3"
          titleColor="text-primary-text"
          titleSize="md"
        />

        <ThemeBackgroundCategory title="Solid colors" images={SOLID_COLORS} />
        <ThemeBackgroundCategory title="Gradients" images={GRADIENTS} />
        <ThemeBackgroundCategory title="Images" images={IMAGES} />

        <div className="flex py-3 justify-end">
          <Button variant="secondary" className="h-10">
            Upload your own
          </Button>
        </div>

        <div className="flex py-3">
          <Button variant="primary" className="h-10">
            Set as chat background
          </Button>
        </div>
      </div>
    </div>
  );
};
