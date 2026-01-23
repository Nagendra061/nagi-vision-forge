import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiFigma, SiAdobexd, SiReact, SiPython, SiJavascript } from "react-icons/si";
import { Palette, Code2, Heart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const projects = {
  designing: [
    {
      title: "E-commerce Dashboard",
      description: "Modern admin dashboard with analytics",
      tools: [SiFigma, SiAdobexd],
      image: "design-1",
    },
    {
      title: "Mobile Banking App",
      description: "Clean and intuitive banking interface",
      tools: [SiFigma],
      image: "design-2",
    },
    {
      title: "Social Media Platform",
      description: "Community-focused social app design",
      tools: [SiFigma, SiAdobexd],
      image: "design-3",
    },
  ],

  // programming: [
  //   {
  //     title: "Portfolio Website",
  //     description: "3D interactive portfolio with React",
  //     tools: [SiReact, SiJavascript],
  //     image: "code-1",
  //   },
  //   {
  //     title: "Task Management App",
  //     description: "Full-stack productivity application",
  //     tools: [SiReact, SiPython],
  //     image: "code-2",
  //   },
  //   {
  //     title: "API Integration Suite",
  //     description: "RESTful API wrapper and SDK",
  //     tools: [SiPython, SiJavascript],
  //     image: "code-3",
  //   },
  // ],
  hobbies: [
    {
      title: "3D Character Design",
      description: "Low-poly character illustrations",
      tools: [],
      image: "hobby-1",
    },
    {
      title: "Photography Portfolio",
      description: "Urban and landscape photography",
      tools: [],
      image: "hobby-2",
    },
    {
      title: "Digital Art Series",
      description: "Abstract digital paintings",
      tools: [],
      image: "hobby-3",
    },
  ],
};

const tabConfig = {
  designing: {
    icon: Palette,
    cursor: "cursor-pen",
    theme: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
  },

  // programming: {
  //   icon: Code2,
  //   cursor: "cursor-code",
  //   theme: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
  // },
  hobbies: {
    icon: Heart,
    cursor: "cursor-default",
    theme: "bg-gradient-to-br from-green-500/10 to-yellow-500/10",
  },
};

export const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof projects>("designing");

  return (
    <section
      id="portfolio"
      className={`section-padding transition-all duration-700 ${tabConfig[activeTab].theme} ${tabConfig[activeTab].cursor}`}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-16 text-center gradient-text"
        >
          Portfolio
        </motion.h2>

        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as keyof typeof projects)}
          className="w-full"
        >
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 glass overflow-x-auto">
            {Object.entries(tabConfig).map(([key, config]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="flex items-center gap-2 capitalize data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-xs sm:text-sm whitespace-nowrap"
              >
                <config.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">{key}</span>
                <span className="sm:hidden">{key.charAt(0).toUpperCase()}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(projects).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {items.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-card group hover:glow-accent transition-smooth overflow-hidden"
                    >
                      {/* Project Image Preview */}
                      <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-primary/20 mb-4 rounded-lg overflow-hidden group/img">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-4xl font-bold text-accent/30">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover/img:opacity-100 transition-smooth flex items-center justify-center">
                          <span className="text-white font-semibold">View Project</span>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold group-hover:text-accent transition-smooth">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {project.description}
                        </p>

                        {/* Tools */}
                        {project.tools.length > 0 && (
                          <div className="flex gap-3 pt-2">
                            {project.tools.map((Tool, i) => (
                              <Tool key={i} className="w-5 h-5 text-accent" />
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
