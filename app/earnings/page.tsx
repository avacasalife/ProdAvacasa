'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Earnings = () => {
  const router=useRouter();
  const [nights, setNights] = useState(1);
  const pricePerNight = 4518;
  const totalEarnings = nights * pricePerNight;

  return (
    <div className="max-w-[1200px] mx-auto p-8">
      <header className="flex justify-between items-center py-4 border-b border-gray-200">
        <div className="text-red-500 font-bold text-3xl tracking-tight">Avacasa</div>
        <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300 shadow-md" onClick={()=>router.push("/signup")}>
          Setup
        </button>
      </header>

      
      <div className="grid grid-cols-2 gap-12 mt-12">
        
        <div>
          <h1 className="text-red-500 text-5xl font-extrabold leading-tight">
            Avacasa it.
          </h1>
          <p className="text-xl mt-4 text-gray-700">You could earn</p>
          <h2 className="text-6xl font-bold mt-2 text-gray-900">
            ₹{totalEarnings.toLocaleString()}
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            {nights > 1 ? (
              <a href="#" className="text-blue-500 underline hover:text-blue-700 transition">
                {nights} Nights
              </a>
            ) : (
              `${nights} Night`
            )}
            {' '}at an estimated ₹{pricePerNight.toLocaleString()} a night
          </p>

          
          <div className="mt-8">
            <input
              type="range"
              min="1"
              max="30"
              value={nights}
              onChange={(e) => setNights(Number(e.target.value))}
              className="w-full h-2 rounded-full bg-gray-300 accent-red-500"
            />
          </div>

         
          <p className="mt-8 text-gray-500 text-sm hover:underline cursor-pointer">
            Learn how we estimate your earnings
          </p>

         
          <div className="flex items-center border border-gray-300 px-4 py-3 rounded-lg mt-8 shadow-sm bg-gray-50">
            <div className="flex items-center gap-2">
              <span className="text-gray-800 font-medium">New Delhi</span>
            </div>
            <span className="ml-auto text-gray-500">Entire place · 2 bedrooms</span>
          </div>
        </div>

       
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8393747391!2d77.0688991801981!3d28.527280343676853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d815f3ef2cd%3A0x4bb4066c1617e8c5!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1614177282321!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Earnings;