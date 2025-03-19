'use client';

import { useRouter } from 'next/navigation';

const C2 = () => {
  const router = useRouter();

  const properties = [
    {
      id: 1,
      img: "https://www.compass.com/m/0/68ba6f60-2914-46ff-9ccc-3277b9222ac8/1500x998.jpg",
      price: "$1,150,000",
      location: "6005 Mimosa Lane, Dallas, TX 75230",
      beds: 3,
      baths: 3,
      sqft: "2,061 Sq. Ft.",
    },
    {
      id: 2,
      img: "https://www.compass.com/m/0/5e7ebc7f-d160-4984-8050-a6b1e2e12656/1334x1000.jpg",
      price: "$3,495,000",
      location: "6 White Birch Lane, Barrington, RI 02806",
      beds: 5,
      baths: 6,
      sqft: "4,998 Sq. Ft.",
    },
    {
      id: 3,
      img: "https://www.compass.com/m/0/52263bb7-a7d2-478c-8d91-4fcf8a4d722b/1500x996.jpg",
      price: "$2,400,000",
      location: "2509 Montrose Court, Charlotte, NC 29207",
      beds: 5,
      baths: 6,
      sqft: "4,252 Sq. Ft.",
    },{
      id: 4,
      img: "https://www.compass.com/m/0/52263bb7-a7d2-478c-8d91-4fcf8a4d722b/1500x996.jpg",
      price: "$2,400,000",
      location: "2509 Montrose Court, Charlotte, NC 29207",
      beds: 5,
      baths: 6,
      sqft: "4,252 Sq. Ft.",
    },{
      id: 5,
      img: "https://a0.muscache.com/im/pictures/69a784f6-e671-4eb8-b56f-2f85ad42af52.jpg?im_w=720",
      price: "$2,400,000",
      location: "2509 Montrose Court, Charlotte, NC 29207",
      beds: 5,
      baths: 6,
      sqft: "4,252 Sq. Ft.",
    },{
      id: 6,
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-622297393961405447/original/626c1506-f5dc-47f3-a4c0-7f4e3defe08e.jpeg?im_w=720",
      price: "$2,400,000",
      location: "2509 Montrose Court, Charlotte, NC 29207",
      beds: 5,
      baths: 6,
      sqft: "4,252 Sq. Ft.",
    }
  ];

  const handleCardClick = (id: number) => {
    router.push(`/property/${id}`);
  };

  return (
    <>
      <p className="font-semibold text-2xl md:text-5xl text-center md:mb-4">
        Compass Exclusives
      </p>
      <p className="text-center text-lg text-gray-600">
        Be the first to browse exclusive listings before they hit the market
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="relative bg-white rounded-lg shadow-md overflow-hidden hover:border border-blue-500 cursor-pointer"
            onClick={() => handleCardClick(property.id)}
          >
            <img
              src={property.img}
              alt={`Listing ${property.id}`}
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
    </>
  );
};

export default C2;
