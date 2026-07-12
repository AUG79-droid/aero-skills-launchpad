import { createFileRoute } from "@tanstack/react-router";
import { Shield } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Panel — AeroSkills" },
      { name: "description", content: "Administrative area for AeroSkills Sustainability." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-start px-6 py-16 md:px-10">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-primary">
        <Shield className="h-5 w-5" />
      </div>
      <span className="font-display text-xs uppercase tracking-widest text-muted-foreground">
        Placeholder
      </span>
      <h1 className="mt-1 text-3xl">Admin Panel</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Authoring tools for modules, lessons, and assessments will land in a later phase. This
        screen exists so the sidebar navigation is complete.
      </p>
    </div>
  );
}
