'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Map, Marker } from "pigeon-maps";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import PrimaryButton from "@/components/Primarybutton";
import { Search } from "lucide-react";

interface Hotel {
  id: number;
  name: string;
  vicinity: string;
  lat: number;
  lng: number;
  img: string;
  price: number;
}

const defaultCenter: [number, number] = [28.6139, 77.209];

const HotelFinder = () => {
  const { city } = useParams();
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [searchCity, setSearchCity] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (city) {
      fetchHotels(city as string);
    }
  }, [city]);

  const fetchHotels = async (searchTerm: string) => {
    const sampleHotels: Hotel[] = [
      { id: 1, name: "Hotel A", vicinity: "City Center", lat: 28.6239, lng: 77.219, img: "https://a0.muscache.com/im/pictures/d4a0f971-e2f6-438e-bde1-e4f84b42bf70.jpg?im_w=720", price: Math.floor(Math.random() * 200) + 50 },
      { id: 2, name: "Hotel B", vicinity: "Near Park", lat: 28.6039, lng: 77.199, img: "https://www.compass.com/m/0/5e7ebc7f-d160-4984-8050-a6b1e2e12656/1334x1000.jpg", price: Math.floor(Math.random() * 200) + 50 },
      { id: 3, name: "Hotel C", vicinity: "Business District", lat: 28.6339, lng: 77.229, img: "https://www.compass.com/m/0/52263bb7-a7d2-478c-8d91-4fcf8a4d722b/1500x996.jpg", price: Math.floor(Math.random() * 200) + 50 },
      { id: 4, name: "Hotel D", vicinity: "Suburban Area", lat: 28.6189, lng: 77.194, img: "https://a0.muscache.com/im/pictures/miso/Hosting-691702060121553771/original/ca2bee1a-ab7c-4f87-ba08-07bbb5f9c496.jpeg?im_w=720", price: Math.floor(Math.random() * 200) + 50 },
    ];
    setHotels(sampleHotels);
    setMapCenter([sampleHotels[0].lat, sampleHotels[0].lng]);
  };

  // Function to update map center when typing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchCity(value);

    if (value.trim()) {
      // Pick a random hotel location from sample data
      const randomHotel = hotels[Math.floor(Math.random() * hotels.length)];
      if (randomHotel) {
        setMapCenter([randomHotel.lat, randomHotel.lng]);
      }
    }
  };

  const handleSearch = () => {
    if (searchCity.trim()) {
      router.push(`/booking/${searchCity}`);
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Navbar / Header */}
      <header className="flex flex-col md:flex-row justify-center md:justify-between items-center py-4 px-8 border-b gap-4 md:gap-2">
  {/* Logo */}
  <div 
    className="text-red-500 font-bold text-2xl cursor-pointer md:mb-0 mb-2" 
    onClick={() => router.push('/')}
  >
    Avacasa
  </div>

  {/* Search Bar */}
  <div className="w-full flex justify-center">
    <div className="flex items-center border rounded-full px-4 py-2 shadow-md w-full max-w-[500px]">
      <input
        type="text"
        placeholder="Anywhere"
        className="px-2 text-gray-700 focus:outline-none w-full"
        value={searchCity}
        onChange={handleInputChange}
      />
      <div className="border-l border-gray-300 mx-2 h-5"></div>
      <input
        type="text"
        placeholder="Any week"
        className="px-2 text-gray-700 focus:outline-none w-full"
      />
      <div className="border-l border-gray-300 mx-2 h-5"></div>
      <input
        type="text"
        placeholder="Add guests"
        className="px-2 text-gray-700 focus:outline-none w-full"
      />
      <PrimaryButton text="Search" onClick={handleSearch} />
    </div>
  </div>

  {/* Right Navigation Items */}
  <div className="hidden md:flex items-center gap-4 relative">
    <div
      className="text-gray-600 cursor-pointer hover:text-gray-800"
      onClick={() => router.push('/earnings')}
    >
      Avacasa your home
    </div>
    <GlobeAltIcon className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-800" />
  </div>
</header>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-5 mt-5">
        <div className="w-full lg:w-3/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="relative cursor-pointer transition-transform duration-300 hover:scale-105"
                onMouseEnter={() => setMapCenter([hotel.lat, hotel.lng])}
              >
                <Image 
                  src={hotel.img} 
                  alt={hotel.name} 
                  width={450} 
                  height={50} 
                  className="object-cover rounded-lg" 
                />
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                  <p className="text-sm font-semibold">{hotel.name} - ₹{hotel.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <Map center={mapCenter} zoom={12} height={450}>
            {hotels.map((hotel) => (
              <Marker key={hotel.id} width={30} anchor={[hotel.lat, hotel.lng]}>
                <div className="bg-white text-black text-xs font-semibold px-1 rounded-md">₹{hotel.price}</div>
              </Marker>
            ))}
          </Map>
        </div>
      </div>
    </div>
  );
};

export default HotelFinder;