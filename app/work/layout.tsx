import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selected Work & Projects',
  description: 'Explore the full-stack web applications, machine learning systems, and software engineering projects built by Guduru Jeevan Kumar.',
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
