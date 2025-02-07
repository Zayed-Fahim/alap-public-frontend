import { Button, HeadingTitle } from '@/components/ui';
import { KeyFeatureCard } from '@/components/features/home';
import { KEY_FEATURES } from '@/constants';

export const KeyFeatures = () => {
  return (
    <section className="">
      <div className="px-4">
        <div className="py-10">
          <HeadingTitle
            align="right"
            subtitle="Alap offers a variety of features to help you communicate with your
          team, including:"
            title="Key features"
            subtitleColor="text-primary-text"
            titleColor="text-primary-text"
            subtitleSize="md"
            titleSize="lg"
            className="pb-6"
          />

          <Button variant="primary" className="h-10">
            View all features
          </Button>
        </div>

        <div className="grid gap-x-3 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {KEY_FEATURES.map((feature) => (
            <KeyFeatureCard
              key={feature.id}
              description={feature.description}
              icon={feature.icon}
              title={feature.title}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
