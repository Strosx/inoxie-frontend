import os
import re

# Find the [lang] directory
app_dir = r'C:\Users\macie\Documents\repos\inoxie-frontend\app'
lang_dir = None
for d in os.listdir(app_dir):
    if d.startswith('[') and 'lang' in d:
        lang_dir = d
        break

if not lang_dir:
    print("Could not find [lang] directory")
    exit(1)

file_path = os.path.join(app_dir, lang_dir, 'roi-ai-post', 'RoiAiPostClient.tsx')
print(f"File: {file_path}")
print(f"Exists: {os.path.exists(file_path)}")

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

original = content
patched = 0

# Fix 1: SVG bars - proper x positions
old_bars = '''const bars = [
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
  }));'''

new_bars = '''const bars = [
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
  }));'''

if old_bars in content:
    content = content.replace(old_bars, new_bars)
    patched += 1
    print("✓ Fixed SVG bars")
else:
    print("✗ SVG bars pattern not found")

# Fix 2: SVG rect - use bar.x and y
old_rect = """              {bar.y - bar.height}
              width={bar.width}
              fill={bar.color}
              opacity={0.8}
              className="mb-2"
            />
            <text
              x={bar.width / 2}"""

new_rect = """              y={bar.y - bar.height}
              x={bar.x}
              width={bar.width}
              fill={bar.color}
              opacity={0.8}
              rx={4}
              className="mb-2"
            />
            <text
              x={bar.x + bar.width / 2}"""

if old_rect in content:
    content = content.replace(old_rect, new_rect)
    patched += 1
    print("✓ Fixed SVG rect positions")
else:
    print("✗ SVG rect pattern not found")

# Fix 3: SVG text class
old_text_class = 'className="fill-stone-500 text-xs"'
new_text_class = 'className="fill-stone-600 text-xs font-medium"'
if old_text_class in content:
    content = content.replace(old_text_class, new_text_class)
    patched += 1
    print("✓ Fixed SVG text class")

# Fix 4: Add isPL + bilingual content
old_const = "  const { lang } = props;\n  const t = props.t;"
new_const = """  const { lang } = props;\n  const t = props.t;\n  const isPL = lang === 'pl';\n  \n  const content = isPL ? {\n    badge: 'ROI AI 2026',\n    title: 'Kalkulacja ROI AI w polskim biznesie: Analiza 47 firm i 12 branż',\n    excerpt: 'Ile naprawdę wynosi zwrot z inwestycji w sztuczną inteligencję w firmach MŚP?',\n    date: '2026-03-05',\n    readTime: '18 min czytania',\n    keyNumbers: [\n      'Średni zwrot z inwestycji AI: **220-340%** w 12 miesięcy',\n      'Najszybszy zwrot: **2.1 miesiąca** (firma usługowa, automatyzacja obsługi klienta)',\n      'Najwolniejszy zwrot: **11 miesięcy** (duża firma produkcyjna, pełna transformacja)',\n      'Automatyzacja redukuje koszty operacyjne średnio o **40%**',\n      '70% firm widzi pierwsze efekty w ciągu **30 dni** od startu projektu',\n    ],\n    authorName: 'Maciej Kamieniak',\n    authorBio: 'Założyciel InoxieSoft, ekspert AI z 4-letnim doświadczeniem we wdrażaniu automatyzacji AI dla firm MŚP w Polsce.',\n  } : {\n    badge: 'AI ROI 2026',\n    title: 'AI ROI Calculation for Polish SMBs: Analysis of 47 Companies and 12 Industries',\n    excerpt: 'What is the real return on investment in artificial intelligence for SMBs?',\n    date: '2026-03-05',\n    readTime: '18 min read',\n    keyNumbers: [\n      'Average AI ROI: **220-340%** within 12 months',\n      'Fastest ROI: **2.1 months** (service company, customer service automation)',\n      'Slowest ROI: **11 months** (large manufacturing company, full transformation)',\n      'Automation reduces operational costs by an average of **40%**',\n      '70% of companies see first results within **30 days** of project start',\n    ],\n    authorName: 'Maciej Kamieniak',\n    authorBio: 'Founder of InoxieSoft, AI expert with 4 years of experience implementing AI automation for SMBs in Poland.',\n  };"""

if old_const in content:
    content = content.replace(old_const, new_const)
    patched += 1
    print("✓ Added bilingual content object + isPL")
else:
    print("✗ const pattern not found")

# Fix 5: Hero - use content object
old_hero = """            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              {postData.badge}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              {postData.title}
            </h1>
            <p className="text-lg text-stone-600 mb-6 max-w-xl">
              {postData.excerpt}
            </p>"""

new_hero = """            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              {content.badge}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              {content.title}
            </h1>
            <p className="text-lg text-stone-600 mb-6 max-w-xl">
              {content.excerpt}
            </p>"""

if old_hero in content:
    content = content.replace(old_hero, new_hero)
    patched += 1
    print("✓ Fixed hero section")
else:
    print("✗ Hero pattern not found")

# Fix 6: Meta
old_meta = """            <div className="flex items-center gap-4 text-sm text-stone-500">
              <span>📅 {postData.date}</span>
              <span>⏱️ {postData.readingTime} czytania</span>
              <span>✍️ {postData.author}</span>
            </div>"""

new_meta = """            <div className="flex items-center gap-4 text-sm text-stone-500">
              <span>📅 {content.date}</span>
              <span>⏱️ {content.readTime}</span>
              <span>✍️ {content.authorName}</span>
            </div>"""

if old_meta in content:
    content = content.replace(old_meta, new_meta)
    patched += 1
    print("✓ Fixed meta section")
else:
    print("✗ Meta pattern not found")

# Fix 7: keyNumbers
if 'postData.keyNumbers.map' in content:
    content = content.replace('postData.keyNumbers.map', 'content.keyNumbers.map')
    patched += 1
    print("✓ Fixed keyNumbers map")

# Fix 8: Stats cards - use isPL for labels
old_stats = """                <div className="text-sm text-stone-500">{stat.label}</div>
                <div className="text-xs text-stone-400">{stat.sublabel}</div>"""
new_stats = """                <div className="text-sm text-stone-500">{isPL ? stat.label : (stat.labelEn || stat.label)}</div>
                <div className="text-xs text-stone-400">{isPL ? stat.sublabel : (stat.sublabelEn || stat.sublabel)}</div>"""

if old_stats in content:
    content = content.replace(old_stats, new_stats)
    patched += 1
    print("✓ Fixed stats card labels")
else:
    print("✗ Stats pattern not found")

# Fix 9: Author section
old_author = """                <h3 className="font-bold text-stone-900">{postData.author}</h3>
                <p className="text-sm text-stone-500">Expert at InoxieSoft</p>
                <p className="text-sm text-stone-600 mt-2">
                  Założyciel InoxieSoft, ekspert AI z 4-letnim doświadczeniem we wdrażaniu automatyzacji AI dla firm MŚP w Polsce.
                </p>"""
new_author = """                <h3 className="font-bold text-stone-900">{content.authorName}</h3>
                <p className="text-sm text-stone-500">{isPL ? 'Ekspert w InoxieSoft' : 'Expert at InoxieSoft'}</p>
                <p className="text-sm text-stone-600 mt-2">{content.authorBio}</p>"""

if old_author in content:
    content = content.replace(old_author, new_author)
    patched += 1
    print("✓ Fixed author section")
else:
    print("✗ Author pattern not found")

# Fix 10: Stats - AnimatedCounter suffix issue
old_counter = '<AnimatedCounter target={parseFloat(stat.value)} suffix={stat.value.includes(\'%\') ? \'%\' : \'\'} />'
new_counter = '<AnimatedCounter target={parseFloat(stat.value)} />'
if old_counter in content:
    content = content.replace(old_counter, new_counter)
    patched += 1
    print("✓ Fixed AnimatedCounter")

# Fix 11: postData reference in case studies section
if 'postData.caseStudies' in content:
    content = content.replace('postData.caseStudies', 'postData.caseStudies')
    patched += 1
    print("✓ postData.caseStudies already in use")

if content != original:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"\n✓ Saved. Patched {patched}/11 fixes.")
else:
    print(f"\nNo changes made. patched={patched}")

print(f"File size: {len(content)} bytes")
