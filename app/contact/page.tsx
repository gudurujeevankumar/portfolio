import React from 'react';
import type { Metadata } from 'next';
import ContactContent from '@/components/contact/ContactContent';

export const metadata: Metadata = {
  title: 'Contact & Opportunities — Guduru Jeevan Kumar',
  description:
    "Connect with Guduru Jeevan Kumar for full-time software engineering roles, full-stack development, technical collaborations, and meaningful project discussions.",
};

export default function ContactPage() {
  return <ContactContent />;
}
