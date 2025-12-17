"use client";

import { motion } from "framer-motion";
import { Users, Target, Award, Heart, Zap } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const stats = [
  { icon: Users, label: "Team Members", value: "10+", color: "text-cyan-400" },
  {
    icon: Target,
    label: "Projects Completed",
    value: "20+",
    color: "text-pink-400",
  },
  {
    icon: Award,
    label: "Years Experience",
    value: "6+",
    color: "text-purple-400",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
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
            <Heart className="w-5 h-5 text-pink-400" />
            <span className="text-foreground/90 font-medium">Our Story</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-black text-gradient mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            About Us
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-foreground/70 max-w-5xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We are a passionate team of developers, designers, and consultants
            dedicated to creating exceptional digital experiences. Our mission
            is to help businesses leverage technology to achieve their goals and
            drive innovation.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="w-20 h-20 glass-strong rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-500"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <stat.icon className={`w-10 h-10 ${stat.color}`} />
              </motion.div>

              <motion.div
                className="text-4xl md:text-5xl font-black text-gradient mb-3"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + index * 0.1,
                  type: "spring",
                }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>

              <div className="text-foreground/70 font-medium text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision Section */}
        <motion.div
          className="glass-strong rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background decoration */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 gradient-primary rounded-full filter blur-3xl opacity-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gradient-secondary mb-8">
                Our Vision
              </h3>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-8">
                To be the leading software development company that empowers
                businesses with innovative digital solutions, fostering growth
                and success in an ever-evolving technological landscape.
              </p>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                We believe in the power of collaboration, continuous learning,
                and delivering excellence in every project we undertake.
              </p>
            </motion.div>

            <motion.div
              className="glass rounded-3xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Floating icons */}
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 text-cyan-400"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Zap className="w-full h-full" />
              </motion.div>

              <h4 className="text-2xl md:text-3xl font-bold text-gradient mb-6">
                Why Choose CloudLane?
              </h4>

              <div className="space-y-4">
                {[
                  "Expert team with diverse skills",
                  "Cutting-edge technology stack",
                  "Agile development methodology",
                  "24/7 support and maintenance",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="w-3 h-3 gradient-primary rounded-full shadow-glow flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="text-foreground/90 font-medium group-hover:text-white transition-colors duration-300">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
