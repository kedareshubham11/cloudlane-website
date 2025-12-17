"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Heart, Code2, Sparkles } from "lucide-react";
import { companyInfo } from "@/lib/data";

const footerLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookie Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 gradient-primary rounded-full filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 gradient-accent rounded-full filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                <Code2 className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="text-3xl font-black text-gradient">
                {companyInfo.name}
              </h3>
            </motion.div>
            <p className="text-foreground/70 leading-relaxed text-lg mb-6">
              Crafting digital solutions with passion and expertise.
              Transforming ideas into powerful applications.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                {
                  icon: Linkedin,
                  href: companyInfo.social.linkedin,
                  color: "hover:bg-blue-600",
                },
                {
                  icon: Github,
                  href: companyInfo.social.github,
                  color: "hover:bg-gray-700",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 glass rounded-2xl flex items-center justify-center ${social.color} transition-all duration-300 group`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="w-6 h-6 text-foreground/80 group-hover:text-foreground transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-gradient-secondary mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={link.href}
                    className="text-foreground/70 hover:text-foreground transition-colors duration-300 text-lg block py-1"
                    whileHover={{ x: 10 }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-gradient mb-6">
              Stay Updated
            </h4>
            <p className="text-foreground/70 mb-6 text-lg">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <motion.div className="flex gap-3" whileHover={{ scale: 1.02 }}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 glass rounded-xl border border-foreground/20 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-foreground placeholder-foreground/50 bg-transparent"
              />
              <motion.button
                className="px-6 py-3 gradient-primary rounded-xl font-bold text-foreground shadow-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-foreground/60 text-lg mb-4 md:mb-0"
            whileHover={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            © 2025 {companyInfo.name}. All rights reserved.
          </motion.p>

          <motion.div
            className="flex items-center gap-3 text-foreground/60 text-lg"
            whileHover={{ scale: 1.05 }}
          >
            <span>Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Heart className="w-5 h-5 text-pink-400" />
            </motion.div>
            <span>by CloudLane</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
