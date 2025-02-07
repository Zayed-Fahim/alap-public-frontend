import { Button, HeadingTitle, Text } from '@/components/ui';
import { ColorPalette } from '@/components/features/home';
import { COLOR_PALETTES } from '@/constants';

export const ThemeColorSelector = () => {
  return (
    <>
      <HeadingTitle
        title="Color Theme"
        titleColor="text-primary-text"
        titleSize="sm"
        className="py-3"
        align="left"
      />

      <div className="grid grid-cols-7 gap-3">
        {COLOR_PALETTES.map((palette, index) => (
          <ColorPalette key={index} {...palette} />
        ))}
      </div>

      <div className="pt-3">
        <Text text="Custom" className="text-secondary-text cursor-pointer" />
      </div>

      <div className="flex items-center gap-4 bg-white min-h-14 justify-between">
        <Text text="Background color" className="text-secondary-text" />

        <div className="shrink-0">
          <Button variant="secondary" className="h-10">
            Change
          </Button>
        </div>
      </div>
    </>
  );
};
