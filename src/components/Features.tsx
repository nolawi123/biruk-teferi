import React from 'react';
import { motion } from 'motion/react';
import { TreePine, Hammer, Ruler } from 'lucide-react';

const features = [
  {
    icon: <TreePine className="w-8 h-8 text-[#F9F6F0]" strokeWidth={1.5} />,
    title: '100% Ethiopian Hardwood',
    description: 'Premium locally-sourced, seasoned Wanza and Zigba.'
  },
  {
    icon: <Hammer className="w-8 h-8 text-[#F9F6F0]" strokeWidth={1.5} />,
    title: 'Artisanal Joinery',
    description: 'Traditional hand-crafted precision joints, built to last a lifetime.'
  },
  {
    icon: <Ruler className="w-8 h-8 text-[#F9F6F0]" strokeWidth={1.5} />,
    title: 'Tailored to Your Space',
    description: 'Custom sizes customized perfectly to your home layout.'
  }
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-[#151312] border-y border-[#C97B63]/10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#C97B63] mb-4">Why Biruk Teferi</h2>
          <div className="w-16 h-[1px] bg-[#1E1B1A] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="mb-6 p-4 rounded-full bg-[#1E1B1A] border border-[#C97B63]/20 shadow-[0_0_15px_rgba(193,154,107,0.1)]">
                {feat.icon}
              </div>
              <h3 className="text-xl font-serif text-[#C97B63] mb-3">{feat.title}</h3>
              <p className="text-[#E8E2DC] leading-relaxed max-w-xs mx-auto">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
