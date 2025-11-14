import { ReactNode } from "react";
import { Card } from "./ui/card";
import { AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";

interface InfoBoxProps {
  type?: "info" | "success" | "warning" | "error";
  children: ReactNode;
}

export const InfoBox = ({ type = "info", children }: InfoBoxProps) => {
  const variants = {
    info: {
      icon: Info,
      className: "border-info/50 bg-info/5",
      iconColor: "text-info",
    },
    success: {
      icon: CheckCircle,
      className: "border-success/50 bg-success/5",
      iconColor: "text-success",
    },
    warning: {
      icon: AlertTriangle,
      className: "border-warning/50 bg-warning/5",
      iconColor: "text-warning",
    },
    error: {
      icon: AlertCircle,
      className: "border-destructive/50 bg-destructive/5",
      iconColor: "text-destructive",
    },
  };

  const variant = variants[type];
  const Icon = variant.icon;

  return (
    <Card className={`p-4 border ${variant.className}`}>
      <div className="flex gap-3">
        <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${variant.iconColor}`} />
        <div className="text-sm text-foreground/90">{children}</div>
      </div>
    </Card>
  );
};
