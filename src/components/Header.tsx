import Link from "next/link";
import { Bell, MessageSquareMore } from "lucide-react";

export function Header({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-40 bg-[var(--color-background)]/95 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <h1 className="text-[20px] md:text-[24px] font-semibold text-[var(--color-foreground)]">{title}</h1>
        <div className="flex items-center gap-3">
          <Link aria-label="Messages" href="/messages" className="p-2 rounded-full hover:bg-black/5">
            <MessageSquareMore size={22} />
          </Link>
          <Link aria-label="Notifications" href="/notifications" className="p-2 rounded-full hover:bg-black/5">
            <Bell size={22} />
          </Link>
        </div>
      </div>
    </header>
  );
}
