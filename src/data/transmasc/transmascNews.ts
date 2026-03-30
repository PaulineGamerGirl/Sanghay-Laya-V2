export interface TransmascNewsLink {
  id: string;
  icon: string;
  title: string;
  description: string;
  link: string;
}

export const transmascNewsData: TransmascNewsLink[] = [
  { 
    id: '1', 
    icon: '🇵🇭', 
    title: 'Local PH Updates', 
    description: 'Live Google News feed for transmasculine, transgender, and LGBTQ+ milestones, policies, and events in the Philippines.', 
    link: 'https://news.google.com/search?q=transgender+OR+LGBTQ+Philippines' 
  },
  { 
    id: '2', 
    icon: '🌎', 
    title: 'Global Transmasc News', 
    description: 'Live Google News feed tracking international transmasculine rights, medical breakthroughs, and global community updates.', 
    link: 'https://news.google.com/search?q=transgender+man+OR+transmasculine+OR+FTM' 
  },
  { 
    id: '3', 
    icon: '🏳️⚧️', 
    title: 'Outrage Magazine', 
    description: 'The only exclusively LGBTQ+ publication in the Philippines. Deep-dives, local features, and grassroots reporting.', 
    link: 'https://outragemag.com/' 
  },
  { 
    id: '4', 
    icon: '📰', 
    title: 'PinkNews Trans Hub', 
    description: 'One of the world\'s leading LGBTQ+ news networks. Comprehensive coverage of global trans news and culture.', 
    link: 'https://www.thepinknews.com/news/trans/' 
  }
];
