const fs = require('fs');

const dir = "C:\\Users\\macie\\Documents\\repos\\inoxie-frontend\\app";
const subdirs = fs.readdirSync(dir);
const langDir = subdirs.find(d => d.startsWith('[') && d.includes('lang'));

if (!langDir) {
  console.log("Could not find [lang] directory");
  process.exit(1);
}

const filePath = `${dir}\\${langDir}\\roi-ai-post\\RoiAiPostClient.tsx`;
console.log("File:", filePath);

let content = fs.readFileSync(filePath, 'utf8');
console.log("File size:", content.length, "bytes");

const changes = [
  // Fix SVG bars - proper x positions
  [
    `const bars = [
    { label: 'Obsługa klienta', value: 340, color: '#D97706' },
    { label: 'Przetwarzanie dokumentów', value: 280, color: '#D97706' },
    { label: 'Automatyzacja email', value: 260, color: '#D97706' },
    { label: 'Analiza danych', value: 220, color: '#D97706' },
  ];
  const maxValue = 400;
  const svgHeight = 200;
  const barWidth = 40;
  const gap = 24;
  
  const chartBars = bars.map((bar, i) => ({
    ...bar,
    height: (bar.value / maxValue) * (svgHeight - 40),
    y: svgHeight - 20,
    width: barWidth,
  }));`,
    `const bars = [
    { label: 'AI Agents', value: 340, color: '#D97706' },
    { label: 'Chatbots', value: 280, color: '#D97706' },
    { label: 'RAG', value: 260, color: '#D97706' },
    { label: 'Fine-tune', value: 220, color: '#D97706' },
  ];
  const maxValue = 400;
  const svgHeight = 200;
  const barWidth = 36;
  const gap = 20;
  const chartStartX = 16;
  
  const chartBars = bars.map((bar, i) => ({
    ...bar,
    height: (bar.value / maxValue) * (svgHeight - 40),
    y: svgHeight - 20,
    x: chartStartX + i * (barWidth + gap),
    width: barWidth,
  }));`
  ],
];

let patched = 0;
for (const [from, to] of changes) {
  if (content.includes(from)) {
    content = content.replace(from, to);
    patched++;
    console.log(`✓ Patched`);
  } else {
    console.log(`✗ Not found`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`Done: ${patched}/${changes.length}`);
