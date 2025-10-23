import SignUp from "@/components/Auth/SignUp";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { capitalizeFirst } from "@/utils/capitalizeFirstLetter";
import { Metadata } from "next";
import { PageProps } from "../../../../../.next/types/app/page";

export const metadata: Metadata = {
  title: "Register",
};

const SignupPage = async ({ searchParams}: PageProps) => {
  const _params = await searchParams;
  const type = _params?.type ?? "Senior";

  return (
    <>
      <Breadcrumb pageName={`Register ${capitalizeFirst(type)} Page`} />
      <SignUp />
    </>
  );
};

export default SignupPage;