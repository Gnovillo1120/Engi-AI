import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardStatCard from "@/components/dashboard/DashboardStatCard";
import FocusCard from "@/components/dashboard/FocusCard";
import NextStepsCard from "@/components/dashboard/NextStepsCard";
import SkillsCard from "@/components/dashboard/SkillsCard";
import { getOrCreateProfile } from "@/lib/profile";

export default async function DashboardPage() {
  const profile = await getOrCreateProfile();

  if (!profile) {
    redirect("/login");
  }

  const displayName = profile.firstName || profile.email;

  return (
    <DashboardLayout>
      <header className="mb-8 flex items-center justify-between border-b border-white/10 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#f3f0ff]">
            Good morning, {displayName}
          </h1>

          <p className="mt-2 text-[#c8c2ff]/70">
            Targeting{" "}
            <span className="rounded-full bg-indigo-600/30 px-3 py-1 font-semibold text-indigo-200">
              {profile.targetRole}
            </span>
          </p>
        </div>

        <UserButton />
      </header>

      <section className="mb-6 grid gap-5 md:grid-cols-3">
        <DashboardStatCard title="Readiness score" value="Not started" />
        <DashboardStatCard title="Roadmap tasks" value="0/0" />
        <DashboardStatCard title="Interviews done" value="0" />
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
        <FocusCard />
        <NextStepsCard />
        <SkillsCard />
      </section>
    </DashboardLayout>
  );
}
