import Signin from '@/components/Auth/SignIn';
import Breadcrumb from '@/components/Common/Breadcrumb';
import Header from '@/components/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In | ComfortLife',
};

const SigninPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb pageName="Sign In Page" />

      <Signin />
    </>
  );
};

export default SigninPage;
