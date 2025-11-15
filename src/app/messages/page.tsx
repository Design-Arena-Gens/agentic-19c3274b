import { Header } from "@/components/Header";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export default function MessagesPage() {
  return (
    <div className="space-y-4">
      <Header title="Messages" />
      <div className="grid gap-3">
        {["Dr. Jane Doe", "Avicure Support"].map((c) => (
          <Link key={c} href="#">
            <Card className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">{c}</p>
                <p className="text-[12px] text-[var(--color-text-secondary)]">Tap to continue chat</p>
              </div>
              <span className="text-[12px] text-[var(--color-text-secondary)]">2m</span>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
