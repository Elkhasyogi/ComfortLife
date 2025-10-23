import DashboardLayout from '@/components/DashboardLayout';
import Breadcrumb from '@/components/DashboardLayout/Breadcrumbs/Breadcrumb';
import SeniorProfile from '@/components/SeniorProfile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Senior Profile Page',
  description: '',
};

const ContactPage = () => {
  return (
    <>
      <DashboardLayout>
        <Breadcrumb pageName="Data Senior" />
        <SeniorProfile />
      </DashboardLayout>
    </>
  );
};

export default ContactPage;
