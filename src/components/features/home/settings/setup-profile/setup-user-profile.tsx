import {
  Button,
  HeadingTitle,
  Input,
  ProgressBar,
  RadioGroup,
  Text,
  TextArea
} from '@/components/ui';
import {
  GENDER_OPTIONS,
  RELATIONSHIP_STATUS_OPTIONS,
  STATUS_OPTIONS
} from '@/constants';
import {
  UserProfileImage,
  UserSocialProfile
} from '@/components/features/home';

export const SetupUserProfile: React.FC = () => {
  return (
    <div className="flex flex-col py-5">
      <HeadingTitle
        title="Complete your profile"
        align="left"
        titleColor="text-primary-text"
        titleSize="md"
        className="pb-3"
      />
      <ProgressBar progress={75} currentStep={3} totalSteps={4} />

      <Text
        text="Skip for now"
        className="cursor-pointer text-sm hover:underline font-semibold text-end"
      />

      <UserProfileImage />

      <div className="flex flex-wrap gap-x-4 max-w-full">
        <div>
          <div className="w-[456px] pb-5">
            <HeadingTitle
              title="Display Name"
              subtitle="This is your display name. It can be changed later."
              align="left"
              titleColor="text-primary-text"
              titleSize="sm"
              subtitleColor="text-primary-text"
              subtitleSize="md"
              className="pb-3"
            />
            <Input
              id="display-name"
              name="display-name"
              type="text"
              placeholder="Display Name"
              className="w-full h-12"
            />
          </div>

          <div className="w-[456px] pb-5">
            <HeadingTitle
              title="Username"
              subtitle="This is your username. It can be changed later."
              align="left"
              titleColor="text-primary-text"
              titleSize="sm"
              subtitleColor="text-primary-text"
              subtitleSize="md"
              className="pb-3"
            />
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="@username"
              className="w-full h-12"
            />
          </div>

          <div className="w-[456px] pb-5">
            <HeadingTitle
              title="Gender"
              align="left"
              titleColor="text-primary-text"
              titleSize="sm"
              className="pb-3"
            />
            <RadioGroup options={GENDER_OPTIONS} name="gender" />
          </div>

          <div className="w-[456px] pb-5">
            <HeadingTitle
              title="Status Message"
              subtitle="What's your current status?"
              align="left"
              titleColor="text-primary-text"
              titleSize="sm"
              subtitleColor="text-primary-text"
              subtitleSize="md"
              className="pb-3"
            />
            <RadioGroup options={STATUS_OPTIONS} name="status" />

            <div className="pt-4">
              <Input
                id="status"
                name="status"
                type="text"
                placeholder="At the beach..."
                className="w-full h-12"
              />
            </div>
          </div>

          <div className="w-[456px] pb-5">
            <HeadingTitle
              title="Bio"
              subtitle="140 characters or less"
              align="left"
              titleColor="text-primary-text"
              titleSize="sm"
              subtitleColor="text-primary-text"
              subtitleSize="md"
              className="pb-3"
            />
            <TextArea
              placeholder="Tell us about yourself"
              rows={5}
              className="w-full"
            />
          </div>
        </div>

        <div>
          <div className="w-[456px] pb-5">
            <HeadingTitle
              title="Relationship Status"
              align="left"
              titleColor="text-primary-text"
              titleSize="sm"
              className="pb-3"
            />
            <RadioGroup
              options={RELATIONSHIP_STATUS_OPTIONS}
              name="relationship"
            />
          </div>
          <div className="w-[456px] pb-5">
            <HeadingTitle
              title="Date of Birth"
              subtitle="So we can celebrate your birthday"
              align="left"
              titleColor="text-primary-text"
              titleSize="sm"
              subtitleColor="text-primary-text"
              subtitleSize="md"
              className="pb-3"
            />
            <Input
              id="dob"
              name="dob"
              type="date"
              placeholder="MM/DD/YYYY"
              className="w-full relative h-12"
            />
          </div>

          <div className="w-[456px] pb-5">
            <HeadingTitle
              title="Phone Number"
              subtitle="So we can help you reset your password"
              align="left"
              titleColor="text-primary-text"
              titleSize="sm"
              subtitleColor="text-primary-text"
              subtitleSize="md"
              className="pb-3"
            />
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(01234) ***-***"
              className="w-full h-12"
            />
          </div>

          <UserSocialProfile />
        </div>
      </div>

      <div className="w-full flex items-start justify-start">
        <Button variant="primary" className="h-10">
          Finish profile setup
        </Button>
      </div>
    </div>
  );
};
