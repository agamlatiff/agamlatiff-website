import React from 'react';
import Contact from '@/components/sections/Contact';
import FAQ from '@/components/sections/FAQ';

interface ContactPageProps {
  onOpenChat: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onOpenChat }) => {
  return (
    <div className="pt-20">
      <Contact onOpenChat={onOpenChat} />
      <FAQ />
    </div>
  );
};

export default ContactPage;