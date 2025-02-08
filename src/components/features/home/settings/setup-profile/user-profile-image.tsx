import { HeadingTitle, Input, Label, Text } from '@/components/ui';
import { Upload } from '@/constants';

export const UserProfileImage: React.FC = () => {
  return (
    <div className="flex flex-col px-4 py-6">
      <div className="flex flex-col items-center">
        <div
          className="bg-center bg-no-repeat aspect-video bg-cover rounded-xl w-full max-w-[360px]"
          style={{
            backgroundImage: `url(${'https://cdn.usegalileo.ai/sdxl10/e0948fed-cbe8-4335-bc02-1077cae2f976.png'})`
          }}
        />
        <div className="flex max-w-[480px] flex-col items-center gap-2 py-4">
          <HeadingTitle
            title="Add a profile photo"
            subtitle="People are more likely to chat with you if you have a profile photo."
            align="center"
            titleColor="text-primary-text"
            titleSize="md"
            subtitleColor="text-primary-text"
            subtitleSize="md"
          />
        </div>
        <Label htmlFor="image-upload" className="cursor-pointer">
          <Text className="h-10 flex justify-center items-center gap-2 bg-secondary rounded-full px-4 text-sm leading-normal font-semibold w-full max-w-[360px]">
            <div className="flex items-center gap-2">
              <Upload className="size-5 text-secondary-text" />
              <span>Upload</span>
            </div>
          </Text>
          <Input
            name="image-upload"
            type="file"
            id="image-upload"
            accept="image/*"
            className="hidden"
          />
        </Label>
      </div>
    </div>
  );
};
