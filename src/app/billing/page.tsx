import { Header } from "@/components/Header";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function BillingPage() {
  return (
    <div className="space-y-4">
      <Header title="Billing" />
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Outstanding</p>
            <p className="text-[24px] font-bold text-[var(--color-foreground)]">$120.00</p>
          </div>
          <Button>Pay now</Button>
        </div>
      </Card>
      <div className="grid gap-3">
        {["Consultation - Apr 30", "Lab Tests - Apr 20"].map((i) => (
          <Card key={i} className="p-4">
            <div className="flex items-center justify-between">
              <p className="font-medium">{i}</p>
              <span className="text-[14px] text-[var(--color-text-secondary)]">Paid</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
