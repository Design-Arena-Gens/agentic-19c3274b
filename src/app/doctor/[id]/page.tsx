import { Header } from "@/components/Header";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { notFound } from "next/navigation";

const DOCTORS: Record<string, { name: string; spec: string; bio: string } | undefined> = {
  "jane-doe": { name: "Dr. Jane Doe", spec: "Cardiology", bio: "15 years experience, Heart Institute" },
  "john-smith": { name: "Dr. John Smith", spec: "Dermatology", bio: "10 years experience, SkinCare Clinic" },
  "amy-lee": { name: "Dr. Amy Lee", spec: "Pediatrics", bio: "8 years experience, Children's Hospital" },
};

export default function DoctorDetail({ params }: { params: { id: string } }) {
  const doc = DOCTORS[params.id];
  if (!doc) return notFound();

  return (
    <div className="space-y-4">
      <Header title={doc.name} />
      <Card className="p-6 space-y-2">
        <p className="text-[16px] font-medium">{doc.spec}</p>
        <p className="text-[14px] text-[var(--color-text-secondary)]">{doc.bio}</p>
        <div className="pt-2">
          <Button>Book appointment</Button>
        </div>
      </Card>
    </div>
  );
}
