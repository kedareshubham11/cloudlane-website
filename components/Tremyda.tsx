"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { tremydaInfo } from "@/lib/data";
import Image from "next/image";

export default function Tremyda() {
  return (
    <SectionWrapper id="tremyda" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-5 h-5 text-pink-400" />
              <span className="text-foreground/90 font-medium">
                Our Flagship Product
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-black text-gradient-secondary mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {tremydaInfo.title}
            </motion.h2>

            <motion.h3
              className="text-2xl md:text-3xl font-bold text-foreground/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {tremydaInfo.subtitle}
            </motion.h3>

            <motion.p
              className="text-lg md:text-xl text-foreground/70 mb-12 leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {tremydaInfo.description}
            </motion.p>

            {/* Features */}
            <div className="space-y-6 mb-12">
              {tremydaInfo.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="w-8 h-8 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <Check className="w-5 h-5 text-foreground" />
                  </motion.div>
                  <span className="text-foreground/90 font-medium group-hover:text-foreground transition-colors duration-300">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={tremydaInfo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block px-10 py-5 gradient-secondary rounded-2xl font-bold text-lg text-foreground shadow-glow overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative flex items-center gap-3">
                Explore Tremyda
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </motion.a>
          </motion.div>

          {/* Product Showcase */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative glass-strong rounded-3xl p-8 shadow-2xl border border-white/20">
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 gradient-primary rounded-full shadow-glow"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 gradient-accent rounded-full shadow-glow-pink"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 1,
                }}
              />

              {/* Main content - Tremyda Flow Image */}
              <motion.div
                className="glass rounded-2xl p-4 overflow-hidden relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={tremydaInfo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-video w-full"
                >
                  <Image
                    src={tremydaInfo.image}
                    alt="Tremyda Health Data Platform Flow"
                    fill
                    className="object-contain rounded-xl"
                    priority
                  />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
