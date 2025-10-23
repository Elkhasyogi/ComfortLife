import DashboardLayout from '@/components/DashboardLayout';
import Breadcrumb from '@/components/DashboardLayout/Breadcrumbs/Breadcrumb';
import Dashboard from '@/components/Dashboard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: '',
};

const ContactPage = () => {
  return (
    <>
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </>
  );
};

export default ContactPage;
