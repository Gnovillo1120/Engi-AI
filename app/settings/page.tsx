import { redirect } from "next/navigation";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { getOrCreateProfile } from "@/lib/profile";
import TargetRoleForm from "@/components/settings/TargetRoleForm";

export default async function SettingsPage() {
  const profile = await getOrCreateProfile();

  if (!profile) {
    redirect("/login");
  }

  return (
    <DashboardLayout>
      <header className="mb-8 border-b border-white/10 pb-6">
        <h1 className="text-3xl font-bold text-[#f3f0ff]">Settings</h1>
        <p className="mt-2 text-[#c8c2ff]/70">
          Manage your profile and target internship role.
        </p>
      </header>

      <section className="max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h2 className="mb-2 text-xl font-bold text-[#f3f0ff]">
          Target role
        </h2>

        <p className="mb-6 text-sm text-[#c8c2ff]/60">
          This role will personalize your resume feedback, roadmap, and weekly action plan.
        </p>

        <TargetRoleForm currentRole={profile.targetRole} />
      </section>
    </DashboardLayout>
  );
}