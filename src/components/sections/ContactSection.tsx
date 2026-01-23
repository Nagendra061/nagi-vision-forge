import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send, Linkedin, Briefcase, CheckCircle } from "lucide-react";
import { SiFiverr } from "react-icons/si";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";

// REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
const GOOGLE_SCRIPT_URL = "YOUR_SCRIPT_URL_HERE";

const socialIcons = [
  { Icon: Mail, href: "mailto:nagi@example.com", label: "Email" },
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

const hirePlatforms = [
  { name: "LinkedIn", Icon: Linkedin, href: "https://linkedin.com" },
  { name: "Fiverr", Icon: SiFiverr, href: "https://fiverr.com" },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (GOOGLE_SCRIPT_URL === "YOUR_SCRIPT_URL_HERE") {
      toast.error("Please configure the Google Script URL in the code first.");
      setIsLoading(false);
      return;
    }

    try {
      // Use 'no-cors' mode for Google Apps Script to avoid CORS errors
      // Note: In 'no-cors' mode, we can't read the response status/body
      // so we assume success if no network error opens.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Show success feedback
      setIsSubmitted(true);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again or email directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-16 text-center gradient-text"
        >
          Get In Touch
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card min-h-[500px] flex items-center"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full text-center space-y-6 py-12"
              >
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold">Message Received!</h3>
                <p className="text-lg text-muted-foreground px-6 leading-relaxed">
                  Your message is received successfully. As soon as possible, I will contact you.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <div className="w-full">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      required
                      className="glass"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      required
                      className="glass"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Your message..."
                      rows={5}
                      required
                      className="glass resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold glow-accent transition-smooth"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                {/* Social Contact */}
                <div className="flex gap-4 mt-8 pt-8 border-t border-border/50">
                  {socialIcons.map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="glass-card p-3 hover:bg-accent/10 transition-smooth group"
                      aria-label={label}
                    >
                      <Icon className="w-6 h-6 group-hover:text-accent transition-smooth" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Get Me Hired */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold">Get Me Hired</h3>
              </div>
              <p className="text-foreground/80 mb-8">
                I'm available for freelance projects and full-time opportunities.
                Let's create something amazing together!
              </p>

              <div className="space-y-4">
                {hirePlatforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-accent hover:bg-accent/5 transition-smooth group"
                  >
                    <platform.Icon className="w-6 h-6 group-hover:text-accent transition-smooth" />
                    <span className="font-medium">Hire me on {platform.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold">Available for Work</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently open to new projects and collaborations. Response time:
                within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
