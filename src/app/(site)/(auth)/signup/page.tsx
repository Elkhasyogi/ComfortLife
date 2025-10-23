import SignUp from "@/components/Auth/SignUp";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { capitalizeFirst } from "@/utils/capitalizeFirstLetter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Register",
};

interface SignupPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const SignupPage = ({ searchParams }: SignupPageProps) => {
  const type = searchParams?.type ?? '';
  return (
    <>
      <Breadcrumb pageName={`Register ${capitalizeFirst(type as string)} Page`} />
      <SignUp />
    </>
  );
};

export default SignupPage;
