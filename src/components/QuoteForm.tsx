import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import SpecularButton from './SpecularButton';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Dining Table',
    wood: 'Wanza',
    length: '',
    width: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hello Biruk Teferi! I would like to request a custom quote:
    
Name: ${formData.name}
Phone: ${formData.phone}

Design Details:
Category: ${formData.category}
Wood Type: ${formData.wood}
Dimensions: ${formData.length}cm x ${formData.width}cm

Please let me know the next steps.`;

    const encodedMessage = encodeURIComponent(message);
    const emailAddress = "birukteferiwoodworks@gmail.com";
    const subject = encodeURIComponent(`Custom Quote Request - ${formData.category}`);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${encodedMessage}`;
  };

  return (
    <section id="quote" className="py-32 px-6 max-w-4xl mx-auto relative">
      {/* Subtle background glow behind the form */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#C97B63]/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="bg-[#1E1B1A]/60 backdrop-blur-xl p-8 md:p-14 rounded-2xl border border-[#C97B63]/20 shadow-2xl relative z-10"
      >
        <div className="text-center mb-14">
          <p className="text-[#E8E2DC] uppercase tracking-[0.2em] text-xs font-medium mb-4">Bespoke Design Studio</p>
          <h2 className="text-3xl md:text-5xl font-serif text-[#F9F6F0] mb-6">Design Your Custom Piece</h2>
          <p className="text-[#F9F6F0] font-light max-w-lg mx-auto mb-6">
            Tell us about your vision. Submit your details below to send us an email.
          </p>
          <a href="https://instagram.com/birukteferiwoodworks" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#E8E2DC] hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            @birukteferiwoodworks
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="peer w-full bg-transparent border-b border-[#F9F6F0]/20 py-3 text-[#F9F6F0] focus:border-[#F9F6F0]/20 outline-none transition-colors"
                placeholder=" "
              />
              <label htmlFor="name" className="absolute left-0 top-3 text-[#F9F6F0]/40 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#E8E2DC] peer-valid:-top-4 peer-valid:text-xs pointer-events-none">
                Full Name
              </label>
            </div>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="peer w-full bg-transparent border-b border-[#F9F6F0]/20 py-3 text-[#F9F6F0] focus:border-[#F9F6F0]/20 outline-none transition-colors"
                placeholder=" "
              />
              <label htmlFor="phone" className="absolute left-0 top-3 text-[#F9F6F0]/40 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#E8E2DC] peer-valid:-top-4 peer-valid:text-xs pointer-events-none">
                Phone Number
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <label htmlFor="category" className="text-xs uppercase tracking-widest text-[#E8E2DC] mb-1 block">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#F9F6F0]/20 py-3 text-[#F9F6F0] focus:border-[#F9F6F0]/20 outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="Dining Table" className="bg-[#1E1B1A] text-[#F9F6F0]">Dining Table</option>
                <option value="Coffee Table" className="bg-[#1E1B1A] text-[#F9F6F0]">Coffee Table</option>
                <option value="Kitchen Cabinets" className="bg-[#1E1B1A] text-[#F9F6F0]">Kitchen Cabinets</option>
                <option value="Bed Frame" className="bg-[#1E1B1A] text-[#F9F6F0]">Bed Frame</option>
                <option value="Other" className="bg-[#1E1B1A] text-[#F9F6F0]">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="wood" className="text-xs uppercase tracking-widest text-[#E8E2DC] mb-1 block">Preferred Wood Type</label>
              <select
                id="wood"
                name="wood"
                value={formData.wood}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#F9F6F0]/20 py-3 text-[#F9F6F0] focus:border-[#F9F6F0]/20 outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="Wanza" className="bg-[#1E1B1A] text-[#F9F6F0]">Wanza (Cordia)</option>
                <option value="Zigba" className="bg-[#1E1B1A] text-[#F9F6F0]">Zigba (Podocarpus)</option>
                <option value="Kerero" className="bg-[#1E1B1A] text-[#F9F6F0]">Kerero (Aningeria)</option>
                <option value="Not Sure" className="bg-[#1E1B1A] text-[#F9F6F0]">Not Sure Yet</option>
              </select>
            </div>
          </div>

          <div className="pt-4">
            <label className="text-xs uppercase tracking-widest text-[#E8E2DC] mb-4 block">Estimated Dimensions (cm)</label>
            <div className="grid grid-cols-2 gap-10">
              <div className="relative">
                <input
                  type="number"
                  name="length"
                  id="length"
                  required
                  value={formData.length}
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-b border-[#F9F6F0]/20 py-3 text-[#F9F6F0] focus:border-[#F9F6F0]/20 outline-none transition-colors pr-8"
                  placeholder=" "
                />
                <label htmlFor="length" className="absolute left-0 top-3 text-[#F9F6F0]/40 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#E8E2DC] peer-valid:-top-4 peer-valid:text-xs pointer-events-none">
                  Length
                </label>
                <span className="absolute right-0 top-3 text-[#F9F6F0]/20 text-sm">cm</span>
              </div>
              <div className="relative">
                <input
                  type="number"
                  name="width"
                  id="width"
                  required
                  value={formData.width}
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-b border-[#F9F6F0]/20 py-3 text-[#F9F6F0] focus:border-[#F9F6F0]/20 outline-none transition-colors pr-8"
                  placeholder=" "
                />
                <label htmlFor="width" className="absolute left-0 top-3 text-[#F9F6F0]/40 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#E8E2DC] peer-valid:-top-4 peer-valid:text-xs pointer-events-none">
                  Width
                </label>
                <span className="absolute right-0 top-3 text-[#F9F6F0]/20 text-sm">cm</span>
              </div>
            </div>
          </div>

          <SpecularButton
            type="submit"
            className="w-full mt-12 flex items-center justify-center font-medium uppercase tracking-widest text-sm transition-colors group"
            size="lg"
            baseColor="#2A2C2B"
            lineColor="#ffffff"
            textColor="#F9F7F2"
            tint="#2A2C2B"
            tintOpacity={1}
            intensity={1.2}
            radius={2}
            autoAnimate={true}
          >
            <span className="flex items-center justify-center gap-3">
              Submit Custom Dimension Request
              <ArrowRight className="w-5 h-5 transition-transform" />
            </span>
          </SpecularButton>
        </form>
      </motion.div>
    </section>
  );
}
