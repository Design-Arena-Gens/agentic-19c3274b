import { Header } from "@/components/Header";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function ProfilePage() {
  return (
    <div className="space-y-4">
      <Header title="Profile" />
      <Card className="p-6 space-y-3">
        <div>
          <p className="font-semibold">Alex Johnson</p>
          <p className="text-[14px] text-[var(--color-text-secondary)]">alex@example.com</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline">Edit profile</Button>
          <Button variant="ghost">Manage dependents</Button>
        </div>
      </Card>
    </div>
  );
}
