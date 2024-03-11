import ForgotPassword from "@/components/signIn/ForgetPassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Forgot Password page",
};

export default function ForgotPasswordPage() {
  return (
    <div>
      <ForgotPassword />
    </div>
  );
}
