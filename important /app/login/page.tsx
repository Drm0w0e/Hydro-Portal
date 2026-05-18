import Nav from "@/components/Nav";
import AuthCard from "@/components/AuthCard";

export const metadata = { title: "Sign in · Hydro Portal" };

export default function LoginPage() {
  return (<><Nav /><AuthCard mode="login" /></>);
}
