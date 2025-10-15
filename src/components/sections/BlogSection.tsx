import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const blogPosts = [
  {
    title: "The Future of UI/UX Design in 2025",
    date: "March 15, 2025",
    excerpt:
      "Exploring emerging trends in design systems, AI-assisted design, and the evolution of user experience in the coming years.",
    category: "Design Trends",
  },
  {
    title: "Building Accessible Interfaces",
    date: "March 10, 2025",
    excerpt:
      "A comprehensive guide to creating inclusive designs that work for everyone, with practical examples and best practices.",
    category: "Accessibility",
  },
  {
    title: "From Figma to Code: Bridging the Gap",
    date: "March 5, 2025",
    excerpt:
      "Tips and tools for seamless handoff between designers and developers, ensuring pixel-perfect implementation.",
    category: "Workflow",
  },
  {
    title: "Testing Strategies for Modern Web Apps",
    date: "February 28, 2025",
    excerpt:
      "An in-depth look at effective testing methodologies, automation tools, and quality assurance best practices.",
    category: "Testing",
  },
  {
    title: "Mastering Glassmorphism in UI Design",
    date: "February 20, 2025",
    excerpt:
      "How to effectively use glassmorphism in your designs while maintaining usability and performance.",
    category: "Design Techniques",
  },
];

export const BlogSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="blog" className="section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold gradient-text"
          >
            Blog
          </motion.h2>

          {/* Scroll Controls */}
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll("left")}
              className="glass hover:bg-accent/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll("right")}
              className="glass hover:bg-accent/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card min-w-[350px] snap-start group hover:glow-accent transition-smooth"
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-smooth">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{post.date}</p>
              <p className="text-foreground/80 mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Read More */}
              <button className="flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                Read More
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
