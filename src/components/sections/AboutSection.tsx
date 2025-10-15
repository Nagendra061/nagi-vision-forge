import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, BookOpen } from "lucide-react";

const socialLinks = [
  { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { Icon: BookOpen, href: "#", label: "Blog" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-16 text-center gradient-text"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm Nagi, a passionate UI/UX designer and software tester with a keen eye for detail
              and a love for creating seamless digital experiences. With expertise in design tools
              like Figma and Photoshop, and development skills in modern web technologies, I bridge
              the gap between beautiful design and functional implementation.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              My approach combines creative problem-solving with technical precision, ensuring
              every project not only looks stunning but performs flawlessly. I believe in crafting
              interfaces that are intuitive, accessible, and delightful to use. When I'm not
              designing or testing, you'll find me exploring new design trends and experimenting
              with creative technologies.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 hover:bg-accent/10 transition-smooth group"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6 group-hover:text-accent transition-smooth" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="glass-card max-w-sm w-full text-center space-y-6 glow-accent">
              {/* Profile Image Placeholder */}
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-accent to-primary overflow-hidden border-4 border-accent/30">
                <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-white">
                  N
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold gradient-text">Nagi</h3>
                <p className="text-lg text-muted-foreground mt-2">
                  UI/UX Designer & Software Tester
                </p>
              </div>

              <div className="pt-4 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  Crafting digital experiences with precision & creativity
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
