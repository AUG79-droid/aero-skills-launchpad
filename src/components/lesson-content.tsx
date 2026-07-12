import type { ReactNode } from "react";

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\(https?:\/\/[^)]+\))/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
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
  | { type: "callout"; tone: "key" | "case" | "reflection" | "warning"; title: string; body: string }
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
        return { type: "list", ordered: true, items: lines.map((line) => line.replace(/^\d+\.\s/, "")) };
      }

      const callouts: Array<{ prefix: string; tone: "key" | "case" | "reflection" | "warning"; title: string }> = [
        { prefix: "KEY TAKEAWAY:", tone: "key", title: "Key takeaway" },
        { prefix: "AVIATION CASE:", tone: "case", title: "Aviation case" },
        { prefix: "REFLECTION:", tone: "reflection", title: "Reflection" },
        { prefix: "WATCH OUT:", tone: "warning", title: "Watch out" },
      ];

      const callout = callouts.find((item) => block.startsWith(item.prefix));
      if (callout) {
        return {
          type: "callout",
          tone: callout.tone,
          title: callout.title,
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

export function LessonContent({ content }: { content: string }) {
  const blocks = parseBlocks(content);

  return (
    <div className="space-y-4 text-sm leading-7 text-muted-foreground">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return block.level === 2 ? (
            <h3 key={index} className="pt-3 font-display text-lg font-bold leading-snug text-foreground">
              {renderInline(block.text)}
            </h3>
          ) : (
            <h4 key={index} className="pt-2 font-display text-sm font-bold uppercase tracking-wide text-foreground">
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
                <li key={itemIndex} className="pl-1">{renderInline(item)}</li>
              ))}
            </List>
          );
        }

        if (block.type === "callout") {
          return (
            <aside key={index} className={`rounded-lg border p-4 ${toneClasses[block.tone]}`}>
              <p className="font-display text-xs font-bold uppercase tracking-widest text-foreground">
                {block.title}
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
