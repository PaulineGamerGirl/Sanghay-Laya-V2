export interface ThriftSpot {
  id: string;
  name: string;
  coordinates: [number, number]; // [lat, lng]
  station: string;
  walkTime: string;
  price: string;
  target: string;
  directions: string;
  badge: string;
  imageUrl: string;
}

export const thriftSpots: ThriftSpot[] = [
  {
    id: '1',
    name: 'Taft Ave Market',
    coordinates: [14.5764, 120.9882],
    station: 'LRT-1 Pedro Gil Station',
    walkTime: '3 mins',
    price: '₱',
    target: 'Streetwear, Basics',
    directions: '"Exit towards the PCU side of Taft. Multiple small stalls are located right beside the station stairs and along Pedro Gil street."',
    badge: 'BUDGET FINDS',
    imageUrl: 'https://images.unsplash.com/photo-1528991435120-e73e05a58897?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Makati Cinema Square',
    coordinates: [14.5536, 121.0131],
    station: 'MRT-3 Magallanes / PNR Pasay Road',
    walkTime: '10 mins',
    price: '₱₱',
    target: 'Vintage, Dresses, Accessories',
    directions: '"Head to the basement and upper floors. It is a maze of vintage boutiques and ukay-ukay stalls side-by-side with antique shops."',
    badge: 'CURATED VINTAGE',
    imageUrl: 'https://images.unsplash.com/photo-1603251641048-52fb376378fb?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Anonas Mall Ukay Hub',
    coordinates: [14.6281, 121.0645],
    station: 'LRT-2 Anonas Station',
    walkTime: '1 min',
    price: '₱ - ₱₱',
    target: 'Everything, Y2K, Branded',
    directions: '"Literally connected to the LRT-2 station via a footbridge. It has four floors of pure ukay-ukay, ranging from 10-peso bins to curated branded jackets."',
    badge: 'THRIFT MECCA',
    imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Cubao Ukay Clusters',
    coordinates: [14.6196, 121.0543],
    station: 'MRT-3 / LRT-2 Cubao',
    walkTime: '5 mins',
    price: '₱',
    target: 'Jackets, Denim, Indie',
    directions: '"Walk through Farmers Plaza towards Ali Mall. There are multiple massive ukay-ukay warehouses scattered around the Araneta Center perimeter."',
    badge: 'ECLECTIC FINDS',
    imageUrl: 'https://images.unsplash.com/photo-1489987707023-afc824781634?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Boni Ave Stalls',
    coordinates: [14.5746, 121.0483],
    station: 'MRT-3 Boni Station',
    walkTime: '3 mins',
    price: '₱',
    target: 'Office wear, Flowy Skirts',
    directions: '"Just along Boni Ave right after you go down the MRT station. It gets overlooked, but it is a fantastic hidden spot for skirts and casual tops."',
    badge: 'HIDDEN GEM',
    imageUrl: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'Carriedo Bargain Bins',
    coordinates: [14.5985, 120.9814],
    station: 'LRT-1 Carriedo Station',
    walkTime: '2 mins',
    price: '₱',
    target: 'Rock bottom prices, Shoes',
    directions: '"Right outside the LRT-1 station. It gets incredibly crowded and chaotic, but the prices are the lowest in the city. Keep an eye on your belongings!"',
    badge: 'DIRT CHEAP',
    imageUrl: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=400&auto=format&fit=crop'
  }
];
