const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];
let content = fs.readFileSync(filePath, 'utf8');

const changes = [
  // Fix SVG bars - proper x positions
  [
    /const bars = \[\n\s+\{ label: 'Obsługa klienta', value: 340, color: '#D97706' \},\n\s+\{ label: 'Przetwarzanie dokumentów', value: 280, color: '#D97706' \},\n\s+\{ label: 'Automatyzacja email', value: 260, color: '#D97706' \},\n\s+\{ label: 'Analiza danych', value: 220, color: '#D97706' \},\n\s+\];\n\s+const maxValue = 400;\n\s+const svgHeight = 200;\n\s+const barWidth = 40;\n\s+const gap = 24;\n\s+\n\s+const chartBars = bars\.map\(\(bar, i\) => \(\{\n\s+\.\.\.bar,\n\s+height: \(bar\.value \/ maxValue\) \* \(svgHeight - 40\),\n\s+y: svgHeight - 20,\n\s+width: barWidth,\n\s+\}\)\);/,
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
  // Fix SVG rect - use bar.x and y directly
  [
    `{bar.y - bar.height}\n              width={bar.width}\n              fill={bar.color}\n              opacity={0.8}\n              className="mb-2"`,
    `y={bar.y - bar.height}\n              x={bar.x}\n              width={bar.width}\n              fill={bar.color}\n              opacity={0.8}\n              rx={4}\n              className="mb-2"`
  ],
  // Fix SVG text x position
  [
    'x={bar.width / 2}\n              textAnchor="middle"\n              className="fill-stone-500 text-xs"',
    'x={bar.x + bar.width / 2}\n              textAnchor="middle"\n              className="fill-stone-600 text-xs font-medium"'
  ],
  // Add isPL + bilingual content object after t declaration
  [
    "  const { lang } = props;\n  const t = props.t;",
    `  const { lang } = props;\n  const t = props.t;\n  const isPL = lang === 'pl';\n  \n  const content = isPL ? {\n    badge: 'ROI AI 2026',\n    title: 'Kalkulacja ROI AI w polskim biznesie: Analiza 47 firm i 12 branż',\n    excerpt: 'Ile naprawdę wynosi zwrot z inwestycji w sztuczną inteligencję w firmach MŚP?',\n    date: '2026-03-05',\n    readTime: '18 min czytania',\n    keyNumbers: [\n      'Średni zwrot z inwestycji AI: **220-340%** w 12 miesięcy',\n      'Najszybszy zwrot: **2.1 miesiąca** (firma usługowa, automatyzacja obsługi klienta)',\n      'Najwolniejszy zwrot: **11 miesięcy** (duża firma produkcyjna, pełna transformacja)',\n      'Automatyzacja redukuje koszty operacyjne średnio o **40%**',\n      '70% firm widzi pierwsze efekty w ciągu **30 dni** od startu projektu',\n    ],\n    authorName: 'Maciej Kamieniak',\n    authorBio: 'Założyciel InoxieSoft, ekspert AI z 4-letnim doświadczeniem we wdrażaniu automatyzacji AI dla firm MŚP w Polsce.',\n  } : {\n    badge: 'AI ROI 2026',\n    title: 'AI ROI Calculation for Polish SMBs: Analysis of 47 Companies and 12 Industries',\n    excerpt: 'What is the real return on investment in artificial intelligence for SMBs?',\n    date: '2026-03-05',\n    readTime: '18 min read',\n    keyNumbers: [\n      'Average AI ROI: **220-340%** within 12 months',\n      'Fastest ROI: **2.1 months** (service company, customer service automation)',\n      'Slowest ROI: **11 months** (large manufacturing company, full transformation)',\n      'Automation reduces operational costs by an average of **40%**',\n      '70% of companies see first results within **30 days** of project start',\n    ],\n    authorName: 'Maciej Kamieniak',\n    authorBio: 'Founder of InoxieSoft, AI expert with 4 years of experience implementing AI automation for SMBs in Poland.',\n  };`
  ],
  // Hero - use content object
  [
    `            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              {postData.badge}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              {postData.title}
            </h1>
            <p className="text-lg text-stone-600 mb-6 max-w-xl">
              {postData.excerpt}
            </p>`,
    `            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              {content.badge}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              {content.title}
            </h1>
            <p className="text-lg text-stone-600 mb-6 max-w-xl">
              {content.excerpt}
            </p>`
  ],
  // Meta
  [
    `            <div className="flex items-center gap-4 text-sm text-stone-500">
              <span>📅 {postData.date}</span>
              <span>⏱️ {postData.readingTime} czytania</span>
              <span>✍️ {postData.author}</span>
            </div>`,
    `            <div className="flex items-center gap-4 text-sm text-stone-500">
              <span>📅 {content.date}</span>
              <span>⏱️ {content.readTime}</span>
              <span>✍️ {content.authorName}</span>
            </div>`
  ],
  // keyNumbers
  [
    `              {postData.keyNumbers.map((item, i) => (`,
    `              {content.keyNumbers.map((item, i) => (`
  ],
  // Stats cards labels
  [
    `                <div className="text-sm text-stone-500">{stat.label}</div>
                <div className="text-xs text-stone-400">{stat.sublabel}</div>`,
    `                <div className="text-sm text-stone-500">{isPL ? stat.label : (stat.labelEn || stat.label)}</div>
                <div className="text-xs text-stone-400">{isPL ? stat.sublabel : (stat.sublabelEn || stat.sublabel)}</div>`
  ],
  // Author section
  [
    `                <h3 className="font-bold text-stone-900">{postData.author}</h3>
                <p className="text-sm text-stone-500">Expert at InoxieSoft</p>
                <p className="text-sm text-stone-600 mt-2">
                  Założyciel InoxieSoft, ekspert AI z 4-letnim doświadczeniem we wdrażaniu automatyzacji AI dla firm MŚP w Polsce.
                </p>`,
    `                <h3 className="font-bold text-stone-900">{content.authorName}</h3>
                <p className="text-sm text-stone-500">{isPL ? 'Ekspert w InoxieSoft' : 'Expert at InoxieSoft'}</p>
                <p className="text-sm text-stone-600 mt-2">{content.authorBio}</p>`
  ],
];

let patched = 0;
for (const [from, to] of changes) {
  if (typeof from === 'string') {
    if (content.includes(from)) {
      content = content.replace(from, to);
      patched++;
      console.log(`✓ Patched: ${from.substring(0, 50)}...`);
    } else {
      console.log(`✗ Not found: ${from.substring(0, 50)}...`);
    }
  } else {
    // regex
    const result = content.replace(from, to);
    if (result !== content) {
      content = result;
      patched++;
      console.log('✓ Patched (regex)');
    } else {
      console.log('✗ Not found (regex)');
    }
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nTotal patches: ${patched}/${changes.length}`);
