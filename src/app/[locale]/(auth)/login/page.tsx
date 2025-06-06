import Auth from "@/components/auth";
import { AuthProvider } from "@/providers/AuthProvider";

export default async function LoginPage() {
  return (
    <AuthProvider>
        <Auth.Login/>
    </AuthProvider>
  );
}
