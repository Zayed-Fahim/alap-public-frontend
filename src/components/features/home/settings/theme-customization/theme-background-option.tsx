interface IThemeBackgroundOption {
  imageUrl: string;
}

export const ThemeBackgroundOption: React.FC<IThemeBackgroundOption> = ({
  imageUrl
}) => (
  <div className="flex flex-col gap-3 py-4">
    <div
      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  </div>
);
