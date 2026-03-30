export interface TransmascSource {
  id: string;
  name: string;
  category: string;
  description: string;
  link: string;
}

export const transmascSourcesData: TransmascSource[] = [
  { id: '1', name: 'Victoria by LoveYourself', category: 'Endocrinology & HRT', description: 'The pioneer trans-focused community center in the Philippines. They offer targeted gender-affirming care, safe Testosterone (HRT) consultations, and routine bloodwork monitoring in a non-judgmental environment.', link: 'https://loveyourself.ph/victoria-by-loveyourself/' },
  { id: '2', name: 'Renée Yoxon - Voice Masculinization', category: 'Voice Training', description: 'A renowned trans voice teacher offering a dedicated curriculum designed to help transmasculine individuals safely lower their speaking pitch, develop chest resonance, and navigate the testosterone voice drop without straining vocal cords.', link: 'https://www.reneeyoxon.com/' },
  { id: '3', name: 'Ateneo Bulatao Center', category: 'Mental Health', description: 'A highly verified, university-backed institution offering explicit LGBTQIA+ affirmative psychological counseling. An excellent, safe space for processing gender dysphoria and medical transition anxiety.', link: 'https://ateneobulataocenter.com/' },
  { id: '4', name: 'WPATH Provider Directory', category: 'General Care', description: 'The official global directory of the World Professional Association for Transgender Health. Search for certified, vetted endocrinologists, therapists, and gender-affirming surgeons locally and internationally.', link: 'https://www.wpath.org/provider/search' },
  { id: '5', name: 'LoveYourself Flourish', category: 'Mental Health', description: 'The dedicated mental health arm of the LoveYourself network, offering highly accessible, affirmative psychiatric and counseling services specifically tailored for the local LGBTQIA+ community.', link: 'https://loveyourself.ph/flourish/' }
];
