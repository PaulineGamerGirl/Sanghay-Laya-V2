export interface Location {
  id: string;
  locationName: string;
  coordinates: [number, number];
  description: string;
  type: 'thrift' | 'clinic';
}

export const styleData: Location[] = [
  {
    id: '1',
    locationName: 'Placeholder Thrift Shop',
    coordinates: [14.5995, 120.9842],
    description: 'Placeholder description for thrift shop.',
    type: 'thrift',
  },
  {
    id: '2',
    locationName: 'Placeholder Clinic',
    coordinates: [14.6091, 121.0223],
    description: 'Placeholder description for clinic.',
    type: 'clinic',
  },
];
