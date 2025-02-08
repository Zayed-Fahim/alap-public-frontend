interface IColorPalette {
  name: string;
  accent: string;
  primary: string;
  secondary: string;
}

export const ColorPalette: React.FC<IColorPalette> = ({
  primary,
  secondary
}) => {
  console.log({ primary, secondary });
  return (
    <div className="relative flex border-primary-border border p-1 rounded-xl">
      <div
        className={`w-14 h-10 rounded-tl-xl rounded-bl-xl cursor-pointer`}
        style={{ backgroundColor: primary }}
      />

      <div
        className={`w-14 h-10 rounded-tr-xl rounded-br-xl cursor-pointer`}
        style={{ backgroundColor: secondary }}
      />
    </div>
  );
};
