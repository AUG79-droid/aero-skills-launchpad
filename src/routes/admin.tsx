import { createFileRoute } from "@tanstack/react-router";
import { Shield } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Panel Admin — AeroSkills" },
      { name: "description", content: "Área de administración de AeroSkills Sostenibilidad." },
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
        Marcador de posición
      </span>
      <h1 className="mt-1 text-3xl">Panel Admin</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Las herramientas de autoría de módulos, lecciones y evaluaciones llegarán en una fase
        posterior. Esta pantalla existe para que la navegación lateral quede completa.
      </p>
    </div>
  );
}
