import { motion } from "framer-motion";
import { Heart, Github, Twitter, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="h-4 w-4" />, href: "https://github.com/nextfaang", label: "GitHub" },
    { icon: <Twitter className="h-4 w-4" />, href: "https://twitter.com/nextfaang", label: "Twitter" },
    { icon: <Linkedin className="h-4 w-4" />, href: "https://linkedin.com/company/nextfaang", label: "LinkedIn" },
    { icon: <Mail className="h-4 w-4" />, href: "mailto:contact@nextfaang.com", label: "Email" }
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "DSA Mastery", href: "/dsa" },
    { label: "Competitive Programming", href: "/competitive-programming" },
    { label: "Resources", href: "/resources" },
    { label: "Community", href: "/community" },
    { label: "CP Arena", href: "/cp-arena" }
  ];

  const tools = [
    { label: "Contest Analyzer", href: "/contest-analyzer" },
    { label: "CP Dictionary", href: "/cp-dictionary" },
    { label: "Tricks & Tips", href: "/cp-tricks-tips" },
    { label: "Resume Tips", href: "/resume-tips" },
    { label: "Hackathon Guide", href: "/hackathon-guide" }
  ];

  return (
    <footer className="bg-background border-t border-border/50 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/10 rounded-xl border border-primary/20">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                NEXTFAANG
              </h3>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md leading-relaxed">
              India's First LGM Platform - Empowering competitive programmers to achieve their dreams with comprehensive resources, practice problems, and expert guidance.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-400 border-green-500/30">
                150+ FAANG Placements
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-400 border-blue-500/30">
                1M+ Problems Solved
              </Badge>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Tools & Resources</h4>
            <ul className="space-y-2">
              {tools.map((tool, index) => (
                <motion.li
                  key={tool.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <a
                    href={tool.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span>{tool.label}</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} NEXTFAANG. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for competitive programmers</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <Badge variant="outline" className="text-xs">
              v12.0.0
            </Badge>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};