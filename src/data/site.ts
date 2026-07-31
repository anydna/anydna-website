// ============================================================
// AnyDNA — single source of truth for site content.
// Edit prices, services, FAQs and company details here.
// ============================================================

export const site = {
  name: 'AnyDNA',
  legalName: 'AnyDNA Limited',
  tagline: 'Specialist Metabarcoding Services',
  email: 'contact@anydna.co.uk',
  url: 'https://www.anydna.co.uk',
  companyNo: '17043376',
  registeredOffice: '128 City Road, London, EC1V 2NX, UK',
  strapline:
    'Transforming environmental monitoring through transparent DNA innovation.',
  pricesValidUntil: '31 August 2026',
  turnaround: '8 weeks',
  extraKitPrice: 25,
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
];

// --- Home: transparent workflow ------------------------------------------
export const workflow = [
  {
    step: '01',
    title: 'Collect soil or water',
    body: 'Deploy our rapid, non-invasive field kits. Each includes a filter, 50 ml syringe, preservation buffer and sterile gloves.',
    icon: 'droplet',
  },
  {
    step: '02',
    title: 'Specialist processing',
    body: 'Send samples to our UK lab. We process everything with scientific precision and an absolute commitment to transparency.',
    icon: 'flask',
  },
  {
    step: '03',
    title: 'Clear results',
    body: 'Optimised, reproducible pipelines turn raw sequence into clear biodiversity data, delivered within 8 weeks.',
    icon: 'chart',
  },
];

// --- Home: proof points ---------------------------------------------------
export const proofPoints = [
  { value: 'UK', label: 'Specialist laboratory' },
  { value: '8 wks', label: 'Turnaround from receipt' },
  { value: 'Tree of life', label: 'Whole-community coverage' },
  { value: '100%', label: 'Reproducible pipelines' },
];

// --- Services -------------------------------------------------------------
export type Service = {
  id: string;
  name: string;
  icon: string;
  summary: string;
  detail: string;
  sample: string;
};

export const services: Service[] = [
  {
    id: 'fish',
    name: 'Fish Metabarcoding',
    icon: 'fish',
    summary:
      'Highly specific, targeted resolution of fish communities from a single environmental sample.',
    detail:
      'Purpose-built primers deliver maximum species-level resolution for fish, making this our sharpest tool for assessing aquatic ecosystem health.',
    sample: 'Water',
  },
  {
    id: 'vertebrates',
    name: 'Vertebrate Metabarcoding',
    icon: 'paw',
    summary:
      'Monitor elusive wildlife and identify diverse vertebrate communities across the landscape.',
    detail:
      'A broad assay spanning mammals, amphibians and fish. It detects fish too, but without the targeted species-level resolution of our dedicated Fish service.',
    sample: 'Water · Soil',
  },
  {
    id: 'invertebrates',
    name: 'Invertebrate Metabarcoding',
    icon: 'bug',
    summary:
      'Assess structural environmental health through macroinvertebrate and arthropod diversity.',
    detail:
      'Uncover macroinvertebrate diversity in waterways or terrestrial arthropod communities — a sensitive indicator of habitat condition.',
    sample: 'Water · Soil',
  },
  {
    id: 'fungal',
    name: 'Fungal Metabarcoding',
    icon: 'fungus',
    summary:
      'Sequence fungal communities to reveal functional diversity and soil health.',
    detail:
      'Understand the foundation of your ecosystem by profiling the fungal microbiome that underpins soil and water function.',
    sample: 'Soil · Water',
  },
  {
    id: 'bacterial',
    name: 'Bacterial Metabarcoding',
    icon: 'microbe',
    summary:
      'Profile bacterial microbiomes to reveal functional diversity and environmental health.',
    detail:
      'Sequence bacterial communities to reveal the functional diversity driving nutrient cycling and overall soil and water health.',
    sample: 'Soil · Water',
  },
  {
    id: 'multi-taxa',
    name: 'Multi-Taxa Suite',
    icon: 'helix',
    summary:
      'Sequence any two taxonomic communities from the exact same filter for a wider ecosystem view.',
    detail:
      'Run any two target assays — for example Fish + Invertebrates — using DNA extracted from a single filter, maximising insight per sample.',
    sample: 'Water · Soil',
  },
  {
    id: 'bioinformatics',
    name: 'Advanced Bioinformatics',
    icon: 'code',
    summary:
      'Turn raw genetic code into actionable intelligence with reproducible pipelines.',
    detail:
      'Optimised, reproducible processing pipelines tailored to each taxonomic group, so your results are clear, comparable and defensible.',
    sample: 'All assays',
  },
];

// --- Pricing --------------------------------------------------------------
export const priceTiers = ['1–5', '6–10', '10–15', '15+'] as const;

export type PriceRow = {
  service: string;
  note?: string;
  prices: [number, number, number, number]; // per sample, £, by tier
};

export const priceRows: PriceRow[] = [
  { service: 'Vertebrate Metabarcoding', prices: [275, 250, 225, 200] },
  { service: 'Fish Metabarcoding', prices: [275, 250, 225, 200] },
  { service: 'Invertebrate Metabarcoding', prices: [275, 250, 225, 200] },
  { service: 'Fungal Metabarcoding', prices: [255, 230, 215, 200] },
  { service: 'Bacterial Metabarcoding', prices: [255, 230, 215, 200] },
  {
    service: 'Multi-Taxa Suite',
    note: 'Any 2 assays from the same filter',
    prices: [380, 345, 322, 300],
  },
];

// --- FAQs -----------------------------------------------------------------
export const faqs = [
  {
    q: 'What comes in an eDNA sampling kit?',
    a: 'Everything you need for non-invasive field deployment: one filter, a 50 ml syringe, preservation buffer and sterile gloves. Additional kits can be purchased separately for £25.00 each.',
  },
  {
    q: 'What sample types do you accept?',
    a: 'We process both soil and water environmental samples.',
  },
  {
    q: 'What is the turnaround time for results?',
    a: 'You will receive your processed results within 8 weeks of your samples arriving at our UK laboratory.',
  },
  {
    q: 'What is the difference between your Fish and Vertebrate services?',
    a: 'Our Fish service uses primers specifically targeted to give maximum species-level resolution for fish. The Vertebrate service covers a much broader group across mammals, amphibians and fish, but with broader taxonomic resolution for fish specifically.',
  },
  {
    q: 'Can I test multiple taxonomic groups from a single sample?',
    a: 'Yes. With our Multi-Taxa Suite we can run any two target assays (e.g. Fish + Invertebrates) using DNA extracted from the exact same filter.',
  },
  {
    q: 'Does the price include a sampling kit?',
    a: 'Yes. Every per-sample price includes one eDNA sampling kit. Additional kits are £25.00 each.',
  },
];
