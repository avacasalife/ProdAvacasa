"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"; 
import { UserCircleIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  return (
    <nav className="flex items-center justify-between  px-6 py-4 font-semibold shadow-md bg-opacity-50 text-black relative z-50">
      <div className="flex items-center space-x-4">

        <div className="text-xl font-bold cursor-pointer text-white" onClick={() => router.push("/")}>
          AVACASA
        </div>
      </div>

      <div className="hidden lg:flex space-x-6">

      </div>
      <button
      onClick={() => router.push('/login')}
      className="flex items-center gap-2 text-white hover:text-blue-500"
    >
      <UserCircleIcon className="h-8 w-8 text-white hover:text-blue-500 transition duration-300" />
    </button>

  
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-9/12 md:w-5/12 h-full text-black bg-white shadow-lg z-50 flex flex-col p-6">
         
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">AVACASA</div>
            <X className="w-6 h-6 cursor-pointer" onClick={() => setIsMenuOpen(false)} />
          </div>

        
          <div className="flex-grow mt-6  space-y-4">
    
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
