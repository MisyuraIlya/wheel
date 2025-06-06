import Auth from "@/components/auth";
import { AuthProvider } from "@/providers/AuthProvider";

export default async function ForgotPasswordPage() {
  return (
    <AuthProvider>
        <Auth.ForgotPassword/>
    </AuthProvider>
  );
}
