import Navbar from "@/components/ui/Navbar"; 

export default function HomePage() {
  return (
    <div
      className="-z-10 w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url(https://www.compass.com/ucfe-assets/homepage/homepage-v3.0.3/assets/hero_desktop2x_res.jpeg)",
      }}
    >         <Navbar /> 
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-white text-5xl font-bold mb-6">Find your place</h1>

        <div className="flex bg-white rounded-t-lg overflow-hidden shadow-lg">
          <button className="px-6 py-2 font-semibold border-b-2 border-black hover:bg-gray-100">Buy</button>
          <button className="px-6 py-2 font-semibold bg-blue-600 text-white hover:bg-gray-100">Rent</button>
          <button className="px-6 py-2 font-semibold bg-blue-600 text-white rounded-tr-lg hover:bg-gray-100">Sell</button>
        </div>

        <div className="flex items-center bg-white p-4 w-[500px] rounded-b-lg shadow-lg">
          <input
            type="text"
            placeholder="City, Neighborhood, Address, School, ZIP, Agent, MLS #"
            className="flex-1 p-2 text-gray-600 outline-none"
          />
          <button className="p-2 bg-blue-600 text-white rounded">🔍</button>
        </div>
      </div>
    </div>
  );
}