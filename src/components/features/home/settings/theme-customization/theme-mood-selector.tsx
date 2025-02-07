import { HeadingTitle, Input, Text } from '@/components/ui';
import { Moon, Sun } from '@/constants';

export const ThemeModeSelector = () => {
  return (
    <>
      <HeadingTitle
        title="Mode"
        align="left"
        titleColor="text-primary-text"
        titleSize="sm"
        className="pt-2"
      />

      <div className="flex items-center gap-4 min-h-14">
        <div
          className="text-primary-text flex items-center justify-center rounded-lg bg-secondary shrink-0 size-10"
          data-icon="Sun"
          data-size="24px"
          data-weight="regular"
        >
          <Sun className="size-6" />
        </div>
        <Text text="Light" className="text-secondary-text" />
      </div>

      <div className="flex items-center gap-4 min-h-14 justify-between">
        <div className="flex items-center gap-4">
          <div
            className="text-primary-text flex items-center justify-center rounded-lg bg-secondary shrink-0 size-10"
            data-icon="Moon"
            data-size="24px"
            data-weight="regular"
          >
            <Moon className="size-6" />
          </div>
          <Text text="Dark" className="text-secondary-text" />
        </div>
        <div className="shrink-0">
          <div className="flex size-7 items-center justify-center">
            <Input
              id="dark-mode"
              name="dark-mode"
              type="checkbox"
              className="h-5 w-5 rounded bg-transparent text-primary-text checked:bg-primary checked:border-primary-border checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </>
  );
};
