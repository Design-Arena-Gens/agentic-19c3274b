import { Header } from "@/components/Header";
import { Card } from "@/components/ui/Card";

export default function ReportsPage() {
  return (
    <div className="space-y-4">
      <Header title="Reports" />
      <div className="grid gap-3">
        {["Blood Test - May 12", "X-Ray - May 03", "ECG - Apr 29"].map((r) => (
          <Card key={r} className="p-4">
            <p className="font-medium">{r}</p>
            <p className="text-[12px] text-[var(--color-text-secondary)]">Tap to view details</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
