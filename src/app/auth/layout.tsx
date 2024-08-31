import "../../app/globals.css";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="bg-[#D7E5F0]">{children}</body>
    </html>
  );
};
export default AuthLayout;
