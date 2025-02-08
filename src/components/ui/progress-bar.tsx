import { Text } from '@/components/ui';

interface ProgressBarProps {
  progress: number;
  currentStep: number;
  totalSteps: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  currentStep,
  totalSteps
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-6 justify-between">
        <p className="text-secondary-text text-base font-medium leading-normal">
          {currentStep}/{totalSteps} Profile Complete
        </p>
      </div>
      <div className="rounded bg-secondary">
        <div
          className="h-2 rounded bg-primary"
          style={{ width: `${progress}%` }}
        />
      </div>
      <Text text="You're almost there" className="text-secondary-text" />
    </div>
  );
};
