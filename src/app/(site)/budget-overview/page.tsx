import DashboardLayout from '@/components/DashboardLayout';
import Breadcrumb from '@/components/DashboardLayout/Breadcrumbs/Breadcrumb';
import BudgetOverview from '@/components/BudgetOverview';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Budget Overview',
  description: '',
};

const BudgetOverviewPage = () => {
  return (
    <>
      <DashboardLayout>
        <Breadcrumb pageName="Budget Overview" />
        <BudgetOverview />
      </DashboardLayout>
    </>
  );
};

export default BudgetOverviewPage;
