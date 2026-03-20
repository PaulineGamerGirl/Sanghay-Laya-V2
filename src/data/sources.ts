export interface Source {
  id: string;
  name: string;
  isSisterVerified: boolean;
  link: string;
  description: string;
}

export const sourcesData: Source[] = [
  {
    id: '1',
    name: 'Placeholder Source 1',
    isSisterVerified: true,
    link: 'https://example.com/source-1',
    description: 'Placeholder description for source 1.',
  },
];
