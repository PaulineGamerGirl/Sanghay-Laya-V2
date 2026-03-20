export interface SafetyTopic {
  id: string;
  title: string;
  emoji: string;
  isHighAlert?: boolean;
  dangerSnippet: string;
  truthSnippet: string;
  sourceName: string;
  sourceLink: string;
}

export const safetyData: SafetyTopic[] = [
  {
    id: '1',
    title: 'SILICONE PUMPING',
    emoji: '🥀',
    isHighAlert: true,
    dangerSnippet: 'Injectable silicone is permanent and can migrate throughout the body. It can cause chronic pain, severe infections, and permanent disfigurement. If silicone enters a blood vessel, it can travel to the lungs, heart, or brain, causing Silicone Embolism Syndrome (SES), which is frequently fatal.',
    truthSnippet: 'The FDA has never approved any injectable silicone for body contouring. There is absolutely no "medical grade" liquid silicone approved for large-scale injections.',
    sourceName: 'FDA Safety Communication',
    sourceLink: 'https://www.fda.gov/news-events/press-announcements/fda-warns-about-illegal-use-injectable-silicone-body-contouring-and-associated-health-risks'
  },
  {
    id: '2',
    title: 'SYNTHETIC ESTROGENS',
    emoji: '💊',
    isHighAlert: true,
    dangerSnippet: 'Historically, ethinyl estradiol [found in birth control like Diane-35] was used for feminization, but it has been linked to a 20-fold increase in cardiovascular mortality and venous thromboembolism (VTE).',
    truthSnippet: 'To mitigate life-threatening cardiovascular risks, synthetic estrogens must be avoided. Bioidentical 17β-estradiol is the evidence-based standard of care for feminizing hormone therapy.',
    sourceName: 'National Library of Medicine',
    sourceLink: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10548402/'
  },
  {
    id: '3',
    title: 'WAIST TRAINING',
    emoji: '⏳',
    isHighAlert: false,
    dangerSnippet: 'Prolonged use of rigid, cheap, or poorly fitted waist trainers can push organs like the liver and kidneys out of their natural positions, restrict lung capacity, and weaken core muscles, leading to long-term skeletal and internal damage.',
    truthSnippet: 'Waist trainers do not permanently alter fat distribution. If you use shapewear, it must not cause pain, shortness of breath, or dizziness. Safe silhouette modification requires gradual, non-compressive methods.',
    sourceName: 'Healthline Medical Review',
    sourceLink: 'https://www.healthline.com/health/are-waist-trainers-dangerous'
  },
  {
    id: '4',
    title: 'SPIRONOLACTONE & POTASSIUM',
    emoji: '🥑',
    isHighAlert: true,
    dangerSnippet: 'Spironolactone is a potassium-sparing diuretic. Taking it can cause hyperkalemia (dangerously high potassium levels in the blood), which can lead to severe or life-threatening cardiac arrhythmias (irregular heart rhythms).',
    truthSnippet: 'If you are prescribed Spironolactone, you must have your blood potassium levels routinely monitored. You should strictly avoid potassium-based salt substitutes and be cautious with high-potassium diets.',
    sourceName: 'MedlinePlus (NIH)',
    sourceLink: 'https://medlineplus.gov/druginfo/meds/a682627.html'
  },
  {
    id: '5',
    title: 'PROSTATE SCREENING',
    emoji: '🩺',
    isHighAlert: false,
    dangerSnippet: 'There is a dangerous, widespread misconception that gender-affirming surgery (vaginoplasty) or long-term estrogen therapy entirely eliminates the prostate and the risk of prostate cancer.',
    truthSnippet: 'Transgender women retain their prostate gland even after gender-affirming genital surgery. You remain at risk for prostate cancer and must undergo standard prostate cancer screening based on your age and medical history.',
    sourceName: 'UCSF Guidelines for Transgender Care',
    sourceLink: 'https://transcare.ucsf.edu/guidelines/prostate-testicular-cancer'
  },
  {
    id: '6',
    title: 'BONE HEALTH',
    emoji: '🦴',
    isHighAlert: false,
    dangerSnippet: 'Prolonged periods of having neither testosterone nor estrogen in typical adult ranges (which often occurs if HRT is stopped after an orchiectomy) significantly increases the risk of rapid bone mineral density loss and early-onset osteoporosis.',
    truthSnippet: 'Maintaining adequate sex hormone levels, alongside sufficient calcium and vitamin D intake, is a critical requirement for preserving skeletal integrity and preventing bone fractures later in life.',
    sourceName: 'UCSF Guidelines for Transgender Care',
    sourceLink: 'https://transcare.ucsf.edu/guidelines/bone-health-and-osteoporosis'
  }
];
