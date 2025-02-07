type LabelProps = {
  htmlFor?: string;
  className?: string;
  children?: React.ReactNode;
};

export const Label: React.FC<LabelProps> = ({
  htmlFor,
  className,
  children
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-primary-text text-base font-medium leading-normal ${className}`}
    >
      <div className="mt-1">{children}</div>
    </label>
  );
};
