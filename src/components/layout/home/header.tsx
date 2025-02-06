import { Logo } from '@/constants';
import { Button, CustomLink } from '@/components/ui';
import { Navigation } from '@/components/layout';

export const Header: React.FC = () => {
  return (
    <header className="border-b border-solid border-primary-border sticky top-0 bg-background z-[99999]">
      <div className="container mx-auto max-w-[1280px] flex items-center justify-between whitespace-nowrap px-10 py-3">
        <CustomLink href="/">
          <div className="flex items-center gap-4 text-primary-text">
            <div className="size-4">
              <Logo className="size-4" />
            </div>
            <h2 className="text-primary-text text-lg font-bold leading-tight tracking-[-0.015em]">
              Alap
            </h2>
          </div>
        </CustomLink>

        <div className="flex flex-1 justify-end gap-8">
          <Navigation />
          <div className="flex gap-2">
            <Button variant="primary" className="h-10">
              Sign in
            </Button>
            <Button variant="secondary" className="h-10">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
