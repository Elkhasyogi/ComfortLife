import ResetPassword from '@/components/Auth/ResetPassword';
import Breadcrumb from '@/components/Common/Breadcrumb';
import Header from '@/components/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reset Password | Play SaaS Starter Kit and Boilerplate for Next.js',
};

export default async function ResetPasswordPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  return (
    <>
      <Header />
      <Breadcrumb pageName="Reset Password" />
      <ResetPassword token={token} />
    </>
  );
}
