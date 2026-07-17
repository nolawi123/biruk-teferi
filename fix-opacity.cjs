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
  
  // Make offwhite text fully opaque or very close to it for better contrast on terracotta
  content = content.replace(/text-offwhite\/60/g, 'text-offwhite');
  content = content.replace(/text-offwhite\/70/g, 'text-offwhite/90');
  content = content.replace(/text-offwhite\/80/g, 'text-offwhite/90');
  
  // Also fix Charcoal text opacity if any
  content = content.replace(/text-charcoal\/80/g, 'text-charcoal');
  content = content.replace(/text-charcoal\/60/g, 'text-charcoal/90');

  // Let's also make sure Gallery cards use charcoal instead of stone-900
  content = content.replace(/bg-stone-900/g, 'bg-charcoal');
  
  // Make the hero background gradient use charcoal instead of just terracotta to add depth and not just be "one color"
  content = content.replace(/bg-terracotta\/70/g, 'bg-charcoal/60');
  content = content.replace(/from-terracotta/g, 'from-charcoal');

  fs.writeFileSync(file, content);
});

console.log("Opacities fixed.");
