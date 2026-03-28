import { Badge } from "./ui/badge";

interface MockupLabelProps {
  label: string;
}

export function MockupLabel({ label }: MockupLabelProps) {
  return (
    <div className="flex justify-end mb-2 opacity-50 select-none pointer-events-none">
      <Badge variant="outline" className="text-[10px] uppercase tracking-wider font-mono">
        Section: {label}
      </Badge>
    </div>
  );
}
