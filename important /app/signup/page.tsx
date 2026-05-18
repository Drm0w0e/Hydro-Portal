import Nav from "@/components/Nav";
import AuthCard from "@/components/AuthCard";

export const metadata = { title: "Sign up · Hydro Portal" };

export default function SignupPage() {
  return (<><Nav /><AuthCard mode="signup" /></>);
}
