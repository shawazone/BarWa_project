import LoadingPage from '../loadig'

export const metadata = {
  title: "products",
};

const productPage = async () => {
  return (
    <div>
   <h1>products</h1>
   <input type="search" className="border border-black" />
   <div className="border rounded-lg p-4 w-64 h-64">
      <h3 className="text-xl font-bold">title</h3>
      <p className="text-gray-600">description</p>
      <p className="mt-2">$price</p>
      <div className="mt-4">
      <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded mb-2 w-full">
          Add to Cart
        </button>
        <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded mb-2 w-full">
          Details
        </button>
        <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded mb-2 w-full" >
          Buy Now
        </button>
      </div>
    </div>


      <LoadingPage/>
    </div>
  );
};

export default productPage;
