import { Button, CustomLink, Input, Label, Text } from '@/components/ui';
export const LoginForm = () => {
  return (
    <form className="flex flex-col w-full max-w-[550px] items-center">
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

      <div className="w-full flex justify-end mb-4">
        <CustomLink
          href="/forgot-password"
          className="text-secondary-text text-sm underline"
        >
          Forgot Password?
        </CustomLink>
      </div>

      <Button variant="primary" className="w-full h-12">
        Sign in
      </Button>

      <div className="text-sm text-secondary-text mt-4">
        <span>Don’t have an account?</span>{' '}
        <CustomLink href="/register" className="underline">
          Sign up
        </CustomLink>
      </div>

      <Text
        text="Or sign in with"
        className="text-secondary-text text-sm mt-4 text-center"
      />
    </form>
  );
};
