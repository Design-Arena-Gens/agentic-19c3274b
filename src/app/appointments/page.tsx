import { Header } from "@/components/Header";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CalendarDays } from "lucide-react";

export default function AppointmentsPage() {
  return (
    <div className="space-y-4">
      <Header title="Appointments" />

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold">Dr. John Smith ? Dermatology</p>
            <p className="text-[14px] text-[var(--color-text-secondary)]">Tue, 2:30 PM ? In-person</p>
          </div>
          <Button variant="outline" className="gap-2"><CalendarDays size={18}/> Reschedule</Button>
        </div>
      </Card>

      <Card className="p-6">
        <p className="text-[14px] text-[var(--color-text-secondary)] mb-2">Need a new appointment?</p>
        <Button>Book new appointment</Button>
      </Card>
    </div>
  );
}
