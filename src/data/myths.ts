export interface Myth {
  id: string;
  title: string;
  description: string;
  dangerLevel: 'high' | 'medium' | 'low';
}

export const mythsData: Myth[] = [
  {
    id: '1',
    title: 'Placeholder Myth 1',
    description: 'Placeholder description for myth 1.',
    dangerLevel: 'high',
  },
  {
    id: '2',
    title: 'Placeholder Myth 2',
    description: 'Placeholder description for myth 2.',
    dangerLevel: 'medium',
  },
];
