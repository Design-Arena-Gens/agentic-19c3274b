import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Header } from "@/components/Header";
import { CalendarDays, Stethoscope, FlaskConical, Hospital } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-6">
      <Header title="Avicure" />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6">
          <h2 className="text-[20px] font-semibold mb-2 text-[var(--color-foreground)]">Welcome back</h2>
          <p className="text-[14px] text-[var(--color-text-secondary)] mb-4">
            Continue your care journey with quick actions below.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/appointments">
              <Button className="gap-2">
                <CalendarDays size={20} /> Book appointment
              </Button>
            </Link>
            <Link href="/search">
              <Button variant="secondary" className="gap-2">
                <Stethoscope size={20} /> Find a doctor
              </Button>
            </Link>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-[18px] font-semibold mb-3">Upcoming appointment</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[16px] font-medium">Dr. Jane Doe ? Cardiology</p>
              <p className="text-[14px] text-[var(--color-text-secondary)]">Mon, 10:00 AM ? Video</p>
            </div>
            <Chip color="success">Confirmed</Chip>
          </div>
          <div className="mt-4 flex gap-3">
            <Link href="/appointments">
              <Button variant="outline">Reschedule</Button>
            </Link>
            <Link href="/appointments">
              <Button variant="ghost">Details</Button>
            </Link>
          </div>
        </Card>
      </section>

      <section>
        <h3 className="text-[18px] font-semibold mb-3">Explore services</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/doctors">
            <Card className="p-5 flex items-center gap-3 hover:shadow-lg transition-shadow">
              <Stethoscope />
              <div>
                <p className="font-semibold">Doctors</p>
                <p className="text-[12px] text-[var(--color-text-secondary)]">Top specialists</p>
              </div>
            </Card>
          </Link>
          <Link href="/labs">
            <Card className="p-5 flex items-center gap-3 hover:shadow-lg transition-shadow">
              <FlaskConical />
              <div>
                <p className="font-semibold">Labs</p>
                <p className="text-[12px] text-[var(--color-text-secondary)]">Diagnostics</p>
              </div>
            </Card>
          </Link>
          <Link href="/hospitals">
            <Card className="p-5 flex items-center gap-3 hover:shadow-lg transition-shadow">
              <Hospital />
              <div>
                <p className="font-semibold">Hospitals</p>
                <p className="text-[12px] text-[var(--color-text-secondary)]">Nearby</p>
              </div>
            </Card>
          </Link>
          <Link href="/lab-tests">
            <Card className="p-5 flex items-center gap-3 hover:shadow-lg transition-shadow">
              <FlaskConical />
              <div>
                <p className="font-semibold">Lab Tests</p>
                <p className="text-[12px] text-[var(--color-text-secondary)]">Home sample</p>
              </div>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  );
}
