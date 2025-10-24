import { useState } from "react";
import { tools, categories } from "@/data/tools";
import ToolCard from "@/components/ToolCard";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Tools = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = tools.filter((tool) => {
    const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory;
    const matchesSearch =
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            All <span className="text-gradient">Tools</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse through our collection of powerful development tools
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 bg-card border-border focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-semibold mb-6 text-center">Categories</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              onClick={() => setSelectedCategory("all")}
              variant={selectedCategory === "all" ? "default" : "outline"}
              className={`group ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                  : "border-border hover:border-primary hover:bg-primary/10"
              } transition-all duration-300`}
            >
              All Tools
            </Button>
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`group ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                      : "border-border hover:border-primary hover:bg-primary/10"
                  } transition-all duration-300`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-2xl font-semibold mb-6">
            {selectedCategory === "all"
              ? "All Tools"
              : categories.find((c) => c.id === selectedCategory)?.name + " Tools"}
            <span className="text-muted-foreground ml-2">({filteredTools.length})</span>
          </h2>
          
          {filteredTools.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTools.map((tool, index) => (
                <div
                  key={tool.id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ToolCard
                    icon={tool.icon}
                    title={tool.title}
                    description={tool.description}
                    category={categories.find((c) => c.id === tool.category)?.name}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No tools found matching your criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tools;
