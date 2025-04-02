"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import PrimaryButton from "./Primarybutton";
import { Button } from "./ui/button";

const sampleCities = [
  "New York", "London", "Paris", "Tokyo", "Mumbai",
  "Delhi", "Sydney", "San Francisco", "Los Angeles",
  "Berlin", "Toronto", "Barcelona", "Singapore",
  "Dubai", "Hong Kong",
];

const C1 = () => {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (city.trim().length > 0) {
      setSuggestions(sampleCities.filter((c) => c.toLowerCase().includes(city.toLowerCase())));
    } else {
      setSuggestions([]);
    }
  }, [city]);

  const handleSearch = () => {
    if (city.trim()) {
      router.push(`/booking/${city}`);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-full px-4 text-center">
      <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
        Find your place
      </h1>

      <div className="relative w-full md:w-1/2">
        <div className="flex items-center bg-white p-4 rounded-t-lg shadow-lg">
          <input
            type="text"
            placeholder="Enter your destination"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="flex-1 p-2 text-gray-600 outline-none"
          />
  <PrimaryButton text="Search" onClick={handleSearch} />

        </div>

        {suggestions.length > 0 && (
          <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 shadow-lg rounded-b-lg z-50 max-h-60 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-3 text-gray-700 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setCity(suggestion);
                  setSuggestions([]);
                  handleSearch();
                }}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default C1;
