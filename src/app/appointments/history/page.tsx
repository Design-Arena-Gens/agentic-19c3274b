import { Header } from "@/components/Header";
import { Card } from "@/components/ui/Card";

export default function AppointmentHistoryPage() {
  return (
    <div className="space-y-4">
      <Header title="Appointment History" />
      <div className="grid gap-3">
        {["Mar 11 - Dr. Doe", "Feb 02 - Dr. Smith", "Jan 20 - Dr. Lee"].map((h) => (
          <Card key={h} className="p-4">
            <p className="font-medium">{h}</p>
            <p className="text-[12px] text-[var(--color-text-secondary)]">Completed</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
