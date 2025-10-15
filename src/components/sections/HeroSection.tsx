import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = "Design";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Decorative Brackets */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 left-8 md:top-16 md:left-16 w-24 h-24 md:w-32 md:h-32 pointer-events-none z-0"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-8 right-8 md:bottom-16 md:right-16 w-24 h-24 md:w-32 md:h-32 pointer-events-none z-0"
      >
        <div className="absolute bottom-0 right-0 w-full h-1 bg-accent"></div>
        <div className="absolute bottom-0 right-0 w-1 h-full bg-accent"></div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <p className="text-2xl md:text-3xl text-foreground/80">
                is <span className="text-accent font-semibold italic">Nagendra</span>
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground">
                {text}
                <span className="text-accent animate-pulse">|</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              With extensive experience for expertise is to create and website...
            </p>
          </motion.div>

          {/* Right Content - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-accent/20">
              {/* Placeholder for profile image */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-6xl font-bold text-accent">N</span>
                  </div>
                  <p className="text-muted-foreground">Your Photo Here</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
