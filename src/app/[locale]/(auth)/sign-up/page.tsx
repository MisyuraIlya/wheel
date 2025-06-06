import Auth from "@/components/auth";
import { AuthProvider } from "@/providers/AuthProvider";

export default async function SignUpPage() {
  return (
    <AuthProvider>
        <Auth.SignUp/>
    </AuthProvider>
  );
}
