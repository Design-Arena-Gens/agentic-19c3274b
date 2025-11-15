import { Header } from "@/components/Header";
import { Card } from "@/components/ui/Card";

export default function LabsPage() {
  return (
    <div className="space-y-4">
      <Header title="Labs" />
      <div className="grid gap-3">
        {["Avicure Diagnostics", "HealthFirst Labs", "PrimePath Labs"].map((l) => (
          <Card key={l} className="p-4">
            <p className="font-semibold">{l}</p>
            <p className="text-[12px] text-[var(--color-text-secondary)]">Home sample ? Same-day reports</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
