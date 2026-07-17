import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WoodType } from '../types';
import AnimatedList from './AnimatedList';

const woods: WoodType[] = [
  {
    id: 'wanza',
    name: 'Wanza',
    scientificName: 'Cordia Africana',
    description: 'A prized local hardwood known for its exceptional durability and rich, golden-brown to medium-brown color. Wanza ages beautifully, developing a deep patina over time. It is highly resistant to wear, making it perfect for heirloom furniture pieces like dining tables and solid beds.',
    features: ['High Durability', 'Interlocked Grain', 'Rich Golden-Brown Hue', 'Excellent Finish Quality']
  },
  {
    id: 'zigba',
    name: 'Zigba',
    scientificName: 'Podocarpus Falcatus',
    description: 'A versatile, lighter wood favored for its smooth texture and straight grain. Zigba has a pale yellow to light brown appearance that brings a bright, modern feel to interior spaces. It is relatively lightweight but strong, ideal for elegant cabinetry and shelving.',
    features: ['Smooth Texture', 'Straight Grain', 'Light, Bright Tone', 'Versatile Application']
  },
  {
    id: 'kerero',
    name: 'Kerero',
    scientificName: 'Aningeria Adolfi-friedericii',
    description: 'A luxurious wood with a subtle, pale cream to light reddish-brown hue. Kerero is highly valued for its fine, even texture and ability to take stains and polishes exceptionally well. It is often used in high-end veneer work and refined interior detailing.',
    features: ['Fine, Even Texture', 'Pale Cream to Reddish Tone', 'Takes Polish Exceptionally', 'Premium Feel']
  },
  {
    id: 'weyra',
    name: 'Weyra',
    scientificName: 'Olea Europaea',
    description: 'An incredibly dense and durable wood, often referred to as African Olive. Weyra offers a striking grain pattern with dark brown to almost black streaking against a pale yellow-brown background. It is highly prized for statement pieces and ornamental turning.',
    features: ['Extreme Density', 'Striking Grain Pattern', 'High Wear Resistance', 'Natural Luster']
  },
  {
    id: 'tid',
    name: 'Tid',
    scientificName: 'Juniperus Procera',
    description: 'A fragrant softwood native to the Ethiopian highlands. Tid, or East African Juniper, is valued for its distinct cedar-like aroma and natural resistance to decay and insects. It features a fine texture and a beautiful pale reddish-brown hue.',
    features: ['Aromatic Cedar Scent', 'Insect Resistant', 'Fine Texture', 'Lightweight & Stable']
  }
];

export default function WoodInspector() {
  const [selectedWood, setSelectedWood] = useState<WoodType>(woods[0]);

  return (
    <section id="woods" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#C97B63] mb-6">Our Premium Local Woods</h2>
          <div className="w-16 h-[1px] bg-[#1E1B1A] mx-auto mb-6" />
          <p className="text-[#F9F6F0] max-w-2xl mx-auto font-light">
            We ethically source the finest Ethiopian timber, selecting each piece for its unique character, strength, and beauty.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Wood Selectors */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <AnimatedList
              items={woods.map((wood) => (
                <div className="text-left w-full group">
                  <h3 className="font-serif text-2xl text-[#C97B63] mb-2 transition-colors">{wood.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-[#C97B63] font-medium">{wood.scientificName}</p>
                </div>
              ))}
              onItemSelect={(_, index) => setSelectedWood(woods[index])}
              initialSelectedIndex={woods.findIndex(w => w.id === selectedWood.id)}
            />
          </div>

          {/* Details Area */}
          <div className="lg:col-span-7 bg-[#1E1B1A] p-8 md:p-12 lg:p-16 rounded-2xl border border-[#F9F6F0]/10 min-h-[450px] flex flex-col justify-center relative overflow-hidden shadow-2xl">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C97B63]/5 blur-[100px] rounded-full pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedWood.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="flex items-center gap-6 mb-8">
                  <h3 className="text-4xl md:text-5xl font-serif text-[#F9F6F0]">{selectedWood.name}</h3>
                  <span className="h-[1px] flex-1 bg-[#C97B63]/20 mt-3 block" />
                </div>
                
                <p className="text-[#E8E2DC] leading-relaxed text-lg mb-10 font-light">
                  {selectedWood.description}
                </p>
                
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-[#E8E2DC] mb-6">
                    Key Characteristics
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                    {selectedWood.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-4 text-[#E8E2DC] text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C97B63]/80 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
