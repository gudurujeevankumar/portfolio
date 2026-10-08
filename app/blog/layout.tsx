import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Technical Notes',
  description: 'Reflections on software architecture, full-stack web engineering, team coordination, and modern development practices by Guduru Jeevan Kumar.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
