import { useEffect, useMemo, useState, type ReactNode } from "react";

import { useHubLanguage } from "@/lib/language";

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\(https?:\/\/[^)]+\))/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={index}
          href={linkMatch[2]}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
        >
          {linkMatch[1]}
        </a>
      );
    }

    return part;
  });
}

type LessonBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | {
      type: "callout";
      tone: "key" | "case" | "reflection" | "warning";
      title: string;
      body: string;
    }
  | { type: "paragraph"; text: string };

function parseBlocks(content: string): LessonBlock[] {
  return content
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block): LessonBlock => {
      if (block.startsWith("### ")) return { type: "heading", level: 3, text: block.slice(4) };
      if (block.startsWith("## ")) return { type: "heading", level: 2, text: block.slice(3) };

      const lines = block.split("\n").map((line) => line.trim());
      if (lines.every((line) => line.startsWith("- "))) {
        return { type: "list", ordered: false, items: lines.map((line) => line.slice(2)) };
      }
      if (lines.every((line) => /^\d+\.\s/.test(line))) {
        return {
          type: "list",
          ordered: true,
          items: lines.map((line) => line.replace(/^\d+\.\s/, "")),
        };
      }

      const callouts: Array<{ prefix: string; tone: "key" | "case" | "reflection" | "warning" }> = [
        { prefix: "KEY TAKEAWAY:", tone: "key" },
        { prefix: "CONCLUSIÓN CLAVE:", tone: "key" },
        { prefix: "AVIATION CASE:", tone: "case" },
        { prefix: "CASO DE AVIACIÓN:", tone: "case" },
        { prefix: "REFLECTION:", tone: "reflection" },
        { prefix: "REFLEJO:", tone: "reflection" },
        { prefix: "REFLEXIÓN:", tone: "reflection" },
        { prefix: "WATCH OUT:", tone: "warning" },
        { prefix: "ATENCIÓN:", tone: "warning" },
      ];

      const callout = callouts.find((item) => block.startsWith(item.prefix));
      if (callout) {
        return {
          type: "callout",
          tone: callout.tone,
          title: callout.tone,
          body: block.slice(callout.prefix.length).trim(),
        };
      }

      return { type: "paragraph", text: block };
    });
}

const toneClasses = {
  key: "border-primary/25 bg-accent",
  case: "border-blue-500/20 bg-blue-500/5",
  reflection: "border-amber-500/25 bg-amber-500/5",
  warning: "border-destructive/25 bg-destructive/5",
};

type LessonLayerKind = "essentials" | "deepen" | "professional" | "workplace";

type LessonLayer = {
  kind: LessonLayerKind;
  content: string;
  title: string;
  minutes: number;
};

function markerKind(heading: string): LessonLayerKind | null {
  const normalized = heading.toLocaleLowerCase("es");

  if (
    normalized.startsWith("extended learning unit:") ||
    normalized.startsWith("unidad de aprendizaje ampliada:") ||
    normalized.startsWith("unidad ampliada de aprendizaje:")
  ) {
    return "deepen";
  }

  if (
    normalized.startsWith("professional deep dive:") ||
    normalized.startsWith("inmersión profesional profunda:") ||
    normalized.startsWith("inmersiones profesionales profundas:") ||
    normalized.startsWith("buceo profesional profundo:")
  ) {
    return "professional";
  }

  if (
    normalized.startsWith("workplace challenge:") ||
    /^(desafío|reto|problema) del lugar de trabajo:/.test(normalized)
  ) {
    return "workplace";
  }

  return null;
}

function cleanLayerTitle(heading: string) {
  const separator = heading.indexOf(":");
  return separator === -1 ? heading : heading.slice(separator + 1).trim();
}

function splitLessonLayers(content: string): LessonLayer[] {
  const learningOrder: Record<LessonLayerKind, number> = {
    essentials: 0,
    deepen: 1,
    professional: 2,
    workplace: 3,
  };
  const markers = [...content.matchAll(/^## (.+)$/gm)]
    .map((match) => ({ index: match.index ?? 0, heading: match[1], kind: markerKind(match[1]) }))
    .filter(
      (marker): marker is { index: number; heading: string; kind: LessonLayerKind } =>
        marker.kind !== null,
    );
  const starts = [0, ...markers.map((marker) => marker.index), content.length];
  const sections = starts
    .slice(0, -1)
    .map((start, index) => content.slice(start, starts[index + 1]).trim())
    .filter(Boolean);

  return sections
    .map((section, index) => {
      const marker = index === 0 ? null : markers[index - 1];
      const heading = section.match(/^## (.+)$/m)?.[1] ?? "Lesson essentials";
      const words = section
        .replace(/[#*[\]()]/g, " ")
        .split(/\s+/)
        .filter(Boolean).length;

      return {
        kind: marker?.kind ?? "essentials",
        content: section,
        title: marker ? cleanLayerTitle(marker.heading) : heading,
        minutes: Math.max(2, Math.ceil(words / 180)),
      };
    })
    .sort((a, b) => learningOrder[a.kind] - learningOrder[b.kind]);
}

function layerLabel(kind: LessonLayerKind, spanish: boolean) {
  const labels = spanish
    ? {
        essentials: "Conceptos esenciales",
        deepen: "Profundiza",
        professional: "Práctica profesional",
        workplace: "Reto de aplicación",
      }
    : {
        essentials: "Essentials",
        deepen: "Deepen",
        professional: "Professional practice",
        workplace: "Workplace challenge",
      };
  return labels[kind];
}

function calloutLabel(tone: "key" | "case" | "reflection" | "warning", spanish: boolean) {
  const labels = spanish
    ? { key: "Idea clave", case: "Caso de aviación", reflection: "Reflexión", warning: "Atención" }
    : {
        key: "Key takeaway",
        case: "Aviation case",
        reflection: "Reflection",
        warning: "Watch out",
      };
  return labels[tone];
}

function ContentBlocks({ content, spanish }: { content: string; spanish: boolean }) {
  const blocks = parseBlocks(content);

  return (
    <div className="space-y-5 text-[0.95rem] leading-8 text-muted-foreground">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return block.level === 2 ? (
            <h3
              key={index}
              className="pt-3 font-display text-lg font-bold leading-snug text-foreground"
            >
              {renderInline(block.text)}
            </h3>
          ) : (
            <h4
              key={index}
              className="pt-2 font-display text-sm font-bold uppercase tracking-wide text-foreground"
            >
              {renderInline(block.text)}
            </h4>
          );
        }

        if (block.type === "list") {
          const List = block.ordered ? "ol" : "ul";
          return (
            <List
              key={index}
              className={block.ordered ? "ml-5 list-decimal space-y-2" : "ml-5 list-disc space-y-2"}
            >
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex} className="pl-1">
                  {renderInline(item)}
                </li>
              ))}
            </List>
          );
        }

        if (block.type === "callout") {
          return (
            <aside key={index} className={`rounded-lg border p-4 ${toneClasses[block.tone]}`}>
              <p className="font-display text-xs font-bold uppercase tracking-widest text-foreground">
                {calloutLabel(block.tone, spanish)}
              </p>
              <p className="mt-2 leading-6">{renderInline(block.body)}</p>
            </aside>
          );
        }

        return <p key={index}>{renderInline(block.text)}</p>;
      })}
    </div>
  );
}

export function LessonContent({ content }: { content: string }) {
  const spanish = useHubLanguage() === "es";
  const layers = useMemo(() => splitLessonLayers(content), [content]);
  const [active, setActive] = useState(0);

  useEffect(() => setActive(0), [content]);

  if (layers.length === 1) return <ContentBlocks content={content} spanish={spanish} />;

  const current = layers[active];
  const layerGridColumns = layers.length === 3 ? "xl:grid-cols-3" : "xl:grid-cols-4";
  const currentBody = current.content.replace(/^## .+(?:\r?\n)?/, "").trimStart();
  const selectLayer = (index: number) => {
    setActive(index);
    window.requestAnimationFrame(() => {
      document.querySelector("[data-active-lesson-layer='true']")?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    });
  };

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background">
      <header className="border-b border-border bg-[linear-gradient(135deg,var(--accent-soft),var(--surface))] px-5 py-5 md:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary">
              {spanish ? "Ruta guiada de la lección" : "Guided lesson path"}
            </p>
            <h4 className="mt-2 font-display text-lg font-bold text-foreground">
              {spanish ? "Aprende por capas, no todo de golpe" : "Learn in layers, not all at once"}
            </h4>
          </div>
          <p className="max-w-sm text-xs leading-5 text-muted-foreground sm:text-right">
            {spanish
              ? "Completa una capa cada vez. Puedes volver a cualquier parte sin perder el hilo."
              : "Complete one layer at a time. You can return to any part without losing the thread."}
          </p>
        </div>
      </header>

      <nav
        aria-label={spanish ? "Capas de esta lección" : "Layers in this lesson"}
        className={`grid gap-px bg-border sm:grid-cols-2 ${layerGridColumns}`}
      >
        {layers.map((layer, index) => (
          <button
            key={`${layer.kind}-${index}`}
            type="button"
            aria-current={index === active ? "step" : undefined}
            onClick={() => selectLayer(index)}
            className={`min-h-24 bg-card px-4 py-4 text-left transition-colors hover:bg-accent ${
              index === active ? "bg-accent shadow-[inset_0_-3px_var(--accent-color)]" : ""
            }`}
          >
            <span className="font-mono text-[0.65rem] font-bold text-primary">
              {String(index + 1).padStart(2, "0")} · {layer.minutes} min
            </span>
            <strong className="mt-2 block font-display text-xs uppercase tracking-wide text-foreground">
              {layerLabel(layer.kind, spanish)}
            </strong>
            <span className="mt-1 line-clamp-2 block text-xs leading-5 text-muted-foreground">
              {layer.title}
            </span>
          </button>
        ))}
      </nav>

      <div className="h-1 bg-muted" aria-hidden="true">
        <div
          className="h-full bg-primary transition-[width] duration-300"
          style={{ width: `${((active + 1) / layers.length) * 100}%` }}
        />
      </div>

      <section data-active-lesson-layer="true" className="scroll-mt-24 px-5 py-7 md:px-8 md:py-9">
        <div className="mb-7 border-b border-border pb-5">
          <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary">
            {spanish
              ? `Capa ${active + 1} de ${layers.length}`
              : `Layer ${active + 1} of ${layers.length}`}{" "}
            · {layerLabel(current.kind, spanish)} · {current.minutes} min
          </p>
          <h4 className="mt-2 font-display text-xl font-bold leading-snug text-foreground">
            {current.title}
          </h4>
        </div>

        <ContentBlocks content={currentBody} spanish={spanish} />

        <aside className="mt-8 border-y border-primary/25 bg-accent/60 px-4 py-4">
          <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.16em] text-primary">
            {spanish ? "Pausa de asimilación" : "Learning pause"}
          </p>
          <p className="mt-2 text-sm leading-6 text-foreground">
            {spanish
              ? "Antes de avanzar, resume con tus propias palabras qué decisión cambia esta capa y qué evidencia necesitarías para aplicarla."
              : "Before moving on, explain in your own words which decision this layer changes and what evidence you would need to apply it."}
          </p>
        </aside>

        <nav
          className="mt-6 flex items-center justify-between gap-3"
          aria-label={spanish ? "Navegación de la lección" : "Lesson navigation"}
        >
          <button
            type="button"
            disabled={active === 0}
            onClick={() => selectLayer(active - 1)}
            className="rounded-md border border-border bg-card px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary disabled:invisible"
          >
            ← {spanish ? "Capa anterior" : "Previous layer"}
          </button>
          <button
            type="button"
            disabled={active === layers.length - 1}
            onClick={() => selectLayer(active + 1)}
            className="rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:invisible"
          >
            {spanish ? "Siguiente capa" : "Next layer"} →
          </button>
        </nav>
      </section>
    </div>
  );
}
