import { Header } from "@/components/Header";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function LabTestsPage() {
  return (
    <div className="space-y-4">
      <Header title="Lab Tests" />
      <Card className="p-6">
        <p className="mb-2 font-medium">Popular tests</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {["CBC", "Lipid Profile", "Thyroid", "Vitamin D", "HbA1c"].map((t) => (
            <div key={t} className="p-3 rounded-[12px] bg-[var(--color-secondary)]/20 text-sm">{t}</div>
          ))}
        </div>
        <div className="mt-4">
          <Button>Schedule home sample</Button>
        </div>
      </Card>
    </div>
  );
}
