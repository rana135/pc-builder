import { addToCartRam, removeFromCartRam } from "@/redux/ram/ramSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
const Singleproduct = ({ data }) => {
  const { img, name, price, rating, status, category } = data;
  const dispatch = useDispatch();
  const router = useRouter();
  const handleAdd = (data) => {
    dispatch(addToCartRam(data));
    router.push("/pcbuilder");
  };
  return (
    <div className="block rounded-xl border shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 relative lg:col-span-4 md:col-span-6 col-span-12">
      <div className="bg-red-500 absolute py-1 px-2 rounded-r-lg mt-10">
        Save 20% Today
      </div>
      <Image
        src={img}
        alt="img-products"
        className="w-full rounded-t-lg"
        width={100}
        height={100}
      />
      <div className="px-4 py-5">
        <h2 className="text-blue-500 font-bold mt-2">{name}</h2>
        <h4 className="font-bold py-1 text-[#5420e2]">
          Cagetory: <span className="text-black">{category}</span>
        </h4>
        <div className="flex my-1">
          <p className="font-bold mr-2">Price:</p>
          <p className="text-gray-500 font-bold mr-2">
            <span className="mr-1">{price}</span>Tk
          </p>
          <p className="text-gray-500 font-bold line-through">
            <span className="mr-1">{(price / 100) * 120}</span>Tk
          </p>
        </div>
        <div className="flex justify-between">
          <p>
            Status: <span>{status}</span>
          </p>
          <p>
            Rating: <span>{rating}</span> Star
          </p>
        </div>
        <div className="flex justify-between py-3">
          <button
            disabled={status != "available" ? true : false}
            className={`inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition focus:outline-none focus:ring active:text-indigo-500 ${
              status !== "available" ? "" : "hover:scale-110 hover:shadow-xl"
            }`}
            href="/download"
            onClick={() => handleAdd(data)}
          >
            Add To Builder
          </button>
          <Link
            className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            href={`/product/${data?._id}`}
          >
            <span className="text-sm font-medium"> View Details </span>

            <svg
              className="h-5 w-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
