import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <Hero />
      <section className="mt-16 grid gap-8 sm:grid-cols-2">
        <ProjectCard
          title="AI Resume Builder"
          description="An AI-powered resume generator built with Next.js and OpenAI API."
          link="https://github.com/yourname/ai-resume"
        />
        <ProjectCard
          title="Portfolio Website"
          description="My personal portfolio showcasing projects and writing."
          link="https://github.com/yourname/portfolio"
        />
      </section>
    </div>
  );
}
