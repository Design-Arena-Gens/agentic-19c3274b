"use client";

import { Header } from "@/components/Header";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { Search, MapPin } from "lucide-react";
import { useState } from "react";

export default function SearchPage() {
  const [q, setQ] = useState("");
  return (
    <div className="space-y-4">
      <Header title="Search" />

      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]" size={18}/>
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search doctors, specialties, labs..." className="pl-10" />
        </div>
        <button className="px-4 py-2 rounded-[12px] bg-[var(--color-secondary)]/40 text-[12px]">Filters</button>
      </div>

      <div className="grid gap-3">
        {["Cardiologist","Dermatologist","Orthopedic","Pediatrician"].map((name) => (
          <Card key={name} className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{name}</p>
                <p className="text-[12px] text-[var(--color-text-secondary)] flex items-center gap-1"><MapPin size={14}/> 2.1 km ? Available today</p>
              </div>
              <a href="/doctors" className="text-[var(--color-primary)] text-[14px] font-medium">View</a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
