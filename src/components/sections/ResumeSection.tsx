import { motion } from "framer-motion";
import { Linkedin, Briefcase, Download, QrCode, Globe } from "lucide-react";
import { SiFiverr, SiUpwork } from "react-icons/si";

const platforms = [
  { name: "LinkedIn", Icon: Linkedin, href: "https://linkedin.com", color: "#0077B5" },
  { name: "Naukri", Icon: Globe, href: "https://naukri.com", color: "#4A90E2" },
  { name: "Fiverr", Icon: SiFiverr, href: "https://fiverr.com", color: "#1DBF73" },
  { name: "Upwork", Icon: SiUpwork, href: "https://upwork.com", color: "#6FDA44" },
];

export const ResumeSection = () => {
  return (
    <section id="resume" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-16 text-center gradient-text"
        >
          Resume
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card space-y-8"
        >
          {/* Header */}
          <div className="text-center border-b border-border/50 pb-6">
            <h3 className="text-3xl font-bold mb-2">Nagi</h3>
            <p className="text-lg text-muted-foreground">
              UI/UX Designer & Software Tester
            </p>
          </div>

          {/* QR Code Section */}
          <div className="flex flex-col items-center py-6 space-y-4">
            <div className="w-48 h-48 bg-card border-2 border-border rounded-xl flex items-center justify-center">
              <QrCode className="w-32 h-32 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Scan to download full resume (PDF)
            </p>
            <button className="flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-smooth">
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>

          {/* Professional Profiles */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-accent" />
              Professional Profiles
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-4 rounded-xl border border-border hover:border-accent hover:bg-accent/5 transition-smooth group"
                >
                  <platform.Icon className="w-8 h-8 group-hover:text-accent transition-smooth" />
                  <span className="text-sm font-medium">{platform.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="space-y-4 pt-4 border-t border-border/50">
            <h4 className="text-xl font-semibold">Core Competencies</h4>
            <div className="flex flex-wrap gap-3">
              {[
                "UI/UX Design",
                "Figma",
                "Adobe Suite",
                "Software Testing",
                "Quality Assurance",
                "Prototyping",
                "User Research",
                "Responsive Design",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
