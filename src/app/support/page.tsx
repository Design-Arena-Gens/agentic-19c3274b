import { Header } from "@/components/Header";
import { Card } from "@/components/ui/Card";

export default function SupportPage() {
  return (
    <div className="space-y-4">
      <Header title="Support" />
      <Card className="p-6 space-y-2">
        <p className="text-[14px] text-[var(--color-text-secondary)]">For help, contact support@avicure.com</p>
        <a className="text-[var(--color-primary)]" href="/messages">Open chat</a>
      </Card>
    </div>
  );
}
