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

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
  
  <p className="font-bold text-5xl text-center">Compass Exclusives</p>
  <p className="text-center text-lg text-gray-600">
    Be the first to browse exclusive listings before they hit the market
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
  {[
    {
      img: "https://www.compass.com/m/0/68ba6f60-2914-46ff-9ccc-3277b9222ac8/1500x998.jpg",
      price: "$1,150,000",
      location: "6005 Mimosa Lane, Dallas, TX 75230",
      beds: 3,
      baths: 3,
      sqft: "2,061 Sq. Ft.",
    },
    {
      img: "https://www.compass.com/m/0/5e7ebc7f-d160-4984-8050-a6b1e2e12656/1334x1000.jpg",
      price: "$3,495,000",
      location: "6 White Birch Lane, Barrington, RI 02806",
      beds: 5,
      baths: 6,
      sqft: "4,998 Sq. Ft.",
    },
    {
      img: "https://www.compass.com/m/0/52263bb7-a7d2-478c-8d91-4fcf8a4d722b/1500x996.jpg",
      price: "$2,400,000",
      location: "2509 Montrose Court, Charlotte, NC 29207",
      beds: 5,
      baths: 6,
      sqft: "4,252 Sq. Ft.",
    },
    {
      img: "https://www.compass.com/m/0/37b0a3d2-db08-4c2a-9d47-b85e1193c1e7/1500x1000.jpg",
      price: "$1,095,000",
      location: "117 A P Newcomb Road, Tappan, NY 10983",
      beds: 4,
      baths: 3,
      sqft: "2,436 Sq. Ft.",
    },
    {
      img: "https://www.compass.com/m/0/1e974308-4e6a-49f5-9d6a-80176bb0b573/1336x1000.jpg",
      price: "$1,150,000",
      location: "52 Cottage Way, Unit 5, Jacksonville Beach, FL 32261",
      beds: 3,
      baths: 3,
      sqft: "1,444 Sq. Ft.",
    },
  ].map((property, index) => (
    <div
      key={index}
      className="relative bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      <img
        src={property.img}
        alt={`Listing ${index + 1}`}
        className="w-full h-[250px] object-cover"
      />
      <span className="absolute top-2 left-2 bg-black text-white text-sm font-semibold px-3 py-1 rounded">
        COMPASS COMING SOON
      </span>

      <div className="p-4">
        <p className="text-lg font-bold">{property.price}</p>
        <p className="text-sm text-gray-600">{property.location}</p>
        <div className="flex justify-between text-gray-500 text-sm mt-2">
          <p>{property.beds} Beds</p>
          <p>{property.baths} Baths</p>
          <p>{property.sqft}</p>
        </div>
      </div>
    </div>
  ))}
</div>
</div>


    </div>
  );
}