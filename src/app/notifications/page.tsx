import { Header } from "@/components/Header";
import { Card } from "@/components/ui/Card";

export default function NotificationsPage() {
  return (
    <div className="space-y-4">
      <Header title="Notifications" />
      <div className="grid gap-3">
        {["Your report is ready", "Appointment confirmed", "New message from Dr. Amy"].map((n) => (
          <Card key={n} className="p-4">
            <p className="font-medium">{n}</p>
            <p className="text-[12px] text-[var(--color-text-secondary)]">Just now</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
