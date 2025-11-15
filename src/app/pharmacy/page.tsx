import { Header } from "@/components/Header";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function PharmacyPage() {
  return (
    <div className="space-y-4">
      <Header title="Pharmacy" />
      <Card className="p-6">
        <p className="mb-2">Upload prescription to order medicines</p>
        <Button variant="secondary">Upload prescription</Button>
      </Card>
      <div className="grid gap-3 md:grid-cols-3">
        {["Pain Relief", "Vitamins", "Diabetes Care", "Heart Health"].map((c) => (
          <Card key={c} className="p-4">
            <p className="font-medium">{c}</p>
            <p className="text-[12px] text-[var(--color-text-secondary)]">Top products</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
