import { HeadingTitle, Input } from '@/components/ui';

export const UserSocialProfile: React.FC = () => {
  return (
    <div className="w-[456px] pb-5">
      <HeadingTitle
        title="Social Links"
        subtitle="Let people know where to find you"
        align="left"
        titleColor="text-primary-text"
        titleSize="sm"
        subtitleColor="text-primary-text"
        subtitleSize="md"
        className="pb-3"
      />
      <div className="flex flex-col items-start gap-y-3">
        <Input
          id="website"
          name="website"
          type="url"
          placeholder="https://www.example.com"
          className="w-full h-12"
        />
        <Input
          id="facebook"
          name="facebook"
          type="url"
          placeholder="Facebook"
          className="w-full h-12"
        />
        <Input
          id="twitter"
          name="twitter"
          type="url"
          placeholder="Twitter"
          className="w-full h-12"
        />
      </div>
    </div>
  );
};
