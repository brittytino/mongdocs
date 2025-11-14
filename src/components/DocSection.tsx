import { ReactNode } from "react";

interface DocSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export const DocSection = ({ id, title, children }: DocSectionProps) => {
  return (
    <section id={id} className="mb-12 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 text-foreground border-b-2 border-primary pb-2">
        {title}
      </h2>
      <div className="space-y-4 text-foreground/90">{children}</div>
    </section>
  );
};
