'use client';

import { useState } from 'react';
import { Search, Globe, UserCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const PropertyDetail = () => {
  const[city,setCity]=useState("");
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [nights, setNights] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const router = useRouter();

  const pricePerNight = 5143;
  const cleaningFee = 200;
  const serviceFee = 3659;
  const totalCost = nights * pricePerNight + cleaningFee + serviceFee;

  const handleSearch = () => {
    if (city.trim()) {
      router.push(`/booking/${city}`);
    }
  };

  const images = [
    'https://a0.muscache.com/im/pictures/hosting/Hosting-1158357014875094502/original/a0638242-53de-462a-b6d9-bac98863f931.jpeg?im_w=960',
    'https://a0.muscache.com/im/pictures/hosting/Hosting-1158357014875094502/original/5a9b17fc-0fe1-474f-9be3-fed3c4913d13.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/hosting/Hosting-1158357014875094502/original/f552426b-52af-40ba-bb08-214eeb14937a.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/hosting/Hosting-1158357014875094502/original/1b375715-f77e-47f0-bd4f-b5bfbc73db53.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/hosting/Hosting-1158357014875094502/original/719ce935-cb8d-4638-b107-ca0625de1323.jpeg?im_w=720'
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const calculateNights = () => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24));
      setNights(diff);
    }
  };

  const handleReserve = () => {
    if (!checkIn || !checkOut) {
      alert('Please select check-in and check-out dates');
      return;
    }
    alert(`Reservation confirmed! Total: ₹${totalCost.toLocaleString()}`);
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <header className="flex justify-between items-center py-4 px-8 border-b">
        <div className="text-red-500 font-bold text-2xl">Avacasa</div>

        <div className="flex-1 flex justify-center">
          <div className="flex items-center border rounded-full px-4 py-2 shadow-md w-full max-w-[500px] ml-32">
            <input
              type="text"
              placeholder="Anywhere"
              className="px-2 text-gray-700 focus:outline-none w-full"
              onChange={(e)=>setCity(e.target.value)}
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
            <button className="ml-2 bg-red-500 p-2 rounded-full text-white"
            onClick={handleSearch}>
              <Search size={12} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 relative">
          <div
            className="text-gray-600 cursor-pointer hover:text-gray-800"
            onClick={() => router.push('/earnings')}
          >
            Avacasa your home
          </div>
          <Globe size={20} className="cursor-pointer text-gray-600 hover:text-gray-800" />
          <div
            className="flex items-center border border-gray-300 px-3 py-2 rounded-full gap-2 cursor-pointer hover:shadow-md"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <UserCircle size={20} className="text-gray-600" />
          </div>

          {showDropdown && (
            <div className="absolute top-12 right-0 bg-white shadow-md rounded-lg border border-gray-200 w-40">
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => router.push('/signup')}
              >
                Signup
              </div>
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => router.push('/login')}
              >
                Login
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="px-8 py-8">
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={selectedImage}
            alt="Main Image"
            width={700}
            height={400}
            className="rounded-lg object-cover w-full h-[400px]"
          />
          <div className="grid grid-cols-2 gap-4">
            {images.slice(1).map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Image ${index + 1}`}
                width={340}
                height={200}
                className={`rounded-lg object-cover w-full h-[190px] cursor-pointer ${
                  selectedImage === img ? 'border-2 border-red-500' : ''
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>
      </div>

    
      <div className="grid grid-cols-2 gap-12 px-8 py-8">
       
        <div>
          <div>
  <h2 className="text-2xl font-bold">Private room in tiny home in Korlai, India</h2>
  </div>
  <p className="text-gray-600 mb-8">
    ⭐ 4.96 · <span className="underline cursor-pointer">24 reviews</span>
  </p>


  <div className="flex items-center mt-4">
    <span className="mr-2">🏖️</span>
    <div>
      <p className="font-semibold">Outdoor entertainment</p>
      <p className="text-gray-500 text-sm">
        The pool, alfresco dining and BBQ area are great for summer trips.
      </p>
    </div>
  </div>


  <div className="flex items-center mt-8">
    <span className="mr-2">🔑</span>
    <div>
      <p className="font-semibold">Self check-in</p>
      <p className="text-gray-500 text-sm">
        Check yourself in with the lockbox.
      </p>
    </div>
  </div>

 
  <div className="flex items-center mt-8">
    <span className="mr-2">🗓️</span>
    <div>
      <p className="font-semibold">Free cancellation for 48 hours</p>
      <p className="text-gray-500 text-sm">
        Get a full refund if you change your mind.
      </p>
    </div>
  </div>

 
  <p className="text-gray-600 mt-8">
    You will love to have amazing hospitality and food at our beach view private pool room.
  </p>
</div>


    
        <div className="border border-gray-300 px-8 mr-12 ml-32 rounded-xl shadow-md">
          <p className="text-xl font-semibold">
            ₹<span className="line-through text-gray-400">7,000</span>{' '}
            <span className="text-black font-bold">₹{pricePerNight}</span> night
          </p>
          <div className="flex gap-4 mt-4">
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="border rounded-md p-2 w-full"
              onBlur={calculateNights}
            />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="border rounded-md p-2 w-full"
              onBlur={calculateNights}
            />
          </div>
          <button
            onClick={handleReserve}
            className="bg-pink-500 text-white w-full mt-4 py-2 rounded-md font-semibold"
          >
            Reserve
          </button>
          <div className="text-gray-500 mt-4">
            ₹{pricePerNight} x {nights} nights = ₹{(pricePerNight * nights).toLocaleString()}
            <div>Cleaning fee: ₹{cleaningFee}</div>
            <div>Service fee: ₹{serviceFee}</div>
            <div className="border-t mt-2 pt-2 font-bold">
              Total before taxes: ₹{totalCost.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
