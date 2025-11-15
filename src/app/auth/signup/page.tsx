import { Header } from "@/components/Header";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function SignupPage() {
  return (
    <div className="space-y-4">
      <Header title="Sign up" />
      <Card className="p-6 space-y-3 max-w-md">
        <Input placeholder="Full name" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button>Create account</Button>
      </Card>
    </div>
  );
}
