/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import WoodInspector from './components/WoodInspector';
import QuoteForm from './components/QuoteForm';
import FloatingTelegram from './components/FloatingTelegram';
import ProgressBar from './components/ProgressBar';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#151312] font-sans selection:bg-[#1E1B1A]/30 selection:text-[#F9F6F0]">
      <ProgressBar />
      <Header />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <WoodInspector />
        <QuoteForm />
      </main>
      
      {/* Simple Footer */}
      <footer className="bg-[#1E1B1A] border-t border-[#C97B63]/10 text-[#F9F6F0] py-16 text-center text-sm px-6">
        <p className="mb-3 font-serif text-2xl text-[#F9F6F0] tracking-wider uppercase">Biruk Teferi</p>
        <div className="w-12 h-[1px] bg-[#1E1B1A]/40 mx-auto mb-6" />
        <a href="https://instagram.com/birukteferiwoodworks" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#D1CBC5] hover:text-white transition-colors mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          @birukteferiwoodworks
        </a>
        <p>&copy; {new Date().getFullYear()} Biruk Teferi. All rights reserved.</p>
        <p className="mt-2 text-[#A39D98] uppercase tracking-widest text-xs">Addis Ababa, Ethiopia</p>
      </footer>

      <FloatingTelegram />
    </div>
  );
}

