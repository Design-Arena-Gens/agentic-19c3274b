import { Header } from "@/components/Header";
import { Card } from "@/components/ui/Card";

export default function HospitalsPage() {
  return (
    <div className="space-y-4">
      <Header title="Hospitals" />
      <div className="grid gap-3">
        {["Avicure General", "City Care Center", "Sunrise Hospital"].map((h) => (
          <Card key={h} className="p-4">
            <p className="font-semibold">{h}</p>
            <p className="text-[12px] text-[var(--color-text-secondary)]">24x7 Emergency ? Multi-specialty</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
