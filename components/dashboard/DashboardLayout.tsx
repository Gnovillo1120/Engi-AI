"use client";

import Link from "next/link";
import { useState } from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const navItems = [
  { label: "Dashboard", icon: "▦", href: "/dashboard" },
  { label: "Resume Review", icon: "▤", href: "/resume" },
  { label: "Roadmap", icon: "◇", href: "/roadmap" },
  { label: "Mock Interview", icon: "○", href: "#" },
  { label: "LeetCode Tutor", icon: "</>", href: "#" },
  { label: "GitHub Review", icon: "⌁", href: "#" },
  { label: "Progress", icon: "▥", href: "#" },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <main className="min-h-screen bg-[#1f1f1d] text-[#f3f0ff]">
      <div className="flex min-h-screen">
        <aside
          className={`overflow-hidden border-r border-white/10 bg-[#080a10] transition-all duration-300 ${
            sidebarOpen ? "w-64 p-6" : "w-0 p-0"
          }`}
        >
          <h1 className="mb-8 whitespace-nowrap text-sm font-bold tracking-[0.2em] text-indigo-300">
            ENGINEERINGMENTOR
          </h1>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-transparent px-4 py-3 text-[#c8c2ff]/70 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-[#f3f0ff] hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-indigo-300/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative z-10 w-6 text-indigo-300/80">
                  {item.icon}
                </span>

                <span className="relative z-10 whitespace-nowrap">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-20">
            <Link
              href="#"
              className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-transparent px-4 py-3 text-[#c8c2ff]/70 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-[#f3f0ff] hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-indigo-300/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative z-10 w-6 text-indigo-300/80">⚙</span>
              <span className="relative z-10 whitespace-nowrap">Settings</span>
            </Link>
          </div>
        </aside>

        <section className="flex-1 p-8">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mb-6 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#c8c2ff] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:shadow-lg hover:shadow-indigo-500/20"
            aria-label={sidebarOpen ? "Hide sidebar" : "Show sidebar"}
          >
            {sidebarOpen ? "↤" : "↦"}
          </button>

          {children}
        </section>
      </div>
    </main>
  );
}