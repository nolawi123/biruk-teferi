import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
import { GalleryItem } from '../types';

const items: GalleryItem[] = [
  { id: '1', title: 'The Horizon Console', category: 'TV Stands & Consoles', woodType: 'Dark Walnut', imageUrl: '/number-4.jpg' },
  { id: '2', title: 'The Wave Credenza', category: 'TV Stands & Consoles', woodType: 'Carved Solid Wood', imageUrl: '/number-5.png' },
  { id: '3', title: 'The Kyoto Media Stand', category: 'TV Stands & Consoles', woodType: 'Slatted Hardwood', imageUrl: '/number-7.png' },
  { id: '4', title: 'The Nordic Minimalist', category: 'TV Stands & Consoles', woodType: 'Natural Oak', imageUrl: '/number-6.png' },
  { id: '5', title: 'The Industrial Loft Console', category: 'TV Stands & Consoles', woodType: 'Raw Oak & Matte Black', imageUrl: '/number-10.png' },
  { id: '6', title: 'The Fluted Oval Dining Table', category: 'Tables', woodType: 'Bespoke Wanza', imageUrl: '/number-12.png' },
  { id: '7', title: 'The Urban Nesting Coffee Tables', category: 'Tables', woodType: 'Solid Wood & Metal', imageUrl: '/number-3.png' },
  { id: '8', title: 'The Eclipse Minimalist Coffee Table', category: 'Tables', woodType: 'Gloss Lacquer', imageUrl: '/number-2.png' },
  { id: '9', title: 'The Floating Atelier System', category: 'Shelving & Storage', woodType: 'Modular Oak', imageUrl: '/number-11.png' }
];

const categories = ['All', 'TV Stands & Consoles', 'Tables', 'Shelving & Storage'];

const GalleryCard: React.FC<{ item: GalleryItem, handleRequest: (item: GalleryItem) => void }> = ({ item, handleRequest }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col"
    >
      <div className={`w-full aspect-[4/3] bg-[#1E1B1A] relative overflow-hidden rounded-lg mb-5 ${!isLoaded ? 'animate-pulse' : ''}`}>
        <picture>
          <source srcSet={item.imageUrl.replace(/\.(png|jpg|jpeg)$/i, '.webp')} type="image/webp" />
          <img
            src={item.imageUrl}
            alt={item.title}
            loading="lazy"
            decoding="async"
            width={800}
            height={600}
            fetchPriority={isLoaded ? 'low' : 'high'}
            className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
          />
        </picture>
        <div className="absolute inset-0 bg-[#151312]/10 group-hover:bg-transparent transition-colors duration-500 z-20 pointer-events-none" />
      </div>
      
      <div className="flex flex-col flex-1 px-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#C97B63] mb-2 font-medium">
          {item.woodType}
        </span>
        <h3 className="text-[#C97B63] font-serif text-xl mb-4 leading-snug">
          {item.title}
        </h3>
        
        <div className="mt-auto pt-2">
          <button 
            onClick={() => handleRequest(item)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-[#E8E2DC] group-hover:text-[#C97B63] transition-colors"
          >
            Request This Design
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [inquiryItem, setInquiryItem] = useState<GalleryItem | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    notes: ''
  });

  const filteredItems = items.filter(
    (item) => filter === 'All' || item.category === filter
  );

  const handleRequest = (item: GalleryItem) => {
    setInquiryItem(item);
    setFormData({ name: '', phone: '', notes: '' });
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryItem) return;

    const message = `Hello Biruk Teferi! I'm interested in a custom order.
Product: ${inquiryItem.title}
Name: ${formData.name}
Phone: ${formData.phone}
Custom Dimensions/Notes: ${formData.notes}`;

    const emailAddress = "birukteferiwoodworks@gmail.com";
    const subject = encodeURIComponent(`Design Inquiry - ${inquiryItem.title}`);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${encodeURIComponent(message)}`;
    setInquiryItem(null);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (inquiryItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [inquiryItem]);

  return (
    <section id="gallery" className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-serif text-[#C97B63] mb-6">Our Creations</h2>
        <div className="w-16 h-[1px] bg-[#1E1B1A] mx-auto mb-10" />
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 border ${
                filter === cat
                  ? 'border-[#C97B63] bg-[#C97B63]/10 text-[#C97B63] shadow-[0_0_10px_rgba(193,154,107,0.15)]'
                  : 'border-transparent text-[#F9F6F0] hover:text-[#F9F6F0] hover:border-[#C97B63]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <GalleryCard key={item.id} item={item} handleRequest={handleRequest} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {inquiryItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setInquiryItem(null)}
              className="absolute inset-0 bg-[#151312]/90 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0 }}
              className="relative w-full max-w-lg bg-[#1E1B1A] border border-[#C97B63]/20 rounded-xl shadow-2xl overflow-hidden z-10"
            >
              <button 
                onClick={() => setInquiryItem(null)}
                className="absolute top-4 right-4 text-[#F9F6F0] hover:text-[#C97B63] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="p-8 md:p-10">
                <h3 className="font-serif text-3xl text-[#F9F6F0] mb-2">Inquire About Design</h3>
                <p className="text-sm text-[#F9F6F0] mb-8">Please provide your details and we will reach out regarding your custom piece.</p>
                
                <form onSubmit={handleModalSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#E8E2DC] mb-2 font-medium">Product</label>
                    <input 
                      type="text" 
                      readOnly 
                      value={inquiryItem.title}
                      className="w-full bg-[#151312] border border-[#F9F6F0]/20 text-[#E8E2DC] px-4 py-3 rounded-sm text-sm focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#E8E2DC] mb-2 font-medium">Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-transparent border-b border-[#F9F6F0]/30 text-[#F9F6F0] px-0 py-2 text-sm focus:outline-none focus:border-[#F9F6F0]/20 transition-colors placeholder:text-[#F9F6F0]/20"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#E8E2DC] mb-2 font-medium">Phone</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-transparent border-b border-[#F9F6F0]/30 text-[#F9F6F0] px-0 py-2 text-sm focus:outline-none focus:border-[#F9F6F0]/20 transition-colors placeholder:text-[#F9F6F0]/20"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#E8E2DC] mb-2 font-medium">Custom Dimensions / Notes</label>
                    <textarea 
                      required
                      value={formData.notes}
                      onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                      rows={3}
                      className="w-full bg-transparent border-b border-[#F9F6F0]/30 text-[#F9F6F0] px-0 py-2 text-sm focus:outline-none focus:border-[#F9F6F0]/20 transition-colors placeholder:text-[#F9F6F0]/20 resize-none"
                      placeholder="Any specific requests?"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full mt-4 flex items-center justify-center gap-3 bg-[#C97B63] text-[#1E1B1A] py-4 rounded-sm font-medium uppercase tracking-widest text-sm hover:bg-[#C97B63]/90 transition-colors group"
                  >
                    Send Email Inquiry
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
