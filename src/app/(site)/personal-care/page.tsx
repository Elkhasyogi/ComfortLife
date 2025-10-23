import DashboardLayout from '@/components/DashboardLayout';
import Breadcrumb from '@/components/DashboardLayout/Breadcrumbs/Breadcrumb';
import PersonalCare from '@/components/PersonalCare';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Senior Profile Page',
  description: '',
};

const ContactPage = () => {
  return (
    <>
      <DashboardLayout>
        <Breadcrumb pageName="Personal Care" />
        <PersonalCare />
      </DashboardLayout>
    </>
  );
};

export default ContactPage;
