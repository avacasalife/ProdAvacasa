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
    <nav className="flex items-center justify-between px-6 py-4 font-semibold bg-opacity-50 text-black relative z-50 ">
      <div className="flex items-center space-x-4">
        <div className="text-xl font-bold cursor-pointer text-red-500" onClick={() => router.push("/")}>AVACASA</div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex space-x-10">
        <a href="/" className="text-white hover:text-blue-500">Home</a>
        <a href="/about" className="text-white hover:text-blue-500">About Us</a>
        <div className="relative">
          <button className="text-white hover:text-blue-500 flex items-center" onClick={() => toggleDropdown("services")}>
            Services {openDropdown === "services" ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
          </button>
          {openDropdown === "services" && (
            <div className="absolute mt-2 w-48 bg-white text-black shadow-lg rounded-lg p-2">
              <a href="/services/web-development" className="block px-4 py-2 hover:bg-gray-100">Web Development</a>
              <a href="/services/ui-ux" className="block px-4 py-2 hover:bg-gray-100">UI/UX Design</a>
              <a href="/services/marketing" className="block px-4 py-2 hover:bg-gray-100">Digital Marketing</a>
            </div>
          )}
        </div>
        <a href="/portfolio" className="text-white hover:text-blue-500">Portfolio</a>
        <a href="/testimonials" className="text-white hover:text-blue-500">Testimonials</a>
        <a href="/blog" className="text-white hover:text-blue-500">Blog</a>
        <a href="/contact" className="text-white hover:text-blue-500">Contact</a>
        <button className="text-white px-1 rounded-lg hover: transition relative top-[-0px]" onClick={() => router.push('/quote')}>Get a Quote</button>
      </div>

      {/* User Icon */}
      <button onClick={() => router.push('/login')} className="hidden lg:flex items-center gap-2 text-white hover:text-blue-500">
        <UserCircleIcon className="h-8 w-8 text-white hover:text-blue-500 transition duration-300" />
      </button>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(true)}>
        <Menu className="w-8 h-8" />
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-9/12 md:w-5/12 h-full text-black bg-white shadow-lg z-50 flex flex-col p-6">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">AVACASA</div>
            <X className="w-6 h-6 cursor-pointer" onClick={() => setIsMenuOpen(false)} />
          </div>

          <div className="flex-grow mt-6 space-y-4">
            <a href="/" className="block text-lg text-black hover:text-blue-500">Home</a>
            <a href="/about" className="block text-lg text-black hover:text-blue-500">About Us</a>
            <button className="block text-lg text-black hover:text-blue-500 flex items-center" onClick={() => toggleDropdown("services")}>
              Services {openDropdown === "services" ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
            </button>
            {openDropdown === "services" && (
              <div className="ml-4 space-y-2">
                <a href="/services/web-development" className="block text-black hover:text-blue-500">Web Development</a>
                <a href="/services/ui-ux" className="block text-black hover:text-blue-500">UI/UX Design</a>
                <a href="/services/marketing" className="block text-black hover:text-blue-500">Digital Marketing</a>
              </div>
            )}
            <a href="/portfolio" className="block text-lg text-black hover:text-blue-500">Portfolio</a>
            <a href="/testimonials" className="block text-lg text-black hover:text-blue-500">Testimonials</a>
            <a href="/blog" className="block text-lg text-black hover:text-blue-500">Blog</a>
            <a href="/contact" className="block text-lg text-black hover:text-blue-500">Contact</a>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition mt-4" onClick={() => router.push('/quote')}>Get a Quote</button>
            <button className="w-full text-black border border-gray-400 py-2 rounded-lg hover:bg-gray-200 transition" onClick={() => router.push('/login')}>Login</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;