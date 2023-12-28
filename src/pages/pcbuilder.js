import SectinonBannar from "@/components/shared/sectionbannar/sectionbannar";
import RootLayout from "@/layout/layout";
import Image from "next/image";
import Link from "next/link";
import { BsFillCpuFill } from "react-icons/bs";
import { BsFillMotherboardFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { FaMemory } from "react-icons/fa";
import { ImPowerCord } from "react-icons/im";
import { MdSdStorage } from "react-icons/md";
import { MdMonitor } from "react-icons/md";

const Pcbuilder = () => {
  const { ramproducts } = useSelector((state) => state.ram);
  console.log(ramproducts);
  return (
    <div>
      <SectinonBannar
        title="PC Builder"
        content="Build Your Own PC Just 1 minutes"
        bannar="https://images.pexels.com/photos/7639373/pexels-photo-7639373.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <div className="mx-10 mt-12 pb-10">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-2 col-span-3 bg-gray-500 text-[#fff] flex items-center font-2xl p-2">
            <span className="text-4xl">
              <FaMemory />
            </span>
            <span className="ml-2 lg:text-2xl text-md">Ram</span>
          </div>
          <div className="lg:col-span-7 col-span-6 flex items-center ml-2">
            {ramproducts[0]?.img && (
              <Image
                src={ramproducts[0]?.img}
                alt="image"
                width={70}
                height={70}
              />
            )}
            <h3 className="font-bold ml-3">
              {ramproducts[0]?.name || "Choose Ram"}
            </h3>
          </div>
          {ramproducts[0]?.price && (
            <div className="col-span-1 flex items-center">
              <h3 className="font-bold">{ramproducts[0]?.price} TK</h3>
            </div>
          )}

          <div className="col-span-2 flex items-center">
            {!ramproducts[0]?._id && (
              <Link
                href="/category/ram"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Choose
              </Link>
            )}
          </div>
        </div>

        <div className="grid grid-cols-12 my-3">
          <div className="lg:col-span-2 col-span-3 bg-gray-500 text-[#fff] flex items-center font-2xl p-2">
            <span className="text-4xl">
              <BsFillMotherboardFill />
            </span>
            <span className="ml-2 lg:text-2xl text-md">Motherboard</span>
          </div>
          <div className="lg:col-span-7 col-span-6 flex items-center ml-2">
            {ramproducts[1]?.img && (
              <Image
                src={ramproducts[1]?.img}
                alt="image"
                width={70}
                height={70}
              />
            )}
            <h3 className="font-bold ml-3">
              {ramproducts[1]?.name || "Choose MotherBoard"}
            </h3>
          </div>
          {ramproducts[1]?.price && (
            <div className="col-span-1 flex items-center">
              <h3 className="font-bold">{ramproducts[1]?.price} TK</h3>
            </div>
          )}

          <div className="col-span-2 flex items-center">
            {!ramproducts[1]?._id && (
              <Link
                href="/category/motherboard"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Choose
              </Link>
            )}
          </div>
        </div>

        <div className="grid grid-cols-12 my-3">
          <div className="lg:col-span-2 col-span-3 bg-gray-500 text-[#fff] flex items-center font-2xl p-2">
            <span className="text-4xl">
              <BsFillCpuFill />
            </span>
            <span className="ml-2 lg:text-2xl text-md">CPU</span>
          </div>
          <div className="lg:col-span-7 col-span-6 flex items-center ml-2">
            {ramproducts[2]?.img && (
              <Image
                src={ramproducts[2]?.img}
                alt="image"
                width={70}
                height={70}
              />
            )}
            <h3 className="font-bold ml-3">
              {ramproducts[2]?.name || "Choose CPU"}
            </h3>
          </div>
          {ramproducts[2]?.price && (
            <div className="col-span-1 flex items-center">
              <h3 className="font-bold">{ramproducts[2]?.price} TK</h3>
            </div>
          )}

          <div className="col-span-2 flex items-center">
            {!ramproducts[2]?._id && (
              <Link
                href="/category/cpu"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Choose
              </Link>
            )}
          </div>
        </div>

        <div className="grid grid-cols-12 my-3">
          <div className="lg:col-span-2 col-span-3 bg-gray-500 text-[#fff] flex items-center font-2xl p-2">
            <span className="text-4xl">
              <ImPowerCord />
            </span>
            <span className="ml-2 lg:text-2xl text-md">Power</span>
          </div>
          <div className="lg:col-span-7 col-span-6 flex items-center ml-2">
            {ramproducts[3]?.img && (
              <Image
                src={ramproducts[3]?.img}
                alt="image"
                width={70}
                height={70}
              />
            )}
            <h3 className="font-bold ml-3">
              {ramproducts[3]?.name || "Choose Power Unit"}
            </h3>
          </div>
          {ramproducts[3]?.price && (
            <div className="col-span-1 flex items-center">
              <h3 className="font-bold">{ramproducts[3]?.price} TK</h3>
            </div>
          )}

          <div className="col-span-2 flex items-center">
            {!ramproducts[3]?._id && (
              <Link
                href="/category/power-supply-unit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Choose
              </Link>
            )}
          </div>
        </div>

        <div className="grid grid-cols-12 my-3">
          <div className="lg:col-span-2 col-span-3 bg-gray-500 text-[#fff] flex items-center font-2xl p-2">
            <span className="text-4xl">
              <MdSdStorage />
            </span>
            <span className="ml-2 lg:text-2xl text-md">Stroage</span>
          </div>
          <div className="lg:col-span-7 col-span-6 flex items-center ml-2">
            {ramproducts[4]?.img && (
              <Image
                src={ramproducts[4]?.img}
                alt="image"
                width={70}
                height={70}
              />
            )}
            <h3 className="font-bold ml-3">
              {ramproducts[4]?.name || "Stroage"}
            </h3>
          </div>
          {ramproducts[4]?.price && (
            <div className="col-span-1 flex items-center">
              <h3 className="font-bold">{ramproducts[4]?.price} TK</h3>
            </div>
          )}

          <div className="col-span-2 flex items-center">
            {!ramproducts[4]?._id && (
              <Link
                href="/category/storage"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Choose
              </Link>
            )}
          </div>
        </div>

        <div className="grid grid-cols-12 my-3">
          <div className="lg:col-span-2 col-span-3 bg-gray-500 text-[#fff] flex items-center font-2xl p-2">
            <span className="text-4xl">
              <MdMonitor />
            </span>
            <span className="ml-2 lg:text-2xl text-md">Monitor</span>
          </div>
          <div className="lg:col-span-7 col-span-6 flex items-center ml-2">
            {ramproducts[5]?.img && (
              <Image
                src={ramproducts[5]?.img}
                alt="image"
                width={70}
                height={70}
              />
            )}
            <h3 className="font-bold ml-3">
              {ramproducts[5]?.name || "Monitor"}
            </h3>
          </div>
          {ramproducts[5]?.price && (
            <div className="col-span-1 flex items-center">
              <h3 className="font-bold">{ramproducts[5]?.price} TK</h3>
            </div>
          )}

          <div className="col-span-2 flex items-center">
            {!ramproducts[5]?._id && (
              <Link
                href="/category/monitor"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Choose
              </Link>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            disabled={ramproducts?.length < 6 ? true : false}
            className={`lg:mr-44 inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition focus:outline-none focus:ring active:text-indigo-500 ${
              ramproducts?.length >= 6 ? "hover:scale-110 hover:shadow-xl" : ""
            }`}
            onClick={() => alert("PC Build Done")}
          >
            Complete Build
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pcbuilder;

Pcbuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
