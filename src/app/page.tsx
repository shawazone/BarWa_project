// import ourPic from "../public/ourPic.svg";
// import Image from "next/image";

const HomePage = () => {
  return (
    <div className=" bg-center h-screen overflow-hidden" style={{ backgroundImage: "url(https://img.freepik.com/free-vector/pattern-about-shopping_1061-495.jpg?w=740&t=st=1685017395~exp=1685017995~hmac=ec4cc672dca2dac12770cca0c514635f15adf42cb61c9bfc594fb0a4bdcc43fb)" }}>
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center text-center bg-white">
        <h1 className="text-4xl font-bold text-black mt-4 mb-4">
          Welcome to Our Companyy
        </h1>
        <p className="text-lg text-gray-900 mb-8">
          We are a trusted provider of high-quality products to meet your needs.
        </p>
      </div>
    </div>
  </div>
  
  );
};

export default HomePage;
