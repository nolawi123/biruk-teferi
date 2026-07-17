const fs = require('fs');
const path = require('path');

const files = [
  'src/App.tsx',
  'src/components/Header.tsx',
  'src/components/Hero.tsx',
  'src/components/Features.tsx',
  'src/components/Gallery.tsx',
  'src/components/WoodInspector.tsx',
  'src/components/QuoteForm.tsx',
  'src/components/FloatingTelegram.tsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // We want a high-end, organic dark theme that is highly legible and beautiful.
  // Main background
  content = content.replace(/bg-terracotta/g, 'bg-[#151312]');
  content = content.replace(/from-terracotta/g, 'from-[#151312]');
  
  // Text colors
  content = content.replace(/text-offwhite\/60/g, 'text-[#A39D98]');
  content = content.replace(/text-offwhite\/70/g, 'text-[#B8B2AD]');
  content = content.replace(/text-offwhite\/80/g, 'text-[#D1CBC5]');
  content = content.replace(/text-offwhite\/90/g, 'text-[#E8E2DC]');
  content = content.replace(/text-offwhite/g, 'text-[#F9F6F0]'); // Main bright text
  
  // Headers that were mistakenly set to charcoal
  content = content.replace(/text-charcoal/g, 'text-[#C97B63]'); // Terracotta accent text
  
  // Card Backgrounds
  content = content.replace(/bg-charcoal\/5/g, 'bg-[#C97B63]/5');
  content = content.replace(/bg-charcoal\/10/g, 'bg-[#C97B63]/10');
  content = content.replace(/bg-charcoal/g, 'bg-[#1E1B1A]'); // Darker cards
  
  // Borders
  content = content.replace(/border-charcoal\/20/g, 'border-[#C97B63]/20');
  content = content.replace(/border-charcoal\/30/g, 'border-[#C97B63]/30');
  content = content.replace(/border-charcoal/g, 'border-[#C97B63]');
  
  content = content.replace(/border-offwhite\/10/g, 'border-[#F9F6F0]/10');
  content = content.replace(/border-offwhite\/20/g, 'border-[#F9F6F0]/20');
  content = content.replace(/border-offwhite\/30/g, 'border-[#F9F6F0]/30');
  content = content.replace(/border-offwhite/g, 'border-[#F9F6F0]/20');
  
  // Buttons that were bg-offwhite text-charcoal
  content = content.replace(/bg-offwhite/g, 'bg-[#C97B63]'); // Make buttons terracotta
  
  fs.writeFileSync(file, content);
});

console.log("Colors updated.");
