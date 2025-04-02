import Navbar from "@/components/Navbar"; 
import C1 from "@/components/C1";
import C2 from "@/components/C2";

export default function HomePage() {
  return (
    <>
      {/* Background Section */}
      <div
        className="-z-10 w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url(https://www.compass.com/ucfe-assets/homepage/homepage-v3.0.3/assets/hero_desktop2x_res.jpeg)",
        }}
      >         
        <Navbar /> 
        <div className="py-24 lg:py-48">
          <C1 />
        </div>
      </div>

      {/* Additional Section */}
      <div className="pt-20 px-20">
        <C2 />
      </div>
    </>
  );
}
