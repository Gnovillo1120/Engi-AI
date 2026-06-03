const tasks = [
  { title: "Upload your resume", completed: true },
  { title: "Generate your first roadmap", completed: true },
  { title: "Complete 5 array problems", completed: false },
  { title: "Study Docker fundamentals", completed: false },
];

export default function FocusCard() {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:shadow-xl hover:shadow-indigo-500/10">
      <h2 className="mb-2 text-xl font-bold text-[#f3f0ff]">
        Weekly action plan
      </h2>

      <p className="mb-5 text-sm text-[#c8c2ff]/50">
        AI-generated tasks to move you closer to your target role.
      </p>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.title}
            className={`group relative flex items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-black/20 px-4 py-3 transition-all duration-300 hover:-translate-y-1 ${
              task.completed
                ? "hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/10"
                : "hover:border-red-400/50 hover:shadow-lg hover:shadow-red-500/10"
            }`}
          >
            <span
              className={`absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent transition-transform duration-700 group-hover:translate-x-full ${
                task.completed
                  ? "via-green-400/15"
                  : "via-red-400/15"
              }`}
            />

            <span
              className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full border text-sm ${
                task.completed
                  ? "border-green-400 bg-green-500/20 text-green-200"
                  : "border-red-400/40 text-red-200"
              }`}
            >
              {task.completed ? "✓" : ""}
            </span>

            <span className="relative z-10 text-[#f3f0ff]/80">
              {task.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}