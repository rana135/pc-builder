import Bannar from "@/components/bannar/bannar";
import RootLayout from "@/layout/layout";
import Featuredproduct from "@/components/featuredProduct/FeaturedProduct";
import FeaturedCategory from "@/components/featuredCategory/featuredCategory";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Home({ allProduct }) {
  const { data: session } = useSession();
  return (
    <>
      {session && (
        <div className="bg-indigo-600 px-4 py-3 text-white flex justify-center items-center">
          <p className="text-center text-sm font-medium mr-3 ">
            WelCome {session?.user?.name}
          </p>
          <button
            onClick={() => signOut()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      )}
      <Bannar />
      <Featuredproduct allProduct={allProduct} key={allProduct._id} />
      <FeaturedCategory />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-server-six-psi.vercel.app/api/v1/pcparts"
  );
  const data = await res.json();
  return {
    props: {
      allProduct: data.data,
    },
  };
};
