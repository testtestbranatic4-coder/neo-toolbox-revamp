import {
  Code2,
  Database,
  Palette,
  Lock,
  Zap,
  FileText,
  Image,
  Globe,
  Terminal,
  Package,
  GitBranch,
  CloudUpload,
  MessageSquare,
  BarChart,
  Settings,
  Smartphone,
} from "lucide-react";

export interface Tool {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: any;
}

export const categories = [
  { id: "development", name: "Development", icon: Code2 },
  { id: "design", name: "Design", icon: Palette },
  { id: "database", name: "Database", icon: Database },
  { id: "security", name: "Security", icon: Lock },
  { id: "performance", name: "Performance", icon: Zap },
  { id: "content", name: "Content", icon: FileText },
];

export const tools: Tool[] = [
  {
    id: "1",
    title: "Code Formatter",
    description: "Format your code with proper indentation and style",
    category: "development",
    icon: Code2,
  },
  {
    id: "2",
    title: "API Tester",
    description: "Test and debug your REST APIs easily",
    category: "development",
    icon: Terminal,
  },
  {
    id: "3",
    title: "Package Manager",
    description: "Manage your project dependencies efficiently",
    category: "development",
    icon: Package,
  },
  {
    id: "4",
    title: "Git Helper",
    description: "Simplify your Git workflow with visual tools",
    category: "development",
    icon: GitBranch,
  },
  {
    id: "5",
    title: "Color Palette Generator",
    description: "Create beautiful color schemes for your projects",
    category: "design",
    icon: Palette,
  },
  {
    id: "6",
    title: "Image Optimizer",
    description: "Compress and optimize images without quality loss",
    category: "design",
    icon: Image,
  },
  {
    id: "7",
    title: "Database Designer",
    description: "Design and visualize your database schema",
    category: "database",
    icon: Database,
  },
  {
    id: "8",
    title: "Query Builder",
    description: "Build complex SQL queries with a visual interface",
    category: "database",
    icon: Database,
  },
  {
    id: "9",
    title: "Password Generator",
    description: "Generate secure passwords with custom requirements",
    category: "security",
    icon: Lock,
  },
  {
    id: "10",
    title: "SSL Checker",
    description: "Verify SSL certificates and security headers",
    category: "security",
    icon: Lock,
  },
  {
    id: "11",
    title: "Performance Monitor",
    description: "Monitor and analyze your application performance",
    category: "performance",
    icon: Zap,
  },
  {
    id: "12",
    title: "Bundle Analyzer",
    description: "Analyze and optimize your JavaScript bundles",
    category: "performance",
    icon: BarChart,
  },
  {
    id: "13",
    title: "Markdown Editor",
    description: "Write and preview Markdown documents",
    category: "content",
    icon: FileText,
  },
  {
    id: "14",
    title: "SEO Analyzer",
    description: "Analyze and improve your website's SEO",
    category: "content",
    icon: Globe,
  },
  {
    id: "15",
    title: "Cloud Storage Manager",
    description: "Manage your cloud storage files and folders",
    category: "development",
    icon: CloudUpload,
  },
  {
    id: "16",
    title: "API Documentation",
    description: "Generate beautiful API documentation",
    category: "development",
    icon: MessageSquare,
  },
];
