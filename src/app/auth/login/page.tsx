import { Header } from "@/components/Header";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
  return (
    <div className="space-y-4">
      <Header title="Login" />
      <Card className="p-6 space-y-3 max-w-md">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button>Sign in</Button>
        <p className="text-[12px] text-[var(--color-text-secondary)]">No account? <a className="text-[var(--color-primary)]" href="/auth/signup">Sign up</a></p>
      </Card>
    </div>
  );
}
