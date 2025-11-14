import { ReactNode } from "react";
import { Card } from "./ui/card";

interface CodeBlockProps {
  children: ReactNode;
  title?: string;
  language?: string;
}

export const CodeBlock = ({ children, title, language = "javascript" }: CodeBlockProps) => {
  return (
    <Card className="overflow-hidden border-border/50">
      {title && (
        <div className="bg-muted px-4 py-2 border-b border-border/50">
          <span className="text-sm font-medium text-muted-foreground">{title}</span>
        </div>
      )}
      <pre className="bg-code-bg text-code-foreground p-4 overflow-x-auto">
        <code className="text-sm font-mono">{children}</code>
      </pre>
    </Card>
  );
};
