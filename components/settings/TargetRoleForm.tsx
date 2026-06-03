"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const roles = [
  "Software Engineering Intern",
  "Full Stack Engineering Intern",
  "Backend Engineering Intern",
  "AI Engineering Intern",
  "Cloud Engineering Intern",
  "DevOps Engineering Intern",
  "Data Engineering Intern",
];

type TargetRoleFormProps = {
  currentRole: string;
};

export default function TargetRoleForm({ currentRole }: TargetRoleFormProps) {
  const [targetRole, setTargetRole] = useState(currentRole);
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);

    await fetch("/api/profile", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ targetRole }),
    });

    setIsSaving(false);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-[#c8c2ff]/80">
          Choose your target role
        </span>

        <select
          value={targetRole}
          onChange={(event) => setTargetRole(event.target.value)}
          className="w-full rounded-xl border border-white/10 bg-[#080a10] px-4 py-3 text-[#f3f0ff] outline-none transition-all duration-300 focus:border-indigo-400"
        >
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        disabled={isSaving}
        className="rounded-xl border border-white/20 px-6 py-3 font-bold text-[#f3f0ff] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:shadow-lg hover:shadow-indigo-500/20 disabled:opacity-50"
      >
        {isSaving ? "Saving..." : "Save target role"}
      </button>
    </form>
  );
}