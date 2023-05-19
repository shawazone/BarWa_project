import ourPic from "../public/ourPic.svg";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="bg-cover bg-center h-screen overflow-hidden" style={{ backgroundImage: "url(https://cdn.pixabay.com/photo/2017/08/06/23/47/people-2597664_960_720.jpg)" }}>
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to Our Company
        </h1>
        <p className="text-lg text-white mb-8">
          We are a trusted provider of high-quality products to meet your needs.
        </p>
      </div>
    </div>
  </div>
  
  );
};

export default HomePage;
