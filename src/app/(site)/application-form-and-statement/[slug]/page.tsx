import DashboardLayout from '@/components/DashboardLayout';
import Breadcrumb from '@/components/DashboardLayout/Breadcrumbs/Breadcrumb';
import { Metadata } from 'next';
import { capitalizeFirst } from '@/utils/capitalizeFirstLetter';
import ApplicationFormAndStatement from '@/components/ApplicationFormAndStatement';

export const metadata: Metadata = {
  title: 'Application Form and Statement',
  description: '',
};

type Props = {
  params: Promise<{ slug: string }>;
};

const ApplicationFormAndStatementPage = async ({ params }: Props) => {
  const { slug } = await params;

  return (
    <>
      <DashboardLayout>
        <Breadcrumb pageName={`Application Form and Statement ${slug ? `${capitalizeFirst(slug.replaceAll('-', ' '))}` : ''}`} />
        <ApplicationFormAndStatement />
      </DashboardLayout>
    </>
  );
};

export default ApplicationFormAndStatementPage;
