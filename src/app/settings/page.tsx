import { Header } from "@/components/Header";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";

export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <Header title="Settings" />
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Notifications</p>
            <p className="text-[12px] text-[var(--color-text-secondary)]">Email and push</p>
          </div>
          <Chip>On</Chip>
        </div>
      </Card>
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Privacy</p>
            <p className="text-[12px] text-[var(--color-text-secondary)]">Data sharing</p>
          </div>
          <a className="text-[var(--color-primary)] text-[14px] font-medium" href="#">Manage</a>
        </div>
      </Card>
    </div>
  );
}
