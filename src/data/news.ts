export interface NewsItem {
  id: string;
  headline: string;
  date: string;
  content: string;
}

export const newsData: NewsItem[] = [
  {
    id: '1',
    headline: 'Placeholder Headline 1',
    date: '2026-03-18',
    content: 'Placeholder news content 1.',
  },
];
