import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import {
  SiFigma,
  SiAdobephotoshop,
  SiBlender,
  SiAdobeillustrator,
  SiSketch,
} from "react-icons/si";
import { Code2 } from "lucide-react";

const tools = [
  { Icon: SiFigma, delay: 0, isLucide: false },
  { Icon: SiAdobephotoshop, delay: 0.2, isLucide: false },
  { Icon: Code2, delay: 0.4, isLucide: true },
  { Icon: SiBlender, delay: 0.6, isLucide: false },
  { Icon: SiAdobeillustrator, delay: 0.8, isLucide: false },
  { Icon: SiSketch, delay: 1, isLucide: false },
];

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-[var(--gradient-glow)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 px-6">
        {/* Orbiting Icons */}
        <div className="relative w-80 h-80 mx-auto mb-12">
          {tools.map(({ Icon, delay, isLucide }, index) => (
            <motion.div
              key={index}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + 0.5, duration: 0.6 }}
            >
              <div
                className="orbit"
                style={{
                  animationDelay: `${-delay * 3}s`,
                }}
              >
                <div className="glass-card p-4 glow-accent">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Center Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div>
              <h1 className="text-6xl md:text-8xl font-bold mb-4 glow-text">
                Hi, I'm <span className="gradient-text">D Nagendra Varma</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                UI/UX Designer & Software Tester
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg glow-accent transition-smooth"
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Enter Portfolio
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8 text-accent" />
      </motion.div>
    </section>
  );
};
