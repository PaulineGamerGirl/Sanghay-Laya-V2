export interface NewsPortal {
  id: string;
  title: string;
  emoji: string;
  description: string;
  url: string;
}

export const newsData: NewsPortal[] = [
  {
    id: '1',
    title: 'Local PH Updates',
    emoji: '🇵🇭',
    description: 'Live Google News feed for transgender and LGBTQ+ milestones, policies, and events in the Philippines.',
    url: 'https://www.google.com/search?q=Transgender+News+Philippines&tbm=nws'
  },
  {
    id: '2',
    title: 'Global News Feed',
    emoji: '🌍',
    description: 'Live Google News feed tracking international transgender rights, medical breakthroughs, and global community stories.',
    url: 'https://www.google.com/search?q=Transgender+Global+News&tbm=nws'
  },
  {
    id: '3',
    title: 'Outrage Magazine',
    emoji: '🏳️⚧️',
    description: 'The only exclusively LGBTQ+ publication in the Philippines. Deep-dives, local features, and grassroots reporting.',
    url: 'https://outragemag.com/category/transgender/'
  },
  {
    id: '4',
    title: 'PinkNews Trans Hub',
    emoji: '📰',
    description: 'One of the world\'s leading LGBTQ+ news networks. Comprehensive coverage of global trans news and pop culture.',
    url: 'https://www.thepinknews.com/category/trans/'
  }
];
