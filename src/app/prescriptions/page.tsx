import { Header } from "@/components/Header";
import { Card } from "@/components/ui/Card";

export default function PrescriptionsPage() {
  return (
    <div className="space-y-4">
      <Header title="Prescriptions" />
      <div className="grid gap-3">
        {["Dr. Jane Doe", "Dr. John Smith"].map((d, i) => (
          <Card key={i} className="p-4">
            <p className="font-medium">Prescription by {d}</p>
            <p className="text-[12px] text-[var(--color-text-secondary)]">2 medicines ? Tap to view</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
