"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import menuItems from "./menuItems";

const Navbar = () => {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false); 

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="text-xl font-bold cursor-pointer" onClick={() => router.push("/")}>
        avacasalife
      </div>

      <div className="flex space-x-6 relative">
        {isClient && 
          menuItems.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => item.subMenu && setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => item.path !== "#" && router.push(item.path)}
                className="hover:text-blue-500 flex items-center"
              >
                {item.name} {item.subMenu && <span className="ml-1">▼</span>}
              </button>

              {item.subMenu && openDropdown === item.name && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                  {item.subMenu.map((subItem) => (
                    <button
                      key={subItem.path}
                      onClick={() => router.push(subItem.path)}
                      className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                    >
                      {subItem.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        
        <button
          onClick={() => router.push("/signup")}
          className="flex items-center border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwG8iobF01TZFz9kenNV1ZOpF9KPioMBNzA&s"
            alt="User Icon"
            className="w-6 h-6 mr-2"
          />
          Log In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
