import React from 'react';
import ForgotPassword from '@/components/Auth/ForgotPassword';
import Breadcrumb from '@/components/Common/Breadcrumb';
import { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Forgot Password | Play SaaS Starter Kit and Boilerplate for Next.js',
};

const ForgotPasswordPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb pageName="Forget Password" />
      <ForgotPassword />
    </>
  );
};

export default ForgotPasswordPage;
