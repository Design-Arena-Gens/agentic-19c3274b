import { Header } from "@/components/Header";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";

export default function AdminPage() {
  return (
    <div className="space-y-4">
      <Header title="Admin Dashboard" />
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-5">
          <p className="text-[14px] text-[var(--color-text-secondary)]">Active doctors</p>
          <p className="text-[28px] font-bold">124</p>
        </Card>
        <Card className="p-5">
          <p className="text-[14px] text-[var(--color-text-secondary)]">Appointments today</p>
          <p className="text-[28px] font-bold">312</p>
        </Card>
        <Card className="p-5">
          <p className="text-[14px] text-[var(--color-text-secondary)]">System status</p>
          <Chip color="success">Operational</Chip>
        </Card>
      </div>
    </div>
  );
}
