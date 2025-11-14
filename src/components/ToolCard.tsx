import { Card } from "./ui/card";
import { ExternalLink } from "lucide-react";

interface ToolCardProps {
  name: string;
  description: string;
  link: string;
}

export const ToolCard = ({ name, description, link }: ToolCardProps) => {
  return (
    <Card className="p-4 border-border/50 hover:border-primary/50 transition-colors">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="font-semibold text-foreground mb-1">{name}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 text-primary hover:text-primary/80 transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </Card>
  );
};
