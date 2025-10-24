import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface ToolCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  category?: string;
}

const ToolCard = ({ icon: Icon, title, description, category }: ToolCardProps) => {
  return (
    <Card className="group relative overflow-hidden card-gradient border-border hover-glow cursor-pointer">
      <div className="p-6 space-y-4">
        {/* Icon with animation */}
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
          <div className="relative flex items-center justify-center w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
          </div>
        </div>

        {/* Category Badge */}
        {category && (
          <div className="flex justify-center">
            <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
              {category}
            </span>
          </div>
        )}

        {/* Content */}
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-gradient transition-all duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>

        {/* Hover gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </Card>
  );
};

export default ToolCard;
