import {
  ThemeColorSelector,
  ThemeModeSelector,
  ThemePreview
} from '@/components/features/home';
import { Button, HeadingTitle } from '@/components/ui';

export const ThemeSelector = () => {
  return (
    <div className="flex flex-col py-5">
      <HeadingTitle
        title="Theme customization"
        align="left"
        className="w-full"
        subtitle="Select a theme for your chat interface"
        subtitleColor="text-primary-text"
        titleColor="text-primary-text"
        subtitleSize="md"
        titleSize="lg"
      />

      <ThemeModeSelector />
      <ThemeColorSelector />
      <ThemePreview />

      <div className="flex py-3 justify-end">
        <Button variant="primary" className="h-10">
          Finish setup
        </Button>
      </div>
    </div>
  );
};
