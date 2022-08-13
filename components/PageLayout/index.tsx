import Navbar from '../Navbar';

export default function PageLayout({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
