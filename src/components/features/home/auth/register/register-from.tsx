import { Button, CustomLink, Input, Label, Text } from '@/components/ui';
import { Upload } from '@/constants';

export const RegisterForm = () => {
  return (
    <form className="flex flex-col w-full max-w-[550px] items-center">
      <div className="w-full py-3">
        <Label htmlFor="name" className="flex flex-col w-full">
          <Text text="Full Name" className="pb-1 font-medium" />
          <Input
            id="text"
            type="text"
            placeholder="John Doe"
            className="w-full h-12"
          />
        </Label>
      </div>
      <div className="w-full py-3">
        <Label htmlFor="email" className="flex flex-col w-full">
          <Text text="Email" className="pb-1 font-medium" />
          <Input
            id="email"
            type="email"
            placeholder="example@domain.com"
            className="w-full h-12"
          />
        </Label>
      </div>

      <div className="w-full py-3">
        <Label htmlFor="password" className="flex flex-col w-full">
          <Text text="Password" className="pb-1 font-medium" />
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full h-12"
          />
        </Label>
      </div>
      <div className="w-full py-3">
        <Label htmlFor="cPassword" className="flex flex-col w-full">
          <Text text="Confrim Password" className="pb-1 font-medium" />
          <Input
            id="cPassword"
            type="password"
            placeholder="Enter confirm password"
            className="w-full h-12"
          />
        </Label>
      </div>

      <div className="w-full py-3">
        <Text text="Profile Image" className="pb-1 font-medium" />
        <Label
          htmlFor="image-upload"
          className="cursor-pointer flex items-center justify-center min-w-[84px] max-w-[550px] bg-[#F4EFE6] h-12 rounded-xl"
        >
          <Text className="text-secondary-text">
            <div className="flex items-center justify-center gap-3">
              <Upload className="size-6" />
              <span>Upload photo</span>
            </div>
          </Text>
          <Input
            type="file"
            id="image-upload"
            accept="image/*"
            className="hidden"
          />
        </Label>
      </div>

      <div className="w-full h-12 my-3">
        <Button variant="primary" className='w-full h-full'>Sign up</Button>
      </div>

      <div className="text-sm text-secondary-text pt-4">
        <span>Already have an account?</span>{' '}
        <CustomLink href="/login" className="underline">
          Sign in
        </CustomLink>
      </div>

      <Text
        text="Or sign up with"
        className="text-secondary-text text-sm pt-4 text-center"
      />
    </form>
  );
};
