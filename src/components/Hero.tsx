import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute -inset-[25%] z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80')`,
          y
        }}
      >
        <div className="absolute inset-0 bg-[#1E1B1A]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-90" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[#F9F6F0] uppercase tracking-[0.3em] text-sm mb-6 font-medium"
        >
          Bespoke Woodworking Studio
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#F9F6F0] font-medium leading-tight mb-6 tracking-wide"
        >
          Masterfully Crafted.<br />Built for Generations.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-[#E8E2DC] font-sans mb-12 max-w-2xl font-light"
        >
          Premium custom furniture and woodwork, tailored for modern spaces in Addis Ababa.
        </motion.p>

        <motion.a
          href="#gallery"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="group flex flex-col items-center gap-4 text-[#E8E2DC] hover:text-[#F9F6F0] transition-colors mt-8"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Explore Our Work</span>
          <ArrowDown className="w-5 h-5 group-hover:translate-y-2 transition-transform duration-300" strokeWidth={1.5} />
        </motion.a>
      </div>
    </section>
  );
}
