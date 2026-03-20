import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { thriftSpots, ThriftSpot } from '../data/style';

// Fix Leaflet's default icon issue with a custom emoji icon
const thriftIcon = L.divIcon({
  html: '<div style="font-size: 24px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));">🛍️</div>',
  className: 'custom-thrift-icon',
  iconSize: [30, 30],
  iconAnchor: [15, 15],
  popupAnchor: [0, -15],
});

export function ThriftMap() {
  const [activeSpot, setActiveSpot] = useState<ThriftSpot | null>(thriftSpots[0]);

  // Ensure map renders correctly by triggering a resize event after mount
  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto text-left animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h3 className="font-heading italic text-xl text-espresso font-bold mb-6 flex items-center gap-2">
        <span>🪞</span> Metro Thrift Guide
      </h3>

      {/* Map Container */}
      <div className="h-[400px] w-full rounded-[2rem] overflow-hidden border-4 border-white shadow-md mb-8 relative z-0">
        <MapContainer 
          center={[14.5995, 120.9842]} 
          zoom={12} 
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {thriftSpots.map((spot) => (
            <Marker 
              key={spot.id} 
              position={spot.coordinates}
              icon={thriftIcon}
              eventHandlers={{
                click: () => setActiveSpot(spot),
              }}
            >
              <Popup>
                <div className="font-heading font-bold text-espresso">
                  {spot.name}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Detail Card */}
      {activeSpot && (
        <div className="bg-white rounded-[2rem] border border-pink/30 p-4 md:p-6 flex flex-col md:flex-row gap-6 shadow-sm animate-in fade-in zoom-in-95 duration-500">
          <div className="w-full md:w-64 h-48 shrink-0 overflow-hidden rounded-2xl">
            <img 
              src={activeSpot.imageUrl} 
              alt={activeSpot.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="flex-1 flex flex-col">
            <div className="flex items-start justify-between mb-2">
              <h2 className="font-heading font-bold text-2xl text-espresso">
                {activeSpot.name}
              </h2>
              <span className="bg-blue-50 text-slate-600 text-[10px] font-bold tracking-widest px-3 py-1 rounded-full ml-auto">
                {activeSpot.badge}
              </span>
            </div>
            
            <p className="text-sm text-espresso/70 mb-4 flex items-center gap-2">
              <span>🚇</span> {activeSpot.station}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="border border-gray-100 rounded-xl p-2 text-center flex flex-col items-center justify-center bg-cream/30">
                <span className="text-[8px] font-bold tracking-widest text-espresso/50 uppercase">Walk</span>
                <span className="text-xs font-bold text-espresso">{activeSpot.walkTime}</span>
              </div>
              <div className="border border-gray-100 rounded-xl p-2 text-center flex flex-col items-center justify-center bg-cream/30">
                <span className="text-[8px] font-bold tracking-widest text-espresso/50 uppercase">Price</span>
                <span className="text-xs font-bold text-espresso">{activeSpot.price}</span>
              </div>
              <div className="border border-gray-100 rounded-xl p-2 text-center flex flex-col items-center justify-center bg-cream/30">
                <span className="text-[8px] font-bold tracking-widest text-espresso/50 uppercase">Target</span>
                <span className="text-[10px] font-bold text-espresso leading-tight">{activeSpot.target}</span>
              </div>
            </div>

            {/* Directions Box */}
            <div className="bg-pink-50/50 rounded-xl p-4 border border-pink-100/50">
              <span className="text-pink font-bold tracking-widest text-[10px] block mb-1">DIRECTIONS</span>
              <p className="font-body italic text-espresso/80 text-sm leading-relaxed">
                {activeSpot.directions}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
