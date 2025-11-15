"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, CalendarDays, Search, User } from "lucide-react";
import { clsx } from "clsx";

const items = [
  { href: "/", label: "Home", icon: Home },
  { href: "/appointments", label: "Appointments", icon: CalendarDays },
  { href: "/search", label: "Search", icon: Search },
  { href: "/profile", label: "Profile", icon: User },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white border-t border-black/5 md:hidden z-50">
      <ul className="grid grid-cols-4 h-full">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || (href !== "/" && pathname?.startsWith(href));
          return (
            <li key={href} className="h-full">
              <Link
                href={href}
                className={clsx(
                  "h-full w-full flex flex-col items-center justify-center gap-1 text-[12px]",
                  active ? "text-[var(--color-accent)]" : "text-[var(--color-text-secondary)]"
                )}
              >
                <Icon size={24} strokeWidth={2.2} />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
