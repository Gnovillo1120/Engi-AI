import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import FeatureCard from "@/components/ui/FeatureCard";
import EngiWordmark from "@/components/ui/EngiWordmark";
import EngiLogo from "@/components/ui/EngiLogo";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#1f1f1d] text-white">

      {/* ── Navbar ── */}
      <nav className="flex items-center justify-between border-b border-white/10 px-6 py-4">
        <Link href="/">
          {/* Wordmark with tagline hidden on small screens */}
          <EngiWordmark size="md" />
        </Link>

        <div className="flex gap-3">
          <ButtonLink href="/login" variant="secondary">Log in</ButtonLink>
          <ButtonLink href="/signup" variant="primary">Sign up free</ButtonLink>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-16 text-center">
        {/* Engi mascot above the headline */}
        <div className="mb-6 flex justify-center">
          <EngiLogo size={72} />
        </div>

        <div className="mb-6 rounded-full border border-indigo-400/40 bg-indigo-500/20 px-4 py-1 text-sm font-semibold text-indigo-200">
          Built for CS students targeting Summer 2027
        </div>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          Your AI-powered engineering career coach
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
          Upload your resume, pick a target role, and get personalized AI
          feedback, a roadmap, and progress tracking — all in one place.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/signup" variant="primary">Get started free</ButtonLink>
          <ButtonLink href="/login" variant="secondary">Log in</ButtonLink>
        </div>
      </section>

      {/* ── Feature cards ── */}
      <section className="mx-auto grid max-w-6xl gap-5 px-6 pb-10 md:grid-cols-3">
        <FeatureCard
          icon="📄"
          title="Resume analyzer"
          description="AI reviews your resume for strengths, gaps, missing skills, and internship readiness."
        />
        <FeatureCard
          icon="🗺️"
          title="Personalized roadmap"
          description="Get a custom 8–12 week study plan based on your target role and current experience."
        />
        <FeatureCard
          icon="📈"
          title="Progress dashboard"
          description="Track your roadmap, saved feedback, weak areas, and next recommended steps."
        />
      </section>
    </main>
  );
}