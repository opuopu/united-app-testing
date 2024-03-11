import SignIn from "@/components/signIn/SignIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign In page",
};

export default function SignInPage() {
  return (
    <div>
      <SignIn />
    </div>
  );
}
