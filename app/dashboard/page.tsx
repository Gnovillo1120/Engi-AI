import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardStatCard from "@/components/dashboard/DashboardStatCard";
import FocusCard from "@/components/dashboard/FocusCard";
import NextStepsCard from "@/components/dashboard/NextStepsCard";
import SkillsCard from "@/components/dashboard/SkillsCard";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <header className="mb-8 flex items-center justify-between border-b border-white/10 pb-6">
        <div>
          <h1 className="text-3xl font-bold">Good morning, Alex</h1>
          <p className="mt-2 text-white/70">
            Targeting{" "}
            <span className="rounded-full bg-indigo-600/30 px-3 py-1 font-semibold text-indigo-200">
              AI Engineering Intern
            </span>
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-700 font-bold">
          AC
        </div>
      </header>

      <section className="mb-6 grid gap-5 md:grid-cols-3">
        <DashboardStatCard title="Readiness score" value="74" />
        <DashboardStatCard title="Roadmap tasks" value="3/12" />
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