import { Header } from "@/components/Header";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

const doctors = [
  { id: "jane-doe", name: "Dr. Jane Doe", spec: "Cardiology", rating: 4.9 },
  { id: "john-smith", name: "Dr. John Smith", spec: "Dermatology", rating: 4.8 },
  { id: "amy-lee", name: "Dr. Amy Lee", spec: "Pediatrics", rating: 4.7 },
];

export default function DoctorsPage() {
  return (
    <div className="space-y-4">
      <Header title="Doctors" />
      <div className="grid gap-3">
        {doctors.map((d) => (
          <Link key={d.id} href={`/doctor/${d.id}`}>
            <Card className="p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold">{d.name}</p>
                <p className="text-[12px] text-[var(--color-text-secondary)]">{d.spec} ? {d.rating}?</p>
              </div>
              <span className="text-[var(--color-primary)] font-medium text-[14px]">View</span>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
