import Breadcrumb from '@/components/Common/Breadcrumb';
import SeniorProfile from '@/components/SeniorProfile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Senior Profile Page',
  description: '',
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Data Senior" />

      <SeniorProfile />
    </>
  );
};

export default ContactPage;
