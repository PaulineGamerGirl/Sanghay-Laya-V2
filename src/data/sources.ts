export interface Source {
  id: string;
  name: string;
  category: string;
  description: string;
  link: string;
  initial: string;
}

export const sourcesData: Source[] = [
  {
    id: '1',
    name: 'Victoria by LoveYourself',
    category: 'CLINICS',
    description: 'The premier community center in Metro Manila dedicated specifically to transgender health. Safe space consultations and free testing.',
    link: 'https://loveyourself.ph/',
    initial: 'V'
  },
  {
    id: '2',
    name: 'PSEDM Directory',
    category: 'ENDOCRINOLOGISTS',
    description: 'The official Philippine Society of Endocrinology. Use their directory to find board-certified endocrinologists for safe HRT prescription.',
    link: 'https://endo-society.org.ph/',
    initial: 'P'
  },
  {
    id: '3',
    name: 'Major Pharmacies',
    category: 'PHARMACIES',
    description: 'Purchase bioidentical hormones and anti-androgens exclusively from FDA-regulated pharmacies (Mercury Drug, Watsons) with a valid prescription.',
    link: 'https://www.mercurydrug.com/',
    initial: 'M'
  },
  {
    id: '4',
    name: 'DLSU Counseling and Psychological Services',
    category: 'MENTAL HEALTH',
    description: 'The official Facebook page of the Counseling and Psychological Services (CPS) of De La Salle University (DLSU) in Manila, formerly known as the Office of Counseling and Career Services (OCCS).',
    link: 'https://www.facebook.com/DLSUCPS/',
    initial: 'D'
  },
  {
    id: '5',
    name: 'TransVoiceLessons',
    category: 'VOICE TRAINING',
    description: 'The gold standard for voice feminization, breaking down vocal modification using the actual physics of sound and vocal tract resonance.',
    link: 'https://www.youtube.com/c/TransVoiceLessons',
    initial: 'T'
  },
  {
    id: '6',
    name: 'WPATH SOC8',
    category: 'STANDARDS',
    description: 'The World Professional Association for Transgender Health. The ultimate, peer-reviewed medical protocol for trans health worldwide.',
    link: 'https://www.wpath.org/publications/soc',
    initial: 'W'
  }
];
